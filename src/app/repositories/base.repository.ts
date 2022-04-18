import {Model, Schema} from 'mongoose'

export abstract class BaseRepository
{
    public _model: Model<any>;

    protected constructor(schemaModel: Model<any>) {
        this._model = schemaModel;
    }

    async findById(id:String):Promise<any>{
        return await this._model.findById(id).exec()
    }

    async find(cond:object):Promise<Array<any>>{
        let condNew:any = JSON.parse(JSON.stringify(cond))
        return await this._model.find(condNew).exec()
    }

    async findOne(cond:object):Promise<any>{
        let condNew:any = JSON.parse(JSON.stringify(cond))
        return await this._model.findOne(cond).exec()
    }

    async update(cond: object, data: object): Promise<object> {
        return  await this._model.updateOne(cond, data).exec();
    }

    async updateMany(cond:object,data:object):Promise<any>{
        return await this._model.updateMany(cond,data).exec()
    }

    async create(data:object):Promise<any> {
        return await this._model.create(data);
    }

    async delete(id:String):Promise<object>{
        return await this._model.findById(id).deleteOne().exec();
    }

    async deletedMany(cond:object):Promise<object>{
        return await this._model.find(cond).deleteMany().exec();
    }

    async findAndUpdate(cond:object,data:object,upsert:boolean = false):Promise<any>{
        return await this._model.findOneAndUpdate(cond,{
            $set:data
        },{
            returnNewDocument: true,
            upsert:upsert,
            returnDocument:"after"
        }).exec()
    }

    async findAndModify(cond:object,data:object,upsert:boolean = false):Promise<any>{
        return await this._model.findOneAndUpdate(cond,data,{
            returnNewDocument: true,
            upsert:upsert,
            returnDocument:"after"
        }).exec()
    }

    async insert(data:Array<object>):Promise<any>{
        return await this._model.insertMany(data)
    }
}
