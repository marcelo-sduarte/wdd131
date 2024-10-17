document.addEventListener('DOMContentLoaded', function() {
    // Obtém o número de visitas do localStorage
    let visitas = localStorage.getItem('numVisits-ls');
  
    // Se não existir, inicializa com 0
    if (!visitas) {
        visitas = `This is your first visit. 🥳 Welcome!`;
    } else {
        visitas = parseInt(visitas);
    }
  
    // Exibe o número total de visitas
    document.getElementById('totalVisitas').textContent =  visitas;
  });
  
  