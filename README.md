# MarvelExplorer

Marvel Explorer is an application that allows you to explore and obtain detailed information about Marvel series. You can discover new series, get details about each one, and explore related resources such as comics and stories.

## Installation

Make sure you have Node.js, npm, and Docker installed on your machine before following these steps.

1. Clone this repository:

```bash
gh repo clone Esleiter/marvel-explorer
cd marvel-explorer
```

2. Create a .env file based on the provided example

```bash
cp .env-example .env
```

3. Open the .env file in a text editor and replace the placeholder values with your Marvel API keys:

```
VITE_MARVEL_API_KEY=YOUR_PUBLIC_KEY
VITE_MARVEL_API_PRIVATE_KEY=YOUR_PRIVATE_KEY
```

4. Build the Docker image:

```bash
docker build -t marvel-explorer .
```

5. Run the application in a Docker container:

```bash
docker run -p 8080:80 marvel-explorer
```

The application will be available at `http://localhost:8080`.
