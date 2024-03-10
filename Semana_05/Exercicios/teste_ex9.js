class SomadorDeNotas{


  constructor(){
    this.total = 0

  }
  somarNota(nota){
      this.total += nota
      return this.total;
  }
  Total(){
  
    console.log(this.total)
  }

}
let soma = new SomadorDeNotas()


soma.somarNota(10)
soma.somarNota(9)
soma.somarNota(10)
soma.Total()