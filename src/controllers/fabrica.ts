export interface Computer {
  getRAM(): string
  getHDD(): string
  getCPU(): string
  getType(): string
  toString(): string
}


//Implementando para PC
class PC implements Computer {
  constructor(private type: string, private ram: number, private hdd: number, private cpu: number) {}

  getRAM(): string {
    return `${this.ram}GB`
  }

  getHDD(): string {
    return `${this.hdd}`
  }

  getCPU(): string {
    return `${this.cpu}GHz`
  }

  getType(): string {
    return `PC`
  }

  toString(): string {
    return `Type: ${this.getType()}, RAM: ${this.getRAM()}, HDD: ${this.getHDD()}, CPU: ${this.getCPU()}`
  }

}

//implementando para Server

class Server implements Computer {
  constructor(private type: string, private ram: number, private hdd: number, private cpu: number){}

  getRAM(): string {
    return `${this.ram}GB`
  }

  getHDD(): string {
    return `${this.hdd}GB`
  }

  getCPU(): string {
    return `${this.cpu}GHz`
  }

  getType(): string {
    return 'Server'
  }

  toString(): string {
    return `Type: ${this.getType()}, RAM: ${this.getRAM()}, HDD: ${this.getHDD()}, CPU: ${this.getCPU()}`
  }
}

//Fábrica para criar instâncias de computadores
export class FabricaDeComputador {
  static criaComputador(type: string, ram: number, hdd: number, cpu: number): Computer {
    if (type === 'PC') {
      return new PC(type, ram, hdd, cpu)
    } else if (type === 'Server') {
      return new Server(type, ram, hdd, cpu)
    } else {
      throw new Error('Tipo de computador inválido.')
    }
  }
}

