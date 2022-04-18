import {NextFunction, Request, Response} from "express";
import {validationResult,ValidationChain} from "express-validator";

export const validate = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        await Promise.all(validations.map(validation => validation.run(req)));
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        const errorFirst = errors.array()[0];
        console.log(errorFirst);
        let param = errorFirst.param;
        let msg = errorFirst.msg;

        let content = "";

        if(msg.match(/between:(.*?),(.*?)$/i)){
            let match = msg.match(/between:(.*?),(.*?)$/i);
            content = res.__('validation.between',res.__("attribute."+param),match[1],match[2])
        }else {
            content = res.__("validation."+msg,res.__("attribute."+param))
        }

        return res.json({
            status:422,
            content:content,
            data:{}
        })
    };
};
