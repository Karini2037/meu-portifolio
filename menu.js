document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('botao');
    const menu = document.querySelector('nav ul');
    botao.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});