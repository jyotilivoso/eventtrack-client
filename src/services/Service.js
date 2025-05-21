import { client } from "./axiosClient";


export function bookTourist(payLoad) {
  return client.post('/user/create',payLoad)
}

