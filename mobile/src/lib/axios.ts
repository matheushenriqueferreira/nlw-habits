import axios from "axios";

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/' // Se der erro na requisição, tente usar localhost ou o endereço de ipv4 da sua máquina
})