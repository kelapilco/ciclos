/*estructura del ciclo for 
me permite escribir n 
veces una secion de codigo 
tiene 3 parametros como:
inicio, finy el incremento
sintasis basica es la siguiente:
for(inicio;fin;incremento) (
bloque de codigo a repetir)
variables de tipo let => cuando se necesita que el dato
sea utilizado dentro de una seccion de codigo, eso quiere decir que va a estar disponible 
en la seccion donde fue creada

variable de tipo bar=> esta variable 
puede ser utilizada y 
esta disponible en todo mi programa
operadores arimeticos son:
+suma 
-resta
*multiplicacion
/division
%modulo*/


/*for(let i=3;i<=19;i++){
    //creo una condicion para encontrar los numeros pares 
    if(i%2==0){
        document.write(i+"<br>")
    }
   
}
var tamanio = prompt("ingrese el tamaño del arreglo")
tamanio=parseInt(tamanio)
var notas =(tamanio)
for(j=0;j<=tamanio;j++){
    notas[j]=parseInt(prompt("Ingrese la nota " + j+1))
}
for(j=0;j<=tamanio;j++){
    document.write(notas[j]);

}*/
/*for(let i=1; i<=3; i++){

    if(i%2==0){
        var num = ("ingrese un numero " + (i+1))
        document.write(i+ "<br>")
    }
}
var mayor = num[0];
var menor = num[0];

for (var i=1; i< num.length;i++){
    if(num[i]> mayor){
        mayor = num[i];  
    }
    if(num[i]> menor){
        menor = num[i];  
    }
    document,write("<br>El numero mayor es " + mayor)
    document,write("<br>El numero menor es " + menor)
    
}*/
//ingresamos el tamaño del arreglo
var tamanio = parseInt(prompt("ingresa el tamaño del arreglo"))
var arreglo = [tamanio]
//inicial
mayor=arreglo[0]
menor=arreglo[0]
for(i=0; i<tamanio;i++){
    arreglo[i]=(parseInt(prompt("ingreso el numero " + (i+1))));
}
//imprimimos en pantalla los datos
document.write(arreglo)
for(i=0; i<tamanio;i++){
    if(arreglo[i]>mayor){
        mayor=arreglo[i]
    }
    if(arreglo[i]<menor){
        menor=arreglo[i]
    }
}
document.write("el numero mayor es " + mayor + "<br>" )
document.write("el numero menor es " + menor )
var arreglo =[tamanio]
for(var i=2; i<tamanio;i++){

}
//programa en javascript donde el usuario ingrese un numero por teclado
//verificar si ese numero es primo o no 
//un numero es primo es divisible para 1 y para si mismo 
/*var numero=prompt("ingrese el numero")
//va a contar las veces que se repite el numero o
var contador=0
//reaslizo un cilo desde uno hasta el numero ingresado y se va a incrementar en 1
for(i=1;i<=numero;i++){
    modulo=numero%i
    if(modulo==0){
        contador=contador+1
     }
     document.write(modulo+"<br>")
}
if(contador ==2){
    document.write("El numero es primo ")
}else{
    document.write("El numero no es primo")
}*/
//ejercicio donde ingrese por teclado el numero inicial de un rango y el numero final de un rango
//Encontrar los numero primos del 1 al 10

/*var numero=prompt("ingrese el inicio")
var contador=0
for(i=1;i<=10;i++){
    modulo=numero%i
    if(modulo==0){
        contador=contador+1
     }
     document.write(modulo+"<br>")
}
if(contador ==2){
    document.write("El numero es primo ")
}else{
    document.write("El numero no es primo")
}
var tamanio = parseInt(prompt("ingresa el inicio"))
var arreglo = [tamanio]
var numero=prompt("ingrese el inicio")
var contador=0
inicio=arreglo[0]
final=arreglo[0]
for(i=0; i<tamanio;i++){
    arreglo[i]=(parseInt(prompt("ingreso el numero " + (i+1))));
    for(i=1;i<=numero;i++){
        modulo=numero%i
        if(modulo==0){
            contador=contador+1
         }
         document.write(modulo+"<br>")
    }
    if(contador ==2){
        document.write("El numero es primo ")
    }else{
        document.write("El numero no es primo")
}
}

document.write(arreglo)
for(i=0; i<tamanio;i++){
    if(arreglo[i]>inicio){
        inicio=arreglo[i]
    }
    if(arreglo[i]<final){
        final=arreglo[i]
    }
}
document.write("el numero mayor es " + inico + "<br>" )
document.write("el numero menor es " + final )
var arreglo =[tamanio]
for(var i=2; i<tamanio;i++){

}*/