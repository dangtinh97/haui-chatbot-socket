import {ApiResponse} from "../responses/ApiResponse";
import ResponseSuccess from "../responses/ResponseSuccess";

const {Storage} = require('@google-cloud/storage');
import {v4 as uuidv4} from 'uuid'
import ResponseError from "../responses/ResponseError";
const { format } = require("util");

class GoogleCloudHelper {
    public static extensionByMimetype(mimetype:string):String
    {
        const defined:any = {
            'jpeg' :'image/jpeg',
            'png' :'image/png'
        }
        let ext = '';
        Object.keys(defined).forEach((key)=>{
            if(defined[key]===mimetype) ext = key
        })
        return ext;
    }

    public static async upload(bufferFile:Buffer,fileName:string):Promise<ApiResponse>
    {
        return new Promise((resolve,reject)=>{
            const storage = new Storage({
                keyFilename: './.certs/datinee-8274027f8b1a.json'
            });

            var today = new Date();
            var date = today.getFullYear()+""+(today.getMonth()+1)+""+today.getDate();
            let bucketName = 'datinee-dev';
            const bucket = storage.bucket(bucketName);
            const nameFileUpload = date+'/'+uuidv4()+fileName
            const blob = bucket.file(nameFileUpload);

            const blobStream = blob.createWriteStream({
                resumable: false,
            });

            blobStream.on("error", (err:Error) => {
                return resolve(new ResponseError(500,err.message))
            });

            blobStream.on("finish", async (data:any) => {
                // Create URL for directly file access via HTTP.
                const publicUrl = format(
                    `https://storage.googleapis.com/${bucket.name}/${blob.name}`
                );
                try {
                    // Make the file public
                    await bucket.file(nameFileUpload).makePublic();
                } catch (e){
                    return resolve(new ResponseError())
                }

                return resolve(new ResponseSuccess({
                    'url': publicUrl,
                    'path':'/'+nameFileUpload,
                    'bucket_name':bucketName
                }))
            });
            blobStream.end(bufferFile);
        })
    }
}
export default GoogleCloudHelper