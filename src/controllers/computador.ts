import { Request, Response } from 'express'
import { FabricaDeComputador, Computer } from './fabrica'

var emEstoque: Computer[] = []

export function get(req: Request, res: Response){
  res.send(emEstoque)
  
}

export function post(req: Request, res: Response) {
  const {
    type,
    ram,
    hdd,
    cpu
  }= req.body

  const pc1 = FabricaDeComputador.criaComputador(type, ram, hdd, cpu)
  console.log(pc1.toString())

  emEstoque.push(pc1)

  res.send(emEstoque)
}

export function put(req: Request, res: Response) {
  const parametro = req.params
  const index: number = parseInt(parametro.id)

  const {
    type,
    ram,
    hdd,
    cpu
  } = req.body



  emEstoque[index] = {
    type,
    ram,
    hdd,
    cpu
  } 

  console.log(emEstoque[index])

  res.send('Dentro do verbo http PUT')
}
