// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables globales
let amigos=[];  //lista de amigos
let numeroTotaldeAmigos= 0; 
let nombreDelJugador = '';
let capturandoNombreDelJugador = false;  //memoria del numero de amigos qu eingreso el usuario

// Conectando los elementos del HTML a variables de JavaScript
let titulo = document.getElementById('titulo-instruccion');
let sortearAmigo = document.getElementById('boton-sortear');
let generaListaAmigos = document.getElementById('listaAmigos');
let resultados = document.getElementById('resultado');
let escribeAmigos = document.getElementById('amigo');
let añadirAmigo = document.getElementById('boton-añadir');
let reiniciar = document.getElementById('boton-reiniciar');
 

// SEGUNDO: Estado inicial de botones
titulo.textContent="Primero, digita el número de participantes";
sortearAmigo.disabled=true;
reiniciar.disabled=true;    //cambia el titulo//
escribeAmigos.placeholder="Escribe un número entre 2 y 100";        //coloca una indicacion en la celda//         
añadirAmigo.addEventListener('click', function(){                     //apaga el boton//
    if (numeroTotaldeAmigos== 0){let numeroDeAmigos = parseInt(escribeAmigos.value)
    if (escribeAmigos.value == ''){alert('El campo no pue estar vacio');
    } else if (isNaN(numeroDeAmigos)) { // <-- ¡LA NUEVA REGLA PARA CAZAR LETRAS!
    alert('Por favor, ingresa solo números.');    
    }else if (numeroDeAmigos<2||numeroDeAmigos>100 ) {alert('El número No es válido, debe ser mayor a 2 y menor a 100');                //se crea la condicional para la alerta y cambie el titulo del estado
    }else{titulo.textContent="Ahora indica tu nombre";   //cambia el titulo
        escribeAmigos.value = '';                                       //borra el numero de l acelda
        escribeAmigos.placeholder='Escribe tu nombre';                  //cambia el texto de la celda
        numeroTotaldeAmigos=numeroDeAmigos;
        capturandoNombreDelJugador = true;
        }                              
    }
    else {
    if (capturandoNombreDelJugador) {
        nombreDelJugador = escribeAmigos.value;
        amigos.push(nombreDelJugador);
        escribeAmigos.value = '';
        titulo.textContent = (numeroTotaldeAmigos - 1) == 1 ? 
            "Ahora digita el nombre de tu amigo" : 
            "Ahora digita el nombre de tus amigos";
        escribeAmigos.placeholder='Escribe el nombre de tu amigo';
        generaListaAmigos.innerHTML = '<li>' + amigos.join('</li><li>') + '</li>';

        capturandoNombreDelJugador = false;
        
    }
    else{ let nombreAmigo = escribeAmigos.value  
        if (nombreAmigo == ''){alert('Escribe un nombre válido');
        }else if (isNaN(nombreAmigo) == false) { // <-- ¡LA NUEVA REGLA!
    alert('No puedes usar números como nombre.');                             //nueva variable . parse y value convierten en entero y valor
        }else{                     //nueva variable nombreamigo que es el nombre que se escribe
        amigos.push(nombreAmigo);                                        //guarda el nombre en la lista
        escribeAmigos.value = '';                                       //borra el nombre del amigo
        generaListaAmigos.innerHTML = '<li>' + amigos.join('</li><li>') + '</li>';
        if(amigos.length == numeroTotaldeAmigos)
        { 
            añadirAmigo.disabled = true;
            sortearAmigo.disabled = false;
            escribeAmigos.disabled = true;
            escribeAmigos.placeholder = '';} }                                        
        } 
        }                                                     //  
    }); 

sortearAmigo.addEventListener('click', function(){    
    let misAmigos = amigos.filter(amigo => amigo !== nombreDelJugador);
    
    for(let i = misAmigos.length - 1; i>0; i--){
    let indiceAleatorio = Math.floor(Math.random() * (i + 1));
    let amigoTemporal = misAmigos[i]
    misAmigos[i] = misAmigos[indiceAleatorio];
    misAmigos[indiceAleatorio] = amigoTemporal;
    
    }
amigos = [nombreDelJugador,...misAmigos];

resultados.innerHTML = '<li>Tu amigo secreto es: ' + amigos[1] + '</li>';
        
        sortearAmigo.disabled=true;
        reiniciar.disabled = false; 

  });

reiniciar.addEventListener('click', function(){
    amigos = [];
    numeroTotaldeAmigos = 0;
    generaListaAmigos.innerHTML = '';
    resultados.innerHTML = '';
    añadirAmigo.disabled = false; 
    sortearAmigo.disabled = true;
    reiniciar.disabled = true;
    titulo.textContent="Primero, digita el número de participantes";
    escribeAmigos.placeholder="Escribe un número entre 2 y 100";
    escribeAmigos.disabled = false;
    
});

