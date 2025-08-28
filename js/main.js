function simulador() {
    const contPre = document.getElementById("pre-simulation");
    const contPost = document.getElementById("post-simulation");

    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');

    // los valores del campo
    let cNombre = document.getElementById("nombre").value;
    let cTelefono = document.getElementById("telefono").value;
    let cEmail = document.getElementById("email").value;
    let cMonto = document.getElementById("monto").value;
    let cTiempo = document.getElementById("tiempo").value;

    // const que canturan las etiquetas span en las que se muestran los valores por eso la s de show de "ver",
    const sTiempo = document.getElementById("sTiempo");
    const sInteres = document.getElementById("sInteres");
    const sTotal = document.getElementById("sTotal");
    const sGanancia = document.getElementById("sGanancia");
    const sNombres = document.getElementById("sNombres");
    const sEmail = document.getElementById("sEmail");

    // Variables para realisar los calgulos
    let ganancia = 0;
    let total = 0;


        if (cNombre === "" || cEmail === "" || cTelefono === "" || cMonto === "" || cTiempo === "") {
            alert("Completa todos los campos")
        }else{
            contPost.classList.remove('disabled');
            contPost.classList.remove('disabled');
        switch (cTiempo) {
            case '1':
                // en este case realizaremos el calculo si el tiempo coresponde a un año
                ganancia = (cMonto * 0.008) * 12;
                total = parseInt(cMonto) + parseInt(ganancia);

                sInteres.textContent = '0.8';
                sTiempo.textContent = '12 Meses';
                break;

            case '2':
                // en este case realizaremos el calculo si el tiempo coresponde a un dos años
                ganancia = (cMonto * 0.013) * 24;
                total = parseInt(cMonto) + parseInt(ganancia);

                sInteres.textContent = '1.3';
                sTiempo.textContent = '24 Meses';
                break;

            case '3':
                // en este case realizaremos el calculo si el tiempo coresponde a tres años
                ganancia = (cMonto * 0.017) * 36;
                total = parseInt(cMonto) + parseInt(ganancia);

                sInteres.textContent = '1.7';
                sTiempo.textContent = '36 Meses';
                break;

        }
        sTotal.innerHTML = total;
        sGanancia.innerHTML = ganancia;
        sNombres.textContent = cNombre;
        sEmail.textContent = cEmail;
        }
    }


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calcular').addEventListener('click', simulador);
});