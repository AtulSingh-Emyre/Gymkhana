import api from "./api";

export class CalendarEventRepository {
    static async getEvents(){
        try{
        const response : any = await api.get('/events/all');   
        return response;
        }
        catch(e){
            return Promise.reject(e);
        }
    }
}