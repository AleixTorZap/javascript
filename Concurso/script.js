const miArrayPreguntas = [
    {
        pregunta: "¿Cuál es el metal más abundante en la corteza terrestre?",
        opciones: ["Oro", "Hierro", "Plata", "Cobre"],
        respuestaCorrecta: "Hierro"
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        opciones: ["Amazonas", "Nilo", "Misisipi", "Yangtsé"],
        respuestaCorrecta: "Nilo"
    },
    {
        pregunta: "¿En qué año se llevó a cabo la Revolución Rusa?",
        opciones: ["1917", "1923", "1905", "1932"],
        respuestaCorrecta: "1917"
    },
    {
        pregunta: "¿Cuál es el símbolo químico del oro?",
        opciones: ["Ag", "Ge", "Au", "Go"],
        respuestaCorrecta: "Au"
    },
    {
        pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?",
        opciones: ["Miguel de Cervantes", "Federico García Lorca", "Pablo Neruda", "Gabriel García Márquez"],
        respuestaCorrecta: "Miguel de Cervantes"
    },
    {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        opciones: ["Venus", "Marte", "Júpiter", "Urano"],
        respuestaCorrecta: "Júpiter"
    },
    {
        pregunta: "¿Cuál es la capital de Australia?",
        opciones: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
        respuestaCorrecta: "Canberra"
    },
    {
        pregunta: "¿Quién fue el primer presidente de los Estados Unidos?",
        opciones: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
        respuestaCorrecta: "George Washington"
    },
    {
        pregunta: "¿Cuál es el país más grande del mundo en términos de superficie?",
        opciones: ["China", "Estados Unidos", "Canadá", "Rusia"],
        respuestaCorrecta: "Rusia"
    },
    {
        pregunta: "¿Cuál es el océano más grande del mundo?",
        opciones: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"],
        respuestaCorrecta: "Océano Pacífico"
    },
    {
        pregunta: "¿Quién pintó la 'Mona Lisa'?",
        opciones: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Rembrandt"],
        respuestaCorrecta: "Leonardo da Vinci"
    },
    {
        pregunta: "¿Cuál es el país más poblado del mundo?",
        opciones: ["India", "Estados Unidos", "China", "Brasil"],
        respuestaCorrecta: "China"
    },
    {
        pregunta: "¿Cuál es el proceso natural por el cual las plantas producen alimentos a partir de la luz solar?",
        opciones: ["Fotosíntesis", "Respiración", "Fermentación", "Digestión"],
        respuestaCorrecta: "Fotosíntesis"
    },
    {
        pregunta: "¿En qué continente se encuentra Egipto?",
        opciones: ["Europa", "Asia", "África", "Oceanía"],
        respuestaCorrecta: "África"
    },
    {
        pregunta: "¿Cuál es el sistema planetario de nuestro sistema solar en el que vivimos?",
        opciones: ["Sistema Solar", "Vía Láctea", "Galaxia Andrómeda", "Cúmulo de Virgo"],
        respuestaCorrecta: "Sistema Solar"
    },
    {
        pregunta: "¿Cuál es el hueso más largo del cuerpo humano?",
        opciones: ["Húmero", "Fémur", "Tibia", "Radio"],
        respuestaCorrecta: "Fémur"
    },
    {
        pregunta: "¿Cuál es el continente más frío de la Tierra?",
        opciones: ["África", "Europa", "Antártida", "Asia"],
        respuestaCorrecta: "Antártida"
    },
    {
        pregunta: "¿En qué año se celebró la primera Copa del Mundo de fútbol?",
        opciones: ["1930", "1950", "1970", "1986"],
        respuestaCorrecta: "1930"
    },
    {
        pregunta: "¿Quién fue el primer ser humano en orbitar la Tierra?",
        opciones: ["Neil Armstrong", "Yuri Gagarin", "John Glenn", "Buzz Aldrin"],
        respuestaCorrecta: "Yuri Gagarin"
    },
    {
        pregunta: "¿Cuál es la capital de Francia?",
        opciones: ["Berlín", "Roma", "París", "Londres"],
        respuestaCorrecta: "París"
    }
];

let pregunta1, pregunta2;
let respuestasCorrectas = 0;

function generarPreguntasAleatorias() {
    pregunta1 = seleccionarPreguntaAleatoria();
    pregunta2;

    do {
        pregunta2 = seleccionarPreguntaAleatoria();
    } while (pregunta1 === pregunta2);
    mostrarPregunta("pregunta1", pregunta1);
    mostrarPregunta("pregunta2", pregunta2);
}

function seleccionarPreguntaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * miArrayPreguntas.length);
    return miArrayPreguntas[indiceAleatorio];
}

