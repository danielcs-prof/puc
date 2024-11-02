import {Cliente, clientes} from '../models/clienteModel'
import { Request,Response } from 'express';
import {v4 as uuidv4 } from 'uuid'

export const create = async (request:Request,response:Response)=>{
    const {nome,email} = request.body
    let cliente : Cliente = request.body
    if(!nome || !email){
        response.status(400).send({"menssage":"Campos inncompletos ..."})
        return;
    }
    cliente.id = uuidv4()
    cliente.nome = nome
    cliente.email = email
    clientes.push(cliente)
    response.status(201).send({"menssage": "Metodo HTTP Post: recurso criado com sucesso!!"})
    return;

}
export const researchAll = async (request:Request,response:Response)=>{
     response.status(200).send(clientes)
}
export const update = async (request:Request,response:Response)=>{
    const {id} = request.params
    const {nome, email} = request.body
    if(!nome || !email){
        response.status(400).send({"menssage":"Campos inncompletos ..."})
        return;
    }
    const clienteIndice = clientes.findIndex( c => c.id === id )
    if(clienteIndice < 0 ){
        response.status(404).send({"menssage": "Recurson não encontrado .."})
    return
    }
    clientes[clienteIndice] = {id,nome,email}
    response.status(201).send({"menssage": "Recurso atualizado"})
}
export const deleted = async (request:Request,response:Response)=>{}
