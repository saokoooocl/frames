<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reproductor de Radio Galáctico</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: transparent;
        }
        #player-placeholder {
            width: 630px;
            height: 360px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: sans-serif;
            color: #ccc;
            border: 2px dashed #555;
            border-radius: 15px;
            box-sizing: border-box;
        }
    </style>
</head>
<body>

    <div id="player-placeholder">Cargando reproductor...</div>

    <script>
        // --- CONFIGURACIÓN DE CARGA REMOTA ---
        // 1. Sube el archivo 'player-loader.js' a un repositorio de GitHub.
        // 2. Haz clic en el archivo y luego en el botón "Raw" para obtener la URL.
        // 3. Pega esa URL aquí abajo, reemplazando el texto de ejemplo.
        const remoteLoaderUrl = 'URL_DE_TU_ARCHIVO_RAW_EN_GITHUB'; 
        // -----------------------------------------

        const script = document.createElement('script');
        script.src = remoteLoaderUrl;
        script.onload = () => {
            // El script remoto se ha cargado y ejecutado.
            // El placeholder puede ser eliminado por el script remoto si lo desea.
            console.log("Reproductor cargado exitosamente.");
        };
        script.onerror = () => {
            // Si el script no se puede cargar (eliminado de GitHub, URL incorrecta, etc.),
            // el reproductor no funcionará y se mostrará un mensaje de error.
            const placeholder = document.getElementById('player-placeholder');
            placeholder.textContent = 'Error al cargar el reproductor. El recurso no está disponible.';
            console.error('No se pudo cargar el script del reproductor desde GitHub.');
        };
        document.body.appendChild(script);
    </script>

</body>
</html>

