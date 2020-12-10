import { Injectable } from '@nestjs/common';
import { Registro } from '../registrarse/Registro.entity';
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


    // public async login2(userInfo: any): Promise<boolean> {
    //     let userLogged = new Registro(0, userInfo.email, userInfo.password, "", "", "", 0, "");
    //     let userMail = this.getUser(userLogged.getEmail());
    //     let userPassword = this.getUser(userLogged.getPassword());
    //     if(userMail == userLogged[1] && userPassword == userLogged[2]) {          
    //         return true;
    //     } 
    //     return false;
    // }

    // private async getUser(email: string): Promise <Usuario> {
    //     const user = await this.usuarioRepository.findOne(email);
    //     return user;
    // }

}