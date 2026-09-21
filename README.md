# 🧑‍💻 Sistema de Registro de Campers

Aplicación de consola desarrollada con Node.js que permite gestionar el registro de campers mediante una interfaz interactiva y comandos ejecutados desde la terminal.

La información de los campers se almacena de forma persistente en un archivo JSON, utilizando el módulo nativo `fs/promises` de Node.js.

---

## 📋 Características

- Registrar campers con nombre y stack tecnológico.
- Registrar campers mediante una interfaz interactiva.
- Listar todos los campers registrados.
- Buscar campers por nombre.
- Generar automáticamente un identificador para cada camper.
- Registrar la fecha de creación.
- Persistir la información en un archivo JSON.
- Utilizar ES Modules (ESM).
- Manejar operaciones de archivos de forma asíncrona mediante `async/await`.

---

## 🛠️ Tecnologías utilizadas

- Node.js
- JavaScript
- ES Modules (ESM)
- File System (`fs/promises`)
- JSON
- Readline
- Git / GitHub

---

## 📁 Estructura del proyecto

```text
campers-project/
│
├── data/
│   └── campers.json
│
├── src/
│   ├── campers.js
│   └── index.js
│
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. **Entrar al proyecto:**

   ```bash
   cd campers-project
   ```

3. **Instalar dependencias:**

   ```bash
   npm install
   ```

   > *Nota: El proyecto utiliza principalmente módulos nativos de Node.js, por lo que no requiere muchas dependencias externas.*

---

## ▶️ Uso

El programa puede ejecutarse desde la terminal utilizando diferentes comandos.

### Registrar un camper

```bash
node src/index.js agregar "Daniel Aguilar" "JavaScript, Node.js"
```

El sistema registrará un objeto similar a:

```json
{
  "id": 1,
  "nombre": "Daniel Aguilar",
  "stack": "JavaScript, Node.js",
  "creadoEn": "21/09/2026"
}
```

### Listar campers

```bash
node src/index.js listar
```

El programa mostrará los campers registrados en formato de tabla:

| (index) |  id  | nombre         | stack               | creadoEn   |
| :-----: | :--: | :------------- | :------------------ | :--------- |
|    0    |  1   | Daniel Aguilar | JavaScript, Node.js | 21/09/2026 |

---

## 💻 Registro interactivo

El proyecto también puede utilizar `readline` para solicitar los datos directamente desde la terminal.

Ejemplo de uso:

```text
=== Registro interactivo de campers {ESM} ===

Nombre del camper: Daniel Aguilar
Stack tecnológico: JavaScript, Node.js
```

Después de completar los datos, el camper se guarda automáticamente en el archivo JSON.

---

## 🔎 Búsqueda de campers

El módulo de gestión incluye una función para buscar campers utilizando parte de su nombre.

Conceptualmente:

```javascript
buscarCamperPorNombre("Daniel");
```

La búsqueda no necesita coincidir exactamente con el nombre completo y puede encontrar coincidencias parciales.

---

## 💾 Persistencia de datos

Los datos se almacenan en un archivo JSON ubicado dentro de la carpeta `data`.

El sistema utiliza:

```javascript
import fs from 'node:fs/promises';
```

Esto permite realizar operaciones como:

- Leer el archivo JSON.
- Convertir su contenido a objetos JavaScript.
- Agregar nuevos campers.
- Guardar nuevamente la información.
- Crear una lista vacía cuando el archivo todavía no existe.

---

## 🧩 Funciones principales

- **`agregar(nombre, stack)`**  
  Registra un nuevo camper.

  ```javascript
  await agregar("Daniel Aguilar", "JavaScript, Node.js");
  ```

- **`listarCamper()`**  
  Obtiene todos los campers almacenados.

  ```javascript
  const campers = await listarCamper();
  ```

- **`buscarCamperPorNombre(termino)`**  
  Busca campers cuyo nombre contenga el término proporcionado.

  ```javascript
  const resultados = await buscarCamperPorNombre("Daniel");
  ```

- **`guardarCampers(lista)`**  
  Guarda la lista de campers en el archivo JSON.

- **`leerCampers()`**  
  Lee la información almacenada y la convierte desde JSON a objetos JavaScript.

---

## 🔐 Validaciones

El sistema valida que el nombre y el stack tecnológico hayan sido proporcionados antes de registrar un camper:

```javascript
if (!nombre || !stack) {    
    throw new Error('Debes ingresar nombre y stack');
}
```

Esto evita almacenar registros incompletos.

---

## 🚀 Próximas mejoras

- [ ] Implementar completamente el comando buscar.
- [ ] Agregar actualización de campers.
- [ ] Agregar eliminación de campers.
- [ ] Validar nombres duplicados.
- [ ] Mejorar las validaciones de entrada.
- [ ] Utilizar UUID para los identificadores.
- [ ] Agregar pruebas automatizadas.
- [ ] Agregar mensajes de error más descriptivos.
- [ ] Implementar una interfaz más completa para la consola.

---

## ⚠️ Consideraciones

Este proyecto utiliza un archivo JSON como mecanismo de persistencia, por lo que está pensado principalmente para fines educativos y proyectos pequeños.

Para una aplicación de mayor escala, se recomienda utilizar una base de datos como:

- PostgreSQL
- MySQL
- MongoDB

---

## 👨‍💻 Autor

**Daniel Aguilar**  
Proyecto desarrollado como práctica de Node.js, JavaScript, módulos ESM y manejo de archivos JSON.

⭐ Si este proyecto te resulta útil, puedes darle una estrella al repositorio.