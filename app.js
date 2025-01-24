document.addEventListener("DOMContentLoaded", function() {
    // Referencia al enlace (botón) con id 'btnExplorar'
    const btnExplorar = document.getElementById("btnExplorar");
    const resultadoDiv = document.getElementById("resultado"); // Referencia al div donde se mostrarán los resultados

    // Prevenir la acción predeterminada de enlace (evita que se recargue la página)
    btnExplorar.addEventListener("click", (event) => {
        event.preventDefault();  // Esto evita que el enlace navegue a otro lugar

        const opcion = prompt(
            "Selecciona el desafío que quieres ejecutar:\n" +
            "1. Mensaje de bienvenida\n" +
            "2. Saludo personalizado\n" +
            "3. Saludo personalizado con alerta\n" +
            "4. Pregunta y respuesta utilizando prompt\n" +
            "5. Suma de dos valores\n" +
            "6. Resta de dos valores\n" +
            "7. Determinar si es mayor o menor de edad\n" +
            "8. Verificar si un número es positivo, negativo o cero\n" +
            "9. Imprimir números del 1 al 10 con un bucle while\n" +
            "10. Determinar si una nota es aprobada o reprobada\n" +
            "11. Número aleatorio con Math.random\n" +
            "12. Número entero aleatorio entre 1 y 10 con Math.random\n" +
            "13. Número entero aleatorio entre 1 y 1000 con Math.random\n"
        );

        let resultado = "";  // Variable para acumular el resultado

        switch (opcion) {
            case "1":
                resultado = '¡Bienvenido!';
                break;
            case "2":
                const nombre = prompt("Ingresa tu nombre:");
                resultado = `¡Hola, ${nombre}!`;
                break;
            case "3":
                const nombreAlerta = prompt("Ingresa tu nombre:");
                alert(`¡Hola, ${nombreAlerta}!`);
                break;
            case "4":
                const lenguajePreferido = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
                resultado = `Tu lenguaje preferido es: ${lenguajePreferido}`;
                break;
            case "5":
                const valor1 = 42;
                const valor2 = 8;
                const resultadoSuma = valor1 + valor2;
                resultado = `La suma de ${valor1} y ${valor2} es igual a ${resultadoSuma}.`;
                break;
            case "6":
                const valorResta1 = 10;
                const valorResta2 = 8;
                const resultadoResta = valorResta1 - valorResta2;
                resultado = `La diferencia entre ${valorResta1} y ${valorResta2} es igual a ${resultadoResta}.`;
                break;
            case "7":
                const edad = prompt('Ingresa tu edad:');
                if (edad > 17) {
                    resultado = 'Eres mayor de edad.';
                } else {
                    resultado = 'Eres menor de edad.';
                }
                break;
            case "8":
                const numero = parseFloat(prompt("Ingresa un número:"));
                if (numero > 0) {
                    resultado = "El número es positivo.";
                } else if (numero < 0) {
                    resultado = "El número es negativo.";
                } else {
                    resultado = "El número es cero.";
                }
                break;
            case "9":
                let numeroWhile = 1;
                resultado = "Números del 1 al 10:\n";
                while (numeroWhile <= 10) {
                    resultado += numeroWhile + "\n";
                    numeroWhile++;
                }
                break;
            case "10":
                const nota = prompt("Ingresa la nota:");
                if (nota >= 7) {
                    resultado = "Aprobado";
                } else {
                    resultado = "Reprobado";
                }
                break;
            case "11":
                const numeroAleatorio = Math.random();
                resultado = `Número aleatorio: ${numeroAleatorio}`;
                break;
            case "12":
                const numeroIntAleatorio = parseInt(Math.random() * 10) + 1;
                resultado = `Número entero aleatorio entre 1 y 10: ${numeroIntAleatorio}`;
                break;
            case "13":
                const numeroIntAleatorio1000 = parseInt(Math.random() * 1000) + 1;
                resultado = `Número entero aleatorio entre 1 y 1000: ${numeroIntAleatorio1000}`;
                break;
            default:
                resultado = "Opción no válida. Intenta de nuevo.";
        }

        // Mostrar el resultado en el contenedor
        resultadoDiv.textContent = resultado;
    });
});
   