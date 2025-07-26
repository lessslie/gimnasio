// build-config.js - Inyecta variables de entorno en el frontend
const fs = require('fs');

// Generar el archivo de configuración con las variables de entorno
const envConfig = `
// Configuración generada automáticamente desde variables de entorno
window.ENV = {
    JSONBIN_BIN_ID: '${process.env.JSONBIN_BIN_ID || ''}',
    JSONBIN_API_KEY: '${process.env.JSONBIN_API_KEY || ''}',
    ADMIN_USERNAME: '${process.env.ADMIN_USERNAME || ''}',
    ADMIN_PASSWORD: '${process.env.ADMIN_PASSWORD || ''}',
    PHONE_ADMIN: '${process.env.PHONE_ADMIN || ''}',
    PHONE_TEST: '${process.env.PHONE_TEST || ''}'
};
`;

// Escribir el archivo
fs.writeFileSync('js/env-config.js', envConfig);

console.log('✅ Configuración de entorno generada en js/env-config.js');
console.log('Variables cargadas:');
console.log('- JSONBIN_BIN_ID:', process.env.JSONBIN_BIN_ID ? '✅' : '❌');
console.log('- JSONBIN_API_KEY:', process.env.JSONBIN_API_KEY ? '✅' : '❌');
console.log('- ADMIN_USERNAME:', process.env.ADMIN_USERNAME ? '✅' : '❌');
console.log('- ADMIN_PASSWORD:', process.env.ADMIN_PASSWORD ? '✅' : '❌');
console.log('- PHONE_ADMIN:', process.env.PHONE_ADMIN ? '✅' : '❌');
console.log('- PHONE_TEST:', process.env.PHONE_TEST ? '✅' : '❌');