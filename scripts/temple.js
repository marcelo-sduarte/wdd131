document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('show'); // Alterna a classe 'show' para mostrar/ocultar o menu
    this.classList.toggle('active'); // Alterna a classe 'active' no botão hamburger
});

document.getElementById('close-btn').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    nav.classList.remove('show'); // Remove a classe 'show' para esconder o menu
    document.getElementById('hamburger').classList.remove('active'); // Remove a classe 'active' do hamburger
});

