const ApiError = require('../errors/ApiError.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const uuid = require('uuid')
const path = require('path')
const {User, UserApp, UserFeeedback, UserPortfolio, UserResume, UserAvatar} = require('../models/models.js')

const generateJwt = (id, email, name, surname, aftername, classNum, git, phoneNum, role, img, portfolioId, resumeId) => {
    return jwt.sign({id, email, name, surname, aftername, classNum, git, phoneNum, role, img, portfolioId, resumeId}, process.env.SECRET_KEY, {expiresIn: '24h'})
}
//
class UserController {

    async register (req, res, next)  {
        const {email, password, name, surname, aftername, classNum, git, phoneNum, role} = req.body

        if(!email || !password || !name || !surname || !role) {
            return next(ApiError.notFoundReq('Не все данные указаны'))
        }

        const check = await User.findOne({where: {email}})
        if(check) {
            return next(ApiError.notFoundReq('Уже есть такой пользователь'))
        }
        

        let fileName
        if (!req.files) {
            fileName =  'noimg'
        } else {
            fileName = uuid.v4()+'.jpg';
            const img = req.files.img
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))
        }
        

        const hashPassword = await bcrypt.hash(password, 5)

        const user = await User.create({email, password: hashPassword, name, surname, aftername, classNum, git, phoneNum, role})
        const avatar = await UserAvatar.create({img: fileName, userId: user.id})
        const portfolio = await UserPortfolio.create({userId: user.id})
        const resume = await UserResume.create({userId: user.id})

        const token = generateJwt(user.id, user.email, user.name, user.surname,
                                    user.aftername, user.classNum, user.git, user.phoneNum,
                                    user.role, avatar.img, portfolio.id, resume.id)

        return res.json({token})
    }

    async login (req, res, next)  {
        const {email, password} = req.body
        
        if(!email || !password) {
            return next(ApiError.notFoundReq('Не все данные указаны:null'))
        } else {
            const user = await User.findOne({where: {email}})
            if(!user) {
                return next(ApiError.notFoundReq('Такого пользователя не существует:email'))
            }
            let comparePassword = bcrypt.compareSync(password, user.password)
            if(!comparePassword) {
                return next(ApiError.notFoundReq('Неверный пароль:password'))
            }
            const userId = user.id

        

            const ava = await UserAvatar.findOne({where: {userId: userId}}) || {img: 'img'}
            const portfolio = await UserPortfolio.findOne({where: {userId: userId}})
            const resume = await UserResume.findOne({where: {userId: userId}})

        

            const token = generateJwt(user.id, user.email, user.name, user.surname,
                user.aftername, user.classNum, user.git, user.phoneNum, user.role,
                ava.img, portfolio.id, resume.id);

            return res.json({token})
        }
    }

    async checkAuth (req, res, next)  {
        const token = generateJwt(req.user.id, req.user.email, req.user.name, req.user.surname,
            req.user.aftername, req.user.classNum, req.user.git, req.user.phoneNum, req.user.role,
            req.user.img, req.user.portfolioId, req.user.resumeId)

        return res.json({token})
    }

    async checkEmail (req, res, next) {
        const {email} = req.query
        if(!email) return next(ApiError.notFoundReq('Не указан искомый email'))
        const user = await User.findOne({where: {email: email}})

        return res.json({isExisted: !!user})
    }

    async checkPhone (req, res, next) {
        const {phone} = req.query
        if(!phone) return next(ApiError.notFoundReq('Не указан искомый email'))
        const user = await User.findOne({where: {phoneNum: phone}})

        return res.json({isExisted: !!user})
    }
}
module.exports = new UserController()