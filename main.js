// Este simulador consiste en el cálculo del valor de la cuota mensual para la compra de una casa.
// Se tienen como variables el monto aprobado por el monto aprobado por el banco (p), la tasa de interés mensual (t = 0.25) 
//y el plazo del crédito en meses (n = 360), tomando como ejemplo que la cuota es fija mensual.


//La formula es la siguiente:
//Cuota mensual = P * ( 1 + (t/100) ^ n * (t/100)) / ( 1 + (t/100) ^ n - 1 )


alert("Bienvenido al sistema de simulación de crédito hipotecario")


//Declaración de la función
function demo(x,y){
    return (Math.pow(x,y))
}

// 1. Valor de la vivienda
let v = parseInt(prompt("Ingresa el valor de la vivienda, sin puntos ni comas"))
alert("El monto ingresado fue: "+v)

// 2. Valor del préstamo en %
let p = parseInt(prompt("¿Cuanto dinero necesitas?: 10, 20, 30, 40, 50, 60 ó 70"+"%"+" (Ingresa solo el número)"))


if(p != 10 && p!= 20 && p != 30 && p!= 40 && p != 50 && p != 60 && p != 70){

    let bool = false;

    alert("Valor incorrecto, por favor ingrese una de las opciones")

    while(bool == false){

        let p = parseInt(prompt("¿Cuanto dinero necesitas?: 10, 20, 30, 40, 50, 60 ó 70"+"%"+" (Ingresa solo el número)"))
        
        if(p == 10 || p == 20 || p == 30 || p== 40 || p == 50 || p == 60 || p == 70){
            bool = true
            // 3. Valor en pesos del préstamo en $
            p1 = (p/100)*v
            alert("El prestamo solicitado es de: "+ p1 +" $")    

            // 4. Plazo en meses
            const n = 360

            // 5. Declaración tasa de interés mensual
            const t = 0.0025      
            alert("A continuación se calculará el valor de las cuotas con una tasa de intéres del: 0.25%")

            // 5. Se calcula la cuota mensual   
            let base = 1+t
            let val1 = demo(base,n)

            let sim = p1 * (( val1 * t ) / ( val1 - 1 ))

            alert("La cuota mensual es de: "+sim.toFixed(2))
        }else{
            bool = false;
        }              
    }
}else{

// 3. Valor en pesos del préstamo en $
p1 = (p/100)*v
alert("El prestamo solicitado es de: "+ p1 +" $")    

// 4. Plazo en meses
const n = 360

// 5. Declaración tasa de interés mensual
const t = 0.0025      
alert("A continuación se calculará el valor de las cuotas con una tasa de intéres del: 0.25%")

// 5. Se calcula la cuota mensual   
let base = 1+t
let val1 = demo(base,n)

let sim = p1 * (( val1 * t ) / ( val1 - 1 ))

alert("La cuota mensual es de: "+sim.toFixed(2))

}

