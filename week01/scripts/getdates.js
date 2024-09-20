
// set current year in footer
const currentDate = new Date();
document.querySelector('#currentyear').textContent = currentDate.getFullYear();

// last modified

const lastModif = new Date();
document.querySelector('#lastModified').textContent = lastModif.toLocaleString('pt-BR').replace(',', '');

