import {IContactQuery} from '../components/ContactForm'
import api from './api';
export class ContactServices {
    static async contactQueryGeneral(contactQuery: IContactQuery) {
        try{
            const response : any = await api.post('/contact/gymkhana',{contactQuery});   
            return response;
        }
        catch(e){
            return Promise.reject(e);
        }
    }
}