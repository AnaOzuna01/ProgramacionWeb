var Diasdelmes;
var Bisiesto = false;
var Mes;
var Year;


Mes = prompt('Ingrese el mes: ', '');
Year = prompt('Ingrese el año: ', '');

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
        alert("El mes " + Mes + " no existe");
        Mes = "No existe.";
        Diasdelmes = 0;
}

if (Year % 4 == 0 && (Year % 100 != 0 || Year % 400 == 0)) {
    Bisiesto = true;
    if ((Bisiesto == true) && (Mes != "No existe.")) {
        alert('El año ' + Year + ' es bisiesto. El mes de ' + Mes + ' tiene ' + Diasdelmes + ' días.');
        document.write('<h2>El año ' + Year + ' es bisiesto. El mes de ' + Mes + ' tiene ' + Diasdelmes + ' dias. </h2><hr/><br/>');
    }
    if ((Bisiesto == true) && (Mes == "No existe.")) {
        alert('El año ' + Year + ' es bisiesto.');
        document.write('<h2>El año ' + Year + ' es bisiesto.</h2><hr/><br/>');
    }
} else {
    alert('El mes de ' + Mes + ' tiene ' + Diasdelmes + ' días.');
    document.write('<h2>El mes de ' + Mes + ' tiene ' + Diasdelmes + ' dias. </h2><hr/><br/>');
}