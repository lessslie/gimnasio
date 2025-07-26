// config.js - Configuración para navegador
// Para desarrollo local, las variables están en window.ENV
// Para producción en Netlify, vendrán de las variables de entorno

window.APP_CONFIG = {
    // Valores por defecto (vacíos para producción)
    BIN_ID: window.ENV?.JSONBIN_BIN_ID || '',
    API_KEY: window.ENV?.JSONBIN_API_KEY || '',
    
    // URLs del proyecto
    BASE_URL: 'https://olimpo-gimnasio.netlify.app',
    
    // Configuración de login
    LOGIN_CREDENTIALS: {
        username: window.ENV?.ADMIN_USERNAME || '',
        password: window.ENV?.ADMIN_PASSWORD || ''
    },
    
    // Configuración de WhatsApp
    PHONE_ADMIN: window.ENV?.PHONE_ADMIN || '',
    PHONE_TEST: window.ENV?.PHONE_TEST || '',
    
    // Configuración de membresías
    MEMBERSHIP_DURATION_DAYS: 30,
    WARNING_DAYS_BEFORE_EXPIRY: 3
};