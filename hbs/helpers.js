const hbs = require('hbs');

// Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((contenido, id) => {
        palabras[id] = contenido.charAt(0).toUpperCase() + contenido.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});