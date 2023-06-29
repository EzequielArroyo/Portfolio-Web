const redes = Array.from (document.getElementsByClassName("red_icono"));
//Funcion que activa la clase "bounce" en los iconos de mis redes sociales
redes.forEach(red => {
    red.addEventListener("mouseover", () => {
        red.classList.add("fa-bounce")
    });
    red.addEventListener("mouseout", () => {
        red.classList.remove('fa-bounce')
    });
});
