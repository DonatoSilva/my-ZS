# ZOO en la Sombra (zs-cli)

**¡Bienvenido a ZOO en la Sombra!** Un divertido juego de adivinanzas de animales en tu terminal,

Construido con:
<br/>
<br/>

<img src="https://github.com/vadimdemedes/ink/blob/master/media/logo.png?raw=true" width="50" alt="Ink logo"/>
&nbsp;&nbsp;&nbsp;
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="45" alt="React logo"/>
&nbsp;&nbsp;&nbsp;
<img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="45" alt="TypeScript logo"/>

<br/>
<br/>

![Demostración del Juego](https://res.cloudinary.com/dvibg2f6y/image/upload/v1748011732/20250523-1441-35.2650210_chifn2.gif)

## ¿De qué trata?

ZOO en la Sombra es un juego interactivo donde intentas que la computadora adivine un animal en el que estás pensando. La computadora te hará una serie de preguntas de sí o no para reducir las posibilidades y tratar de identificar tu animal.

## Características Principales

- **Juego Interactivo en CLI:** Disfruta de una experiencia de juego directamente en tu terminal.
- **Árbol de Decisiones Binario:** El juego utiliza un árbol de decisiones donde cada nodo es una pregunta y cada hoja es un animal.
- **Aprendizaje Continuo:** ¡Lo más emocionante! Si el juego no adivina tu animal, ¡puedes enseñárselo! El juego te pedirá el nombre del animal y una pregunta que lo diferencie del animal que adivinó incorrectamente. Esta nueva información se incorpora al árbol de decisiones, haciendo que el juego sea más inteligente con cada partida.
- **Construido con Ink y TypeScript:** Desarrollado utilizando Ink para la interfaz de línea de comandos y TypeScript para un código robusto y tipado.

## ¿Cómo Funciona?

1.  Piensas en un animal.
2.  El juego comienza a hacerte preguntas que solo puedes responder con "sí" o "no".
3.  Basándose en tus respuestas, el juego navega a través de su árbol de conocimiento.
4.  Si llega a un animal y es el que pensabas, ¡el juego gana!
5.  Si llega a un animal pero no es el correcto, o si se queda sin preguntas:
    - Te preguntará en qué animal estabas pensando.
    - Te pedirá una pregunta que diferencie tu animal del que el juego supuso (o del último punto de decisión).
    - Esta nueva pregunta y animal se añaden al árbol, mejorando el conocimiento del juego para futuras partidas.

## ¿Cómo Correr el Código?

Sigue estos pasos para poner en marcha ZOO en la Sombra en tu máquina:

1.  **Clona el Repositorio (si aún no lo has hecho):**

    ```bash
    git clone https://github.com/DonatoSilva/my-ZS.git
    cd my-ZS
    ```

2.  **Instala las Dependencias:**
    Asegúrate de tener Node.js y npm (o bun/yarn) instalados.

    ```bash
    npm install
    # o si usas bun
    # bun install
    # o si usas yarn
    # yarn install
    ```

3.  **Construye el Proyecto:**
    El código TypeScript necesita ser compilado a JavaScript.

    ```bash
    npm run build
    # o si usas bun
    # bun run build
    ```

    Esto generará los archivos compilados en el directorio `dist/`.

4.  **Ejecuta el Juego:**
    Una vez construido, puedes ejecutar el juego usando Node.js:
    ```bash
    node dist/cli.js
    ```
    Alternativamente, si has vinculado el paquete globalmente (por ejemplo, con `npm link` o `bun link` después de construirlo), podrías ejecutarlo directamente con el nombre definido en `bin` en `package.json` (que es `zs-cli`):
    ```bash
    zs-cli
    ```

¡Y eso es todo! Prepárate para desafiar y enseñar a ZOO en la Sombra.

## Contribuir

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el juego o encuentras algún error, no dudes en abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.
