alert("Bienvenidos al ingreso y despacho de mercaderia");
alert("¿Que accion desea realizar?");

const staging ={};
class pedido{
  constructor (cliente, bultos, pedido, ubicacion){
    this.cliente = cliente;
    this.bultos = bultos;
    this.pedido = pedido;
    this.ubicacion = ubicacion;
  }
}  
function AlocarPedido (arreglo){
  let cant = prompt("ingrese cuantos bultos desea alocar");
   
  for (let i = 0; i < cant; i ++){
    let cliente = prompt("ingrese el nombre del cliente");
    let bultos = prompt("ingrese el N° de pallet");
    let pedido = prompt("ingrese el N° de pedido");  
    let ubicacion = prompt("ingrese la Ubicacion");
    
    const staging = new pedido(cliente,bultos,pedido,ubicacion);
  }  
   
  
  
  return staging;

}

function despacho (staging, order){
  if (staging.pedido.includes(order)){
    let index = staging.pedido.indexOf(order);
    staging.splice(index,1);
  
  }else{
    alert ("Disculpe el pedido no se encuentra cargado")
  }
  return staging;
}

function busqueda(staging,orders){
  if (staging.pedido.includes(orders)){
    for (let index = 0; index < staging.length; index++) {
      if (staging.pedido = orders){
        console.log("el pedido se encuentra en la ubicacion" + staging.ubicacion);
      }
      
    }

  
  }else{
    alert ("Disculpe el pedido no se encuentra cargado")
  }
  
}

  
  

let accion = prompt("ingrese: 1 = aloca pedido| 2 = despacho de pedido| 3 = busqueda de pedido");
switch (accion) {
  case "1":
    const staging =AlocarPedido(arreglo);
    console.log(staging)
    break;
  case "2":
    let order = prompt("indique el pedido que quiere despachar");
    const warehouse = despacho(staging, order);
    console.log(warehouse)
    break;
  case "3":
    let orders = prompt("indique el pedido que quiere buscar");
    busqueda(staging, orders);
    break;

  default:
    alert("disculpe pero no agrego un valor correcto, vuelva a intentarlo")
    break;
}