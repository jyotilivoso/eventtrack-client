import { client } from "./axiosClient";


export function bookTourist(payLoad) {
  return client.post('/user/register',payLoad)
}

export function Signin(payLoad){
  return client.post('/user/login',payLoad)
}

export function getAllUser(){
  return client.get('/User/get-all-record')
}

export function deleteUser(id){
  return client.delete(`/User/delete-record/${id}`);
}


