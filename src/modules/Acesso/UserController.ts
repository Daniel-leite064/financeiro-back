import { Request } from 'express'
import { AppDataSource } from '../../connection'
import { BadRequestException } from '../../utils/errors/400/BadRequestException'
import { Delete, Get, Post, Put } from '../../utils/decorators/Methods'
import { SystbUsuarioSistema } from '../../entity/SystbUsuarioSistema'

export class UserController {

    private defaultRepository = AppDataSource.getRepository(SystbUsuarioSistema)

    @Get('/users')
    all() {
        return this.defaultRepository.find()
    }

    @Get('/user/:id')
    one(req: Request) {
        return this.defaultRepository.findOne({where: {id:Number(req.params.id)}})
    }

    @Post('/users')
    async save(req: Request) {

        const user = {} as SystbUsuarioSistema

        user.login = req.body.login
        user.senha = req.body.senha
        user.idUsuarioCadastro = 1

        return await this.defaultRepository.save(user)
    }

    @Put('/users/:id')
    async change(req: Request) {
        if (!req.params.id) throw new BadRequestException('ID não foi informado')
        const user = await this.defaultRepository.findOne(
            { where: { id: Number(req.params.id) }}
        )
        if(!user) throw new BadRequestException('Usuário não foi encontrado')
            
        user.senha = req.body.senha
        
        return await this.defaultRepository.save(user)
    }


    @Delete('/users/:id')
    remove(req: Request) {



    }

}
