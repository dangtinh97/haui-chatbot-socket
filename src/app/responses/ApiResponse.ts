export class ApiResponse
{
    constructor(public status:number, public content:string, public response:object) {

    }

    public toObject():object
    {
        return {
            status:this.status,
            content:this.content,
            data: this.response
        }
    }

    public getData():any{
        return this.response
    }
}
