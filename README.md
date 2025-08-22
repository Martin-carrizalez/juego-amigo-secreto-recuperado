# 🎲 Sorteo "Amigo Secreto"

![Estado del Proyecto](https://img.shields.io/badge/Estado-Terminado-brightgreen)

## 📝 Descripción del Proyecto

Este es un Sorteador de Amigo Secreto interactivo, creado como parte del Desafío de Lógica de Programación del programa **ONE (Oracle Next Education) + Alura Latam**. El objetivo principal fue aplicar conceptos fundamentales de la programación web para crear una aplicación funcional y robusta desde cero.

---

## ✨ Características Principales

El juego cuenta con las siguientes funcionalidades:

* **Definición de Participantes:** Permite al usuario definir el número total de amigos que participarán en el sorteo.
* **Validación de Datos:** El sistema valida las entradas del usuario para asegurar que el número de participantes esté dentro de un rango válido (ej. 2-100) y que no se ingresen nombres vacíos o numéricos.
* **Añadir Participantes:** Los nombres de los amigos se añaden uno por uno y se muestran en una lista para que el usuario lleve un control.
* **Sorteo Aleatorio:** Implementa un algoritmo de mezcla (Fisher-Yates shuffle) para garantizar que la asignación de parejas sea completamente aleatoria y justa en cada sorteo.
* **Resultado Anónimo:** Al finalizar el sorteo, la aplicación asume quién es el "jugador" y revela únicamente su amigo secreto, manteniendo el misterio para el resto de los participantes.
* **Reinicio del Juego:** Incluye un botón para reiniciar el juego por completo, limpiando todos los datos y volviendo al estado inicial.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Para la estructura y el contenido de la página web.
* **CSS3:** Para el diseño visual, la apariencia de los botones y la disposición de los elementos.
* **JavaScript (Vanilla):** Para toda la lógica del juego, la manipulación del DOM, el manejo de eventos y los algoritmos de validación y sorteo.
* **Git y GitHub:** Para el control de versiones y el alojamiento del proyecto.

---

## ▶️ Cómo Ejecutar el Proyecto

No se necesita ninguna instalación especial. Simplemente sigue estos pasos:

1.  Clona este repositorio en tu máquina local.
2.  Abre el archivo `index.html` en tu navegador web preferido.
3.  ¡Y a jugar!
   
---

## 😎 Disfruta del juego presionando el control gamer 👉[🎮](https://martin-carrizalez.github.io/juego-amigo-secreto-recuperado/) 🔥


---

## 🧠 Retos y Aprendizajes


Durante el desarrollo de este proyecto, enfrenté y superé varios retos que fueron clave para mi aprendizaje:

* **Manejo del Estado de la Aplicación:** El mayor desafío fue implementar una lógica que hiciera que un solo botón ("Añadir") se comportara de maneras diferentes dependiendo de la fase del juego (pedir número vs. pedir nombres). Esto se resolvió utilizando variables de estado para controlar el flujo del programa.
* **Depuración de Errores (Debugging):** Me enfrenté a errores de sintaxis (llaves `{} ` faltantes) y de lógica (los botones no se desactivaban). Aprendí a usar la **Consola del Desarrollador** y `console.log()` como herramientas fundamentales para inspeccionar el estado de las variables y encontrar la raíz de los problemas.
* **Algoritmo de Mezcla:** Implementé el algoritmo de mezcla Fisher-Yates para asegurar que el sorteo fuera verdaderamente aleatorio, aprendiendo sobre cómo manipular arrays y generar números al azar de forma efectiva.
* **Validación Robusta:** Añadí múltiples capas de validación (`if...else if...else` y cláusulas de guarda) para hacer el programa a prueba de errores, controlando entradas vacías, texto en campos numéricos y números fuera de rango.

---

## ✍️ Autor

**[Martin Carrizalez]**

* **LinkedIn:** https://www.linkedin.com/in/martin-angel-carrizalez-pina-b55475371
* **Email:** [martin.carrizalez0823@alumnos.udg.mx]
