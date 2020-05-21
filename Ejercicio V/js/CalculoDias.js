var Mes;
var Year;
var Diasdelmes;
var Bisiesto = false;
var Msg;

Mes = prompt("Ingrese el mes: ", "");
Year = prompt("Ingrese el año: ", "");
if (Year % 4 == 0 && (Year % 100 != 0 || Year % 400 == 0)) {
    Bisiesto = true;
}
switch (Mes) {
    case "Enero":
    case "enero":
    case "Marzo":
    case "marzo":
    case "Mayo":
    case "mayo":
    case "Julio":
    case "julio":
    case "Agosto":
    case "agosto":
    case "Octubre":
    case "octubre":
    case "Diciembre":
    case "diciembre":
        Diasdelmes = 31;
        break;
    case "Abril":
    case "abril":
    case "Junio":
    case "junio":
    case "Septiembre":
    case "septiembre":
    case "Noviembre":
    case "noviembre":
        Diasdelmes = 30;
        break;
    case "Febrero":
    case "febrero":
        if (!Bisiesto)
            Diasdelmes = 28;
        else
            Diasdelmes = 29;
        break;
    default:
        alert("El mes ", Mes, ' no existe.');
        Mes = "No existe";
        Diasdelmes = 0;
}
if (Bisiesto == true) {
    msg = 'El año ', Year, ' es bisiesto. El mes de ', Mes, ' tiene ', Diasdelmes, ' días.';
} else {
    msg = 'El mes de ', Mes, ' tiene ', Diasdelmes, ' días.';
}
alert(msg);