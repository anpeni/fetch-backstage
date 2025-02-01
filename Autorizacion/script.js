
//Crear contenedores
const titulo = document.createElement('h1');
titulo.className ="titulo";
titulo.textContent = "Acceso con autorización:";
document.body.append(titulo);

const contenedor = document.createElement('div');
contenedor.className = "contenedor";
document.body.append(contenedor);

const divIzquierda = document.createElement('div');
divIzquierda.className="contenedorIzquierda";
const divDerecha = document.createElement('div');
divDerecha.className="contenedorDerecha";

contenedor.append(divIzquierda, divDerecha);

//Crear item de la izquierda

const input = document.createElement('input');
input.className = "cajaClave";
input.name ="clave";
input.id="clave";

const claveLength = 5;
const numeros = "123456";
const letras = "ABC";

const clave = generarClave(claveLength, numeros, letras);
input.value = clave;
input.readOnly = true;
divIzquierda.append(input);


//generar clave aleatoria
function generarClave(claveLength, numeros, letras )
{
    let clave = "";

    while (clave.length < claveLength) {
        if (Math.random() < 0.5) 
        {
            // Agregar un número
            clave += numeros[Math.floor(Math.random() * numeros.length)];
        } else {
            // Agregar una letra
            clave += letras[Math.floor(Math.random() * letras.length)];
        }
    }
    return clave;
}

//Crear contenedor de los botones y los botones
const contenedorBtn =document.createElement('div');
contenedorBtn.className = "contenedorBtn";
divDerecha.append(contenedorBtn);

//Crear input y botones con array
const inputClaveOculto = document.createElement('input');
inputClaveOculto.className = "inputClaveOculto";
inputClaveOculto.id="inputClaveOculto";
inputClaveOculto.readOnly = true;
contenedorBtn.append(inputClaveOculto);

const arrayBotones = []

for (let i=0; i<numeros.length; i++)
{
    const btnTecla = document.createElement('button');
    btnTecla.className = "btnStyle";
    btnTecla.textContent = numeros[i];
    arrayBotones.push(btnTecla);
    
}
for (let i=0; i<letras.length; i++)
{
    const btnTecla = document.createElement('button');
    btnTecla.className = "btnStyle";
    btnTecla.textContent = letras[i];
    arrayBotones.push(btnTecla);
    
}

//mostrar botones aleatoriamente

while (arrayBotones.length > 0) 
{
    const index = Math.floor(Math.random() * arrayBotones.length);
    const aleatorio = arrayBotones.splice(index, 1)[0]; // Extraer elemento aleatorio
    contenedorBtn.append(aleatorio);
}

const btnCancelar = document.createElement('button');
btnCancelar.className = "btnStyleCancelar";
btnCancelar.id = "btnCancelar";
btnCancelar.value = "cancelar";
btnCancelar.textContent = "X";

const btnValidar = document.createElement('button');
btnValidar.className = "btnStyleValidar";
btnValidar.id = "btnValidar";
btnValidar.value = "validar";
btnValidar.textContent = "Validar";
contenedorBtn.append(btnCancelar, btnValidar);

let claveOculta = "";
const valorBtn =[];
const inputClave = document.getElementById('inputClaveOculto');
const texto = document.createElement('p');

// capturar el click de cualquier boton
const botonClick = document.querySelectorAll('button');
botonClick.forEach((boton)=>{
    boton.addEventListener("click", function(){

        //comprobar si son botones de validar o cancelar
        if (boton.textContent == "Validar")
        {
            let claveEscrita = "";
            for(let i=0; i<valorBtn.length; i++)
            {
                claveEscrita += valorBtn[i];
            }
            //mostrar si es correcto o no
            
            if (clave===claveEscrita)
            {
                texto.innerHTML = `Clave correcta`;
                divDerecha.append(texto);
            }
            else
            {
                texto.innerHTML = `Eror. Clave no coincide.`;
                divDerecha.append(texto);
            }

        } 
        else
        {                
            if (boton.textContent == "X")
            {   
                //Borrar ultimo elemento del array y de la clave oculta
                if(valorBtn.length>0){
                    valorBtn.pop();
                    claveOculta = claveOculta.slice(0, -1);
                    inputClave.value = claveOculta;
                }
            }
            else
            {
                //Guardar el valor de los botones pulsados
                valorBtn.push(boton.textContent);
            
                //mostrar *
                claveOculta += "*";
                inputClave.value = claveOculta;
            }
            
        }
        
    })

})

