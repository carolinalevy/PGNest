import { Injectable } from '@nestjs/common';
import { Registro } from '../registrarse/Registro';
import * as fs from 'fs';


@Injectable()
export class LoginService {
    public login(userInfo: any): boolean {
        let userLogged = new Registro(0, userInfo.email, userInfo.password, "", "", "", 0, "");
        let users = this.getUsers();
        for (const user of users) {
           
            if(user.getEmail() == userLogged.getEmail() && user.getPassword() == userLogged.getPassword()){
            
                return true;
            }  
        } 
        return false;
    }

    private getUsers(): Registro[]{
        let archivo = fs.readFileSync('resources/registro.csv', 'utf8');
        const elementos = archivo.split('\n')
            .map(p => p.replace('\r', '')).map(p => p.split(','));
        let listaUsers : Registro[] = [];
        for (let i = 0; i < elementos.length; i++) {
            let user = new Registro(Number(elementos[i][0]),elementos[i][1],elementos[i][2],elementos[i][3], elementos[i][4], elementos[i][5], Number(elementos[i][6]), elementos[i][7]);
            listaUsers.push(user);
        }
        return listaUsers;
    }

}