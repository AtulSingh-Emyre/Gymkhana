import api from "./api";

export class AuthRepository {
    static async getAdminPerms(details:string){
        try{
        const response : any = await api.post('/user/login',{iden:details});   
        return response;
        }
        catch(e){
            return Promise.reject(e);
        }
    }


}