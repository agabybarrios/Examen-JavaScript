/*Crear la clase de teléfono (con la función constructora). Un teléfono tiene un número asignado que se le pasa a la función
constructora, y carácterístcas como marca y color. También tiene un contador de llamadas que parte en cero. (1 pto)
Crear un método que se llame "marcar" que reciba como argumento un número de teléfono y aumente un contador de
llamadas en uno (1 pto)*/

function Telefono (numero, marca, color) {
  this.numero = numero;
  this.marca = marca;
  this.color = color;
  this.contador = function(contar){
    for (var i = 0; i > 0; i++) {
    }
  }
}


var telefono2 = {
  numero : 8888888
	marcar: function (numeroTel) {
    for (var i = 0; i > 0; i++) {
      console.log(this.numero + " contador " + i);
    }
  }
}

var tel1 = new Telefono (88888, telcel, rojo);

telefono2.marcar(tel1);
