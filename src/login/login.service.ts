import { Injectable } from '@nestjs/common';
import { Registro } from 'src/registrarse/Registro.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';




@Injectable()
export class LoginService {

    constructor(
        @InjectRepository(Registro) private readonly registroRepository: Repository<Registro>
    ) { }

    public async login(userInfo: any): Promise<boolean> {
        let userLogged = new Registro(0, userInfo.email,"","", 0,"", userInfo.contraseña);
        let users = this.getUsers();
        for (const user of await users) {

            if(user.getEmail() == userLogged.getEmail() && user.getContraseña() == userLogged.getContraseña()){

                return true;
            }  
        } 
        return false;
     }

    private async getUsers(): Promise<Registro[]> {
        const allUsers = await this.registroRepository.find();
        return allUsers;
    }
}