function mostrarPregunta(divId, pregunta) {
    const opcionesDesordenadas = desordenarOpciones(pregunta.opciones, pregunta.respuestaCorrecta);
    const preguntaElement = document.getElementById(`${divId}.1`);
    preguntaElement.textContent = pregunta.pregunta;

    const respuestasDiv = document.getElementById(`respuestas${divId.slice(-1)}.1`);
    respuestasDiv.innerHTML = '';

    for (let i = 0; i < opcionesDesordenadas.length; i++) {
        const inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = `respuestas${divId.slice(-1)}`;
        inputElement.value = opcionesDesordenadas[i];
        inputElement.id = `${divId}-opcion${i + 1}`;

        const labelElement = document.createElement("label");
        labelElement.textContent = opcionesDesordenadas[i];
        labelElement.htmlFor = inputElement.id;

        respuestasDiv.appendChild(inputElement);
        respuestasDiv.appendChild(labelElement);

        // Mostrar el input después de agregarlo al DOM
        inputElement.style.display = "inline-block";
    }
}


function desordenarOpciones(opciones) {

    const opcionesOrdenadas = Object.values(opciones);
    const opcionesDesordenadas = [...opcionesOrdenadas];

    for (let i = opcionesDesordenadas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opcionesDesordenadas[i], opcionesDesordenadas[j]] = [opcionesDesordenadas[j], opcionesDesordenadas[i]];
    }

    return opcionesDesordenadas;
}


function calificarRespuestas() {
    const pregunta1HTML = document.getElementById("pregunta1");
    const pregunta2HTML = document.getElementById("pregunta2");
    // Asegúrate de obtener la respuesta correcta de las preguntas  

    let firstIndex, secondIndex, thirdIndex, fourdIndex;

    miArrayPreguntas.map((pregunta, index) => {
        if (pregunta.pregunta == pregunta1.pregunta) {
            firstIndex = index;
        } else if (pregunta.pregunta == pregunta2.pregunta) {
            secondIndex = index;
        } else if (pregunta.pregunta == pregunta3.pregunta) {
            thirdIndex = index;
        } else if (pregunta.pregunta == pregunta4.pregunta) {
            fourdIndex = index;
        }
    })

    console.log(firstIndex, secondIndex, thirdIndex, fourdIndex);


    // const preguntaEntera = miArrayPreguntas.filter(pregunta => pregunta1.pregunta == pregunta.pregunta);

    // console.log("Respuesta correcta: " + respuestaCorrecta); 

    const respuestaCorrecta1 = miArrayPreguntas[firstIndex].respuestaCorrecta;
    const respuestaCorrecta2 = miArrayPreguntas[secondIndex].respuestaCorrecta;

    respuestasCorrectas += comprobarRespuesta(pregunta1HTML, respuestaCorrecta1);
    respuestasCorrectas += comprobarRespuesta(pregunta2HTML, respuestaCorrecta2);

    mostrarResultado(respuestasCorrectas);

    
}

function comprobarRespuesta(preguntaHTML, respuestaCorrecta) {
       let respuestasCorrectas = 0;

    const radioButtons = preguntaHTML.querySelectorAll('input[type="radio"]');

    console.log(respuestasCorrectas);
    radioButtons.forEach((radioButton) => {
        if (radioButton.checked) {
            const respuestaUsuario = radioButton.value;
            // console.log(respuestaUsuario);
            // console.log(respuestaCorrecta);
            if (respuestaUsuario === respuestaCorrecta) {
                respuestasCorrectas++;
            }

            radioButton.disabled = true;
        }
    });

    return respuestasCorrectas;
}



function mostrarResultado(respuestasCorrectas) {
    const mensajeResultado = document.getElementById("mensajeResultado");
    mensajeResultado.style.display = "block";
    const mensajeResultadoText = document.getElementById("mensaje");

    if (respuestasCorrectas === 2 ) {
        agregarPreguntas();
    } else if (respuestasCorrectas === 1 ) {
        localStorage.setItem('paginaRecargada', 'true');
        location.reload();
    } else if(respuestasCorrectas === 0) {
        localStorage.setItem('paginaRecargada', 'true');
        location.reload();
    }

}


function agregarPreguntas() {
    // Bloquear las preguntas 1 y 2
    const pregunta1HTML = document.getElementById("pregunta1");
    const pregunta2HTML = document.getElementById("pregunta2");
    bloquearPreguntas(pregunta1HTML);
    bloquearPreguntas(pregunta2HTML);

    let pregunta3, pregunta4;
    respuestasCorrectas === 2;
    do {
        pregunta3 = seleccionarPreguntaAleatoria();
    } while (pregunta3 === pregunta1 || pregunta3 === pregunta2);

    do {
        pregunta4 = seleccionarPreguntaAleatoria();
    } while (pregunta4 === pregunta1 || pregunta4 === pregunta2 || pregunta4 === pregunta3);

    mostrarPregunta("pregunta3", pregunta3);
    mostrarPregunta("pregunta4", pregunta4);
    
}



function bloquearPreguntas(preguntaHTML) {
    const radioButtons = preguntaHTML.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radioButton) => {
        radioButton.disabled = true;
    });
}




generarPreguntasAleatorias();