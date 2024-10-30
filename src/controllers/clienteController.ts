import {Cliente, clientes} from '../models/clienteModel'
import { Request,Response } from 'express';
import {v4 as uuidv4 } from 'uuid'

export const create = async (request:Request,response:Response)=>{
    const {nome,email} = request.body
    let cliente : Cliente = request.body
    if(!nome || !email){
        await response.status(400).send({"menssage":"Campos inncompletos ..."})
        return;
    }
    cliente.id = uuidv4()
    cliente.nome = nome
    cliente.email = email
    clientes.push(cliente)
    await response.status(200).send({"menssage": "Metodo HTTP Post: recurso criado com sucesso!!"})
    return;

}
export const researchAll = async (request:Request,response:Response)=>{

}
export const update = async (request:Request,response:Response)=>{}
export const deleted = async (request:Request,response:Response)=>{}
