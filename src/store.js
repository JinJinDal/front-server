import { create } from "zustand";
import axios from "axios";

const request = axios.create({
    baseURL: process.env.REACT_APP_baseURL,
    timeout: 1000
});

export const useStore = create((set) => {
    return {
        data: [],
        status: false,
        getData: () => {
            set({status:false});
            request.get('/')
                .then(res => {
                    set({data:res.data, status:true});
                })
                .catch((err)=>{console.log(err);})//에러가 났을때
        },
        postData: (add) => {
            set({status:false});
            request.post('/',add)
            .then(res=>{
                set({data:res.data, status:true});
            })
        },
        putData: () => {
            request.put('/')
            .then(res=>{
                set({data:res.data,status:true});
            })
        },
        deleteData: (delt) => { 
            set({status:false});
            request.delete(`/`,delt)
            .then(res=>{
                set({data:res.data,status:true});
            })
            .catch((err)=>{console.log(err);})
         }
    }
});