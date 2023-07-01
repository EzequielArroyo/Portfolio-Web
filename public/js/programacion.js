const redes = Array.from (document.getElementsByClassName("red_icono"));

var i = 0; /* contador */
var txtSobreMi = 'Hola,soy Ezequiel Arroyo.Tengo 24 años y vivo en Argentina.Me gusta la programacion y la jardineria. Soy una persona creativa, paciente y persistente, con buenas relaciones interpersonales.Siempre tengo la disposición para ayudar a las personas y aprender de mis errores.'; /* The text */
var speed = 30; /* The speed/duration of the effect in milliseconds */ 


redes.forEach(red => {
    red.addEventListener("mouseover", () => {
        red.classList.add("fa-bounce")
    });
    red.addEventListener("mouseout", () => {
        red.classList.remove('fa-bounce')
    });
});

document.addEventListener('DOMContentLoaded', typeWriter)

function typeWriter() {   
    if (i < txtSobreMi.length) {
        document.getElementById("sobreMi").innerHTML += txtSobreMi.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
