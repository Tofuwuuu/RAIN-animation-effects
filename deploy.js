await app_netlify_com__jit_plugin.deployToNetlify({
    files:[
        {
            path: "index.html",
            content: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Rain Animation</title>\n    <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n    <div class=\"rain-container\"></div>\n    <script src=\"script.js\"></script>\n</body>\n</html>"

        },
        {
            path: "styles.css",
            content: "body, html {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background: #0e0e0e;\n}\n\n.rain-container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n\n.raindrop {\n    position: absolute;\n    width: 2px;\n    height: 20px;\n    background: rgba(255, 255, 255, 0.6);\n    bottom: 100%;\n    animation: fall linear infinite;\n}\n\n@keyframes fall {\n    to {\n        transform: translateY(100vh);\n    }\n}"
        },
        {
            path: "script.js",
            content: "document.addEventListener('DOMContentLoaded', () => {\n    const rainContainer = document.querySelector('.rain-container');\n    \n    function createRaindrop() {\n        const raindrop = document.createElement('div');\n        raindrop.classList.add('raindrop');\n        raindrop.style.left = `${Math.random() * 100}vw`;\n        raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;\n        rainContainer.appendChild(raindrop);\n\n        // Remove the raindrop after it falls to avoid memory leaks\n        setTimeout(() => {\n            raindrop.remove();\n        }, 2000);\n    }\n\n    function generateRain() {\n        setInterval(createRaindrop, 100);\n    }\n\n    generateRain();\n});"
        }
    ]
})