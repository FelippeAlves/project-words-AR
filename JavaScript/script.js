//botao_urso.addEventListener.addEventListener('click', clicar)
function aumenta {
    var a = document.getElementById('botao_urso')
    a.onmouseover = function () { this.style.width = (this.clientWidth * fator_lupa) + "px"; };
}