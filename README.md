#  Amigo Secreto - Reto de Programación

> **Proyecto desarrollado como reto adicional de programación**  
> Una aplicación web interactiva para realizar sorteos de "Amigo Secreto" de manera fácil y divertida.

##  Sobre este Reto

Este proyecto fue creado como **reto adicional** para demostrar habilidades en:
- Desarrollo Frontend con HTML, CSS y JavaScript
- Implementación de lógica de sorteo aleatorio
- Validación de datos y experiencia de usuario
- Documentación profesional de proyectos

##  Descripción del Proyecto

**Amigo Secreto** es una aplicación web que permite a los usuarios agregar nombres de amigos a una lista y realizar un sorteo aleatorio para determinar quién será el "amigo secreto". La aplicación cuenta con una interfaz moderna, validaciones de entrada y una experiencia de usuario optimizada.

## ✨ Características

- ✅ **Agregar amigos**: Interfaz intuitiva para añadir nombres a la lista
- ✅ **Validación de entrada**: Previene nombres vacíos y duplicados
- ✅ **Lista visual**: Muestra todos los amigos agregados en tiempo real
- ✅ **Sorteo aleatorio**: Selecciona un ganador de forma completamente aleatoria
- ✅ **Experiencia optimizada**: Al sortear, oculta la lista y muestra solo el ganador
- ✅ **Responsive Design**: Funciona perfectamente en dispositivos móviles y desktop
- ✅ **Accesibilidad**: Soporte para navegación por teclado (Enter para agregar)


##  Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con gradientes y animaciones
- **JavaScript (ES6+)**: Lógica del juego con funciones modernas
- **Google Fonts**: Tipografías Inter y Merriweather

## 📁 Estructura del Proyecto

```
amigo-secreto/
│
├── index.html          # Estructura principal de la aplicación
├── style.css           # Estilos y diseño visual
├── app.js              # Lógica del juego en JavaScript
├── assets/             # Recursos multimedia
│   ├── amigo-secreto.png
│   ├── play_circle_outline.png
│   ├── interfaz-principal.png
│   
└── README.md           # Documentación del proyecto
```

##  Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación de software adicional

### Pasos para Ejecutar

1. **Clona o descarga el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto-reto.git
   cd amigo-secreto-reto
   ```

2. **Abre el archivo principal**
   - Haz doble clic en `index.html`
   - O abre el archivo desde tu navegador web

3. **¡Disfruta del juego!**
   - Agrega nombres de amigos
   - Presiona "Sortear amigo" para obtener el resultado


##  Cómo Jugar

1. **Agregar Participantes**
   - Escribe el nombre de un amigo en el campo de texto
   - Presiona "Añadir" o la tecla Enter
   - Repite hasta agregar todos los participantes

2. **Realizar el Sorteo**
   - Presiona el botón "Sortear amigo"
   - La lista se ocultará y aparecerá el ganador

3. **Nuevo Juego**
   - Recarga la página para comenzar un nuevo sorteo

##  Funcionalidades Técnicas

### Validaciones Implementadas
- **Campo vacío**: Alerta si no se ingresa ningún nombre
- **Nombres duplicados**: Previene agregar el mismo nombre dos veces
- **Lista vacía**: Alerta si se intenta sortear sin participantes

### Funciones JavaScript Principales

```javascript
// Función principal para agregar amigos
function intentoDeUsuario()

// Función para realizar el sorteo
function sortearAmigo()

// Función para elegir índice aleatorio
function elegirAmigoSecreto()

// Función para actualizar la interfaz
function asignarTextoElemento(elemento, texto)
```

##  Personalización

### Modificar Colores
Edita las variables CSS en `style.css`:

```css
:root {
    --color-primary: #4B69FD;      /* Color principal */
    --color-secondary: #FFF9EB;    /* Color de fondo */
    --color-button: #fe652b;       /* Color del botón */
}
```

### Cambiar Textos
Modifica los mensajes en `app.js`:

```javascript
alert('Por favor, inserte un nombre.');
// Cambiar por tu mensaje personalizado
```

##  Solución de Problemas

### Problema: Los nombres no se muestran
**Solución**: Verifica que los archivos estén en la misma carpeta y que `app.js` esté correctamente vinculado.

### Problema: El sorteo no funciona
**Solución**: Asegúrate de que JavaScript esté habilitado en tu navegador.

### Problema: Los estilos no se cargan
**Solución**: Confirma que `style.css` esté en la misma carpeta que `index.html`.

##  Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar el proyecto:

##  Posibles Mejoras Futuras

- [ ] Agregar animaciones más avanzadas
- [ ] Implementar historial de sorteos
- [ ] Agregar sonidos al sortear
- [ ] Opción para eliminar participantes individuales
- [ ] Modo "múltiples ganadores"
- [ ] Exportar resultados a PDF
- [ ] Integración con redes sociales

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

##  Autor del Reto

**[Tu Nombre]** - *Desarrollador Frontend*
- 🌐 GitHub: [Usuario en marcha]()
- 💼 LinkedIn: [perfil en marcha]()
- 📧 Email: correo en marcha

##  Reto Completado

✅ **Funcionalidad completa** - Agregar y sortear amigos  
✅ **Validaciones implementadas** - Prevención de errores  
✅ **Interfaz responsive** - Compatible con todos los dispositivos  
✅ **Código limpio** - Buenas prácticas de programación  
✅ **Documentación profesional** - README detallado con capturas

##  Agradecimientos

- Inspirado en mi crecimiento profesional.
- Agradecimiento especial a la comunidad de desarrolladores por el apoyo

---

 **¡Reto completado con éxito! Si te gustó el proyecto, no olvides darle una estrella!** ⭐

*Proyecto desarrollado con 💚 como reto de programación*
