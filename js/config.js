// config.js - Configuración del proyecto
// Las variables reales deben ir en las variables de entorno de Netlify

const CONFIG = {
    // JSONBin API Configuration
    BIN_ID: process.env.JSONBIN_BIN_ID || 'your_bin_id_here',
    API_KEY: process.env.JSONBIN_API_KEY || 'your_api_key_here',
    
    // URLs del proyecto
    BASE_URL: 'https://olimpo-gimnasio.netlify.app',
    
    // Configuración de la app
    LOGIN_CREDENTIALS: {
        username: process.env.ADMIN_USERNAME || 'admin',
        password: process.env.ADMIN_PASSWORD || 'admin123'
    },
    
    // Configuración de membresías
    MEMBERSHIP_DURATION_DAYS: 30,
    WARNING_DAYS_BEFORE_EXPIRY: 3
};

// Para el navegador (cuando no hay process.env)
if (typeof window !== 'undefined') {
    window.APP_CONFIG = {
        BIN_ID: window.ENV?.JSONBIN_BIN_ID || '',
        API_KEY: window.ENV?.JSONBIN_API_KEY || '',
        BASE_URL: 'https://olimpo-gimnasio.netlify.app',
        LOGIN_CREDENTIALS: {
            username: window.ENV?.ADMIN_USERNAME || '',
            password: window.ENV?.ADMIN_PASSWORD || ''
        },
        MEMBERSHIP_DURATION_DAYS: 30,
        WARNING_DAYS_BEFORE_EXPIRY: 3
    };
}
