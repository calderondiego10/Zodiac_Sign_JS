let mes = prompt("Ingrese su mes de nacimiento").toLowerCase();
let dia = parseInt(prompt("Ingrese su dia de nacimiento"))

function zodiacal(mes,dia){
  let signo = "";
  
switch(mes){
  case "enero":
    if(dia === 0 || dia >= 32){
      signo = "Fecha Invalida"
    }
    else {
      signo = (dia >= 21) ? "Acuario":"Capricornio";
    }
    break;
  case "febrero":
    if(dia === 0 || dia >= 30){
      signo = "Fecha Invalida";
    }
    else{
      signo = (dia >= 20) ? "Piscis":"Acuario";
    }
    break;
  case "marzo":
    if(dia === 0 || dia >= 32){
      signo = "Fecha Invalida";
    }
    else{
      signo = (dia >= 21) ? "Aries":"Piscis";
    }
    break;
  case "abril":
    if(dia === 0 || dia >= 31){
      signo = "Fecha Invalida";
    }
    else{
      signo = (dia >= 21) ? "Tauro":"Aries";
    }
    break;
  case "mayo":
    if(dia === 0 || dia >= 32){
      signo = "Fecha Invalida";
    }
    else{
      signo = (dia >= 21) ? "Geminis":"Tauro";
    }
    break;
  case "junio":
    if(dia === 0 || dia >= 31){
      signo = "Fecha Invalida"
    }
    else{
      signo = (dia >= 21) ? "Cancer":"Geminis"
    }
    break;
  case "julio":
    if(dia === 0 || dia >= 32){
      signo = "Fecha Invalida"
    }
    else{
      signo = (dia >= 23) ? "Leo":"Cancer";
    }
    break;
  case "agosto":
    if(dia === 0 || dia >= 32){
      signo = "Fecha Invalida"
    }
    else{
      signo = (dia >= 24) ? "Virgo":"Leo"
    }
    break;
  case "septiembre":
    if(dia === 0 || dia >= 31){
      signo = "Fecha Invalida"
    }
    else{
      signo = (dia >= 23) ? "Libra":"Virgo"
    }
    break;
  case "octubre":
    if(dia === 0 || dia >= 32){
      signo = "Fecha Invalida"
    }
    else{
      signo = (dia >= 24) ? "Escorpio":"Libra"
    }
    break;
  case "noviembre":
    if(dia === 0 || dia >= 31){
      signo = "Fecha Invalida"
    }
    else{
    signo = (dia >= 23) ? "Sagitario":"Escorpio";
    }
    break;
  case "diciembre":
    if(dia === 0 || dia >= 32){
      signo = "Fecha Invalida"
    }
    else{
    signo = (dia >= 22) ? "Capricornio":"Sagitario";
    }
    break;
   
  }
  return signo;
}

let signo = zodiacal(mes,dia);
alert(signo)