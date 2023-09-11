// Classe base - Veículo
class Veiculo {
constructor(marca, modelo) {
this.marca = marca;
this.modelo = modelo;
this.velocidade = 0;
}

acelerar() {
console.log(`${this.marca} ${this.modelo} acelerou.`);
this.velocidade += 10;
}

frear() {
console.log(`${this.marca} ${this.modelo} freou.`);
this.velocidade -= 5;
}

status() {
console.log(`${this.marca} ${this.modelo} está a ${this.velocidade} km/h.`);
}
}

// Subclasse - Carro
class Carro extends Veiculo {
constructor(marca, modelo, portas) {
super(marca, modelo);
this.portas = portas;
}

abrirPortas() {
console.log(`${this.marca} ${this.modelo} abriu as ${this.portas} portas.`);
}
}

// Subclasse - Moto
class Moto extends Veiculo {
constructor(marca, modelo, cilindradas) {
super(marca, modelo);
this.cilindradas = cilindradas;
}

empinar() {
console.log(`${this.marca} ${this.modelo} empinou com ${this.cilindradas} cilindradas.`);
}
}

// Criando instâncias de Veículos
const carro1 = new Carro("Chevrolet", "Onix", 4);
const moto1 = new Moto("Kawasaki", "Z900",  948);

// Demonstração da herança
carro1.acelerar();
carro1.status();
carro1.abrirPortas();

moto1.acelerar();
moto1.status();
moto1.empinar();