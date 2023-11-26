import { Request, Response } from 'express'

interface Veiculo {
  nome: string,
  modelo: string,
  ano: number
}

class Carro implements Veiculo {
  constructor(public nome: string, public modelo: string, public ano: number, public velMax: number) {
    console.log(`O carro ${this.nome}, modelo: ${this.modelo}, do ano: ${this.ano} consegue chegar a velocidade máxima de ${this.velMax}km/h.`)
  }
  ligarBluetooth(){
    console.log(`${this.nome} bluetooth ligado.`)
  }
  
  desligaBluetooth(){
    console.log(`${this.nome} bluetooth desligado.`)
  }
  
}
    

var emEstoque:Veiculo[] = []

export function get(req: Request, res: Response){
  res.send(emEstoque)
  
}

export function post(req: Request, res: Response) {
  const {
    nome,
    modelo,
    ano,
    velMax
  }= req.body

  

  const veiculo1: Veiculo = new Carro(nome, modelo, ano, velMax)
  emEstoque.push(veiculo1)

  
  res.send(emEstoque)
}

