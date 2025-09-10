
// calculo de fecha dinamica
var hoy = new Date();
var fechaMin = new Date(hoy);
fechaMin.setDate(hoy.getDate() + 7);

var fechaMax = new Date(fechaMin);
fechaMax.setDate(fechaMin.getDate() + 14);

// pasar a formato yyyy-mm-dd
function formatoFecha(f) {
    return f.toISOString().split("T")[0];
}

const form = document.getElementById("registro");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const adultos = document.getElementById("adultos");
    const ninos = document.getElementById("ninos");
    const fecha = document.getElementById("fecha");
    const hora = document.getElementById("hora");

   
    fecha.min = formatoFecha(fechaMin);
    fecha.max = formatoFecha(fechaMax);


    if (validarNombre(nombre) && validarEmail(email) && validarCantidad(adultos, 2, 8) &&
        validarCantidad(ninos, 0, 4) && validarFecha(fecha) && validarHora(hora, "21:00", "23:00")) {
        alert("La reserva fue realizada exitosamente ✅")
        form.reset();
    }

});


function validarNombre(uname) {
    var letters = /^[A-Za-z\s]+$/;
    if (uname.value.match(letters) && uname.value.length >= 3) {
        return true;
    } else {
        alert('El nombre debe tener al menos 3 letras y solo puede contener letras y espacios.');
        uname.focus();
        return false;
    }
}

function validarEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("Debe ingresar un correo electrónico válido.");
        uemail.focus();
        return false;
    }
}

function validarCantidad(numValidar, num1, num2) {
    let valor = parseInt(numValidar.value);
    if (valor >= num1 && valor <= num2) {
        return true;
    } else {
        alert(`La cantidad seleccionada debe estar entre el rango de ${num1} y ${num2}.`);
        numValidar.focus();
        return false;
    }
}


function validarFecha(f) {
    const fechaS = new Date(f.value);


    if (fechaS >= fechaMin && fechaS <= fechaMax) {
        return true;
    } else {
        alert(`La fecha debe estar entre ${formatoFecha(fechaMin)} y ${formatoFecha(fechaMax)}.`);
        f.focus();
        return false;
    }
}


function validarHora(horaInput, min, max) {
    const valor = horaInput.value;
    if (valor >= min && valor <= max) {
        return true;
    } else {
        alert(`El horario debe estar entre ${min} y ${max}.`);
        horaInput.focus();
        return false;
    }
}





