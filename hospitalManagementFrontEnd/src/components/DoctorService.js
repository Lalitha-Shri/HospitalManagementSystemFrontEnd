import axios from 'axios'
import { getToken } from './AuthService';
//interceptor is to add token to header for each api call made
axios.interceptors.request.use(function (config) {
    config.headers["Authorization"]=getToken();
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });


const Base_URL= "http://localhost:8080/api/doctor";

 export const getAllDoctor=()=>axios.get(Base_URL);

 export const getDoctor=(id)=>axios.get(Base_URL+ "/" + id);

 export const addDoctor=(doctor)=>axios.post(Base_URL,doctor);

 export const updateDoctor=(id,doctor)=>axios.put(Base_URL+"/"+id,doctor);

 export const deleteDoctor=(id)=>axios.delete(Base_URL+"/"+id);


