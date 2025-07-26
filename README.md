# 🏋️ OLIMPO GYM - Sistema de Gestión

Sistema web para gestión de gimnasio desarrollado para OLIMPO GYM. Permite administrar clientes, registrar entradas, ver estadísticas y generar códigos QR.

## ✨ Características

- 📊 **Gestión de clientes** - Registro, edición y visualización de socios
- 🎯 **Control de entradas** - Registro de acceso al gimnasio
- 📅 **Calendario de actividad** - Visualización de entradas por día
- 📱 **Código QR** - Acceso rápido para registro de entradas
- 💳 **Control de membresías** - Seguimiento de vencimientos
- 🔔 **Sistema de notificaciones** - Alertas automáticas de vencimientos
- 📲 **WhatsApp integrado** - Envío directo de recordatorios
- ⚡ **Detección inteligente** - Filtra vencimientos próximos (3-35 días)
- 🔐 **Sistema de login** - Acceso seguro para administradores

## 🚀 Demo

[Ver sitio en vivo](https://olimpo-gimnasio.netlify.app)

## 🛠️ Tecnologías Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Base de datos:** JSONBin.io
- **Hosting:** Netlify
- **Autenticación:** LocalStorage (básica)

## 📋 Requisitos Previos

- Cuenta en [JSONBin.io](https://jsonbin.io) para la base de datos
- Cuenta en [Netlify](https://netlify.com) para el hosting

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

## 📂 Estructura del Proyecto

```
olimpo-gym/
├── img/                    # Imágenes y assets
├── js/                     # Scripts JavaScript
│   └── config.js          # Configuración de la app
├── calendar.html          # Calendario de entradas
├── clients.html           # Gestión de clientes
├── client-details.html    # Detalles individuales
├── entry.html             # Registro de entradas
├── gym-qr.html           # Generador de códigos QR
├── index.html            # Página principal
├── login.html            # Inicio de sesión
├── register.html         # Registro de nuevos clientes
├── notifications.html    # Sistema de notificaciones WhatsApp
├── .env.example          # Plantilla de variables
├── .gitignore            # Archivos ignorados por Git
└── README.md             # Este archivo
```

## 🎯 Uso

### Para Administradores:
1. Acceder a `/login.html`
2. Ingresar credenciales de administrador
3. Gestionar clientes desde el panel principal
4. Usar **Notificaciones** para enviar recordatorios automáticos de WhatsApp

### Para Clientes:
1. Escanear código QR generado en `/gym-qr.html`
2. Ingresar DNI para registrar entrada
3. El sistema valida automáticamente la membresía

### Sistema de Notificaciones:
1. Acceder a **Notificaciones** desde cualquier página
2. Hacer clic en **"Verificar Vencimientos"**
3. Ver lista de próximos vencimientos ordenada por urgencia
4. Hacer clic en **"📱 WhatsApp Cliente"** para enviar recordatorio automático
5. Los mensajes se abren directamente en WhatsApp Web

## 🔄 Funcionalidades Próximas

- [x] ~~Notificaciones automáticas de WhatsApp para vencimientos~~
- [ ] Automatización completa con cron jobs
- [ ] Estadísticas avanzadas de asistencia
- [ ] Exportación de reportes en PDF/Excel
- [ ] Mejoras en la interfaz móvil
- [ ] Sistema de pagos integrado
- [ ] API REST para integraciones externas

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir un Pull Request

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 👥 Autores

- **Tu Nombre** - Desarrollo inicial
- **Claude** - Asistencia en desarrollo y organización

## 🙏 Agradecimientos

- A Damian por confiar en el proyecto
- A la comunidad de desarrolladores por las herramientas open source utilizadas

---

*Desarrollado con ❤️ para OLIMPO GYM*