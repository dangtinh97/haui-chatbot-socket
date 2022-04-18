import BaseController from "./base.controller";
import {Request, Response} from "express";
import UserRepository from "../repositories/user.repository";
import StrHelper from "../helpers/str.helper";
import Favorite, {PERSONAL} from "../models/favorite.model";
import FavoriteRepository from "../repositories/favorite.repository";
import favoriteRepository from "../repositories/favorite.repository";

const fs = require('fs')
var slug = require('slug')

class TestController extends BaseController {
    protected readonly userRepository:UserRepository
    protected favoriteRepository:FavoriteRepository
    public constructor(req: Request, res: Response) {
        super(req, res);
        this.favoriteRepository = new FavoriteRepository()
        this.userRepository = new UserRepository()
    }

    public async createUser() {
        return this.res.json({})
        const provinces = ['Hà Nội', 'Hải Phỏng', 'Bắc Ninh', 'Bắc Giang', 'Hà Nam', 'Lạng Sơn', 'Đà Nẵng', 'Hoà Bình', 'Quảng Ninh', 'Ninh Bình'];
        let model = new UserRepository()
        const data = fs.readFileSync('public/girl.txt', 'utf8').split('\n')
        for (let i = 0; i < 50; i++) {
            let name = data[i]
            let email = slug(name, '') + JSON.stringify(i) + '@gmail.com'
            let address = provinces[Math.floor(Math.random() * provinces.length)];

            let password = StrHelper.hashPassword(slug(name, ''))
            let age = Math.floor(Math.random() * 10) + 20;

            const createData = {
                full_name: name,
                email: email,
                address: address,
                avatar_attachment_id: Math.floor(Math.random() * 9)+1,
                care_about_gender: "MALE",
                gender: "FEMALE",
                age: age,
                verify_account: true,
                status: "NORMAL",
                password: password,
                id:await model.countId(),
                'tokens_notification': [
                    {
                    'os_name': "IOS",
                    'token': ""
                    },
                    {
                        'os_name': "IOS",
                        'token': ""
                    }
                ]

            }
            await model.create(createData);
        }


        // model.create({
        //     name:
        // })
        return this.res.json({})
    }

    public async addFavorite()
    {
        this.res.json({})
        const favorites=['READING_BOOKS','LISTEN_TO_MUSIC','SING','SWIM'];
        const users =await this.userRepository.find({

        })
        let favoriteRepo = this.favoriteRepository
        users.forEach(function (user){
            let userId = user.id;
            let numberRand = StrHelper.rand(1,favorites.length-1);
            let favoriteRand = StrHelper.shuffle(favorites).slice(0,numberRand);
            let dataInsert = favoriteRand.map(function (favorite){
                return {
                    user_id:userId,
                    user_oid:StrHelper.toObjectId(user._id),
                    key:favorite,
                    active:true,
                    type:PERSONAL,
                }
            })
            favoriteRepo.insert(dataInsert)
            console.log(dataInsert)
            // console.log(user)
        })
        // console.log(StrHelper.shuffle(favorites),favorites);
        this.res.json({})
    }

}

export default TestController