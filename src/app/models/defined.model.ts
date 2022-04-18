export default {
    timestamps:{
        updatedAt:'updated_at',
        createdAt:'created_at',
    },
    versionKey:false
}

export const save = function (next:any)
{
    this.deleted_flag = false
    next()
}