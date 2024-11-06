import {Cliente, clientes} from '../models/clienteModel'
import { Request,Response } from 'express';
import {v4 as uuidv4 } from 'uuid'
import {Prisma, PrismaClient} from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const prisma = new PrismaClient()
//******************************************************************************************* */
export const create = async (request:Request,response:Response)=>{
    const {nome,email,celular} = request.body
    try {
        const result = await prisma.cliente.create({
            data:{
                nome: nome,
                email: email,
                celular: celular
            }
        })
        response.status(201).json({"message": "Criado com sucesso."})
    } catch (error) {
        if(error instanceof PrismaClientKnownRequestError){
            console.log(error)
            response.status(409).json({
                error:{
                    message: error.code,
                    field: error.meta
                }
            })
        }
    }
    
}
//******************************************************************************************* */
export const researchAll = async (request:Request,response:Response)=>{
    
    try {
        const result = await prisma.cliente.findMany({})
        console.log(result)
        response.status(200).json(result)
    } catch (error) {
        if(error instanceof PrismaClientKnownRequestError){
            console.log(error)
            response.status(409).json({
                error:{
                    message: error.code,
                    field: error.meta
                }
            })
        }
    }
}
//******************************************************************************************* */
export const researchId = async (request:Request,response:Response)=>{
    const email = request.params.email
    try {
        const result = await prisma.cliente.findUnique({
            where: {
                email : email
            }
        })
        console.log(result)
        response.status(200).json(result)
    } catch (error) {
        if(error instanceof PrismaClientKnownRequestError){
            console.log(error)
            response.status(409).json({
                error:{
                    message: error.code,
                    field: error.meta
                }
            })
        }
    }
}
//******************************************************************************************* */
export const update = async (request:Request,response:Response)=>{
    const id = request.params.id
    const {nome, email, celular} = request.body
    
    try {
        const result = await prisma.cliente.update({
            where: { id : Number(id) },
            data:{
                nome,
                email,
                celular
            }
        })
        console.log(result)
        response.status(200).json(result)
    } catch (error) {
        if(error instanceof PrismaClientKnownRequestError){
            console.log(error)
            response.status(409).json({
                error:{
                    message: error.code,
                    field: error.meta
                }
            })
        }
    }
}
//******************************************************************************************* */
export const deleted = async (request:Request,response:Response)=>{
    const id = request.params.id
    
    try {
        const result = await prisma.cliente.delete({
            where: { id : Number(id) }
        })
        console.log(result)
        response.status(200).json(result)
    } catch (error) {
        if(error instanceof PrismaClientKnownRequestError){
            console.log(error)
            response.status(409).json({
                error:{
                    message: error.code,
                    field: error.meta
                }
            })
        }
    }
}
