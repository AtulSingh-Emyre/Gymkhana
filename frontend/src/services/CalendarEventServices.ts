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
    static async postEvents(data:any){
        try{
        const response : any = await api.post('/events/new', {postData:data});   
        return response;
        }
        catch(e){
            return Promise.reject(e);
        }
    }
    static async updateEvents(id:string,data:any){
        try{
        const response : any = await api.post('/events/update', {data:data, id:id});   
        return response;
        }
        catch(e){
            return Promise.reject(e);
        }
    }
    static async deleteEvents(id:string){
        try{
        const response : any = await api.delete('/events/delete/'+id);   
        return response;
        }
        catch(e){
            return Promise.reject(e);
        }
    }
}