

    const pantallaAnterior = document.getElementById('valor-anterior');
    const pantallaActual = document.getElementById('valor-actual');
    const numeros = document.querySelectorAll('.numero');
    const operador = document.querySelectorAll('.operador');
    
    
    
    const pantalla = new Pantalla(pantallaAnterior, pantallaActual);
    
    numeros.forEach(boton =>{
        boton.addEventListener('click', ()=>{
            pantalla.addNumero(boton.innerHTML)
        })
    })
    
    operador.forEach(boton =>{
        boton.addEventListener('click', ()=>{
            pantalla.operar(boton.value);
        })
    })


