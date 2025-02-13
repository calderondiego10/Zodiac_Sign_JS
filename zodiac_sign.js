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
    if(dia >= 30){
      signo = "Fecha Invalida";
    }
    else if(dia >= 19){
      signo = "Piscis";
    }
    else{
      signo = "Acuario";
    }
    break;
  case "marzo":
    if(dia >= 21){
      signo = "Aries";
    }
    else{
      signo = "Piscis";
    }
    break;
  case "abril":
    if(dia >= 21){
      signo = "Tauro";
    }
    else{
      signo = "Aries";
    }
    break;
  case "mayo":
    if(dia >= 21){
      signo = "Geminis";
    }
    else{
      signo = "Tauro";
    }
    break;
  case "junio":
    if(dia >= 21){
      signo = "Cancer";
    }
    else{
      signo = "Geminis";
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
    signo = (dia >= 24) ? "Virgo":"Leo";
    break;
  case "septiembre":
    if(dia >= 23){
      signo = "Libra";
    }
    else{
      signo = "Virgo";
    }
    break;
  case "octubre":
    if(dia >= 24){
      signo = "Escorpio";
    }
    else{
      signo = "Libra";
    }
    break;
  case "noviembre":
    signo = (dia >= 23) ? "Sagitario":"Escorpio";
    break;
  case "diciembre":
    signo = (dia >=22) ? "Capricornio":"Sagitario";
    break;
   
  }
  return signo;
}

let signo = zodiacal(mes,dia);
alert(signo)