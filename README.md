# Marvel Explorer

Marvel Explorer is an application that allows you to explore and obtain detailed information about Marvel series. You can discover new series, get details about each one, and explore related resources such as comics and stories.

## Installation

Make sure you have Node.js, npm, and Docker installed on your machine before following these steps.

1. Clone this repository:

```bash
gh repo clone Esleiter/marvel-explorer
cd marvel-explorer
```

2. Construye la imagen de Docker:

```bash
docker build -t marvel-explorer .
```

3. Ejecuta la aplicación en un contenedor Docker:

```bash
docker run -p 8080:80 marvel-explorer
```

La aplicación estará disponible en `http://localhost:8080`.
