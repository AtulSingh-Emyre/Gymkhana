import api from "./api";

export class TechEventRepository {
    static async getEvents(){
        try{
        const response : any = await api.get('/tech/current');   
        return response;
        }
        catch(e){
            return Promise.reject(e);
        }
    }
}