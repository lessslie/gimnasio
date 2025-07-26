# 🏋️ OLIMPO GYM - Sistema de Gestión

Sistema web para gestión de gimnasio desarrollado para OLIMPO GYM. Permite administrar clientes, registrar entradas, ver estadísticas y generar códigos QR.

## ✨ Características

- 📊 **Gestión de clientes** - Registro, edición y visualización de socios
- 🎯 **Control de entradas** - Registro de acceso al gimnasio
- 📅 **Calendario de actividad** - Visualización de entradas por día
- 📱 **Código QR** - Acceso rápido para registro de entradas
- 💳 **Control de membresías** - Seguimiento de vencimientos
- 🔐 **Sistema de login** - Acceso seguro para administradores

## 🚀 Demo

[Ver sitio en vivo](https://olimpo-gimnasio.netlify.app)

## 🛠️ Tecnologías Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Base de datos:** JSONBin.io
- **Hosting:** Netlify
- **Autenticación:** LocalStorage (básica)

## ⚙️ Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/olimpo-gym.git
   cd olimpo-gym
   ```

2. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env
   # Editar .env con tus credenciales reales
   ```

3. **Configurar en Netlify:**
   - Conectar el repositorio
   - Agregar las variables de entorno en: Site settings > Environment variables

## 🔧 Variables de Entorno Requeridas

```bash
JSONBIN_BIN_ID=tu_bin_id_de_jsonbin
JSONBIN_API_KEY=tu_api_key_de_jsonbin
ADMIN_USERNAME=usuario_administrador
ADMIN_PASSWORD=contraseña_segura
```

*Desarrollado con ❤️ para OLIMPO GYM*
