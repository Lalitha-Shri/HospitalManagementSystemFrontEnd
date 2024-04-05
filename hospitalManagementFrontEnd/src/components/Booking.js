import axios from 'axios'
import { getToken } from './AuthService';
//interceptor to add token to every api call in header
axios.interceptors.request.use(function (config) {
    config.headers["Authorization"]=getToken();
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });


const Base_URL= "http://localhost:8080/api/appointment";
const Base_URL1= "http://localhost:8080/api/medication";


 export const getAllAppointment=()=>axios.get(Base_URL);
 export const getAppointmentById=(id)=>axios.get(Base_URL+"/patient"+"/"+id);

 export const addAppointment=(appointment)=>axios.post(Base_URL,appointment);

 export const cancelAppointment=(id)=>axios.put(Base_URL+"/cancelAppointment/"+id);

 export const addMedicines=(medicine)=>axios.post(Base_URL1,medicine);
 
 export const getMedicationByName=(name)=>axios.get(Base_URL1+"/patient"+"/"+name);

 
