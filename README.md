# Programación funcional con JavaScript

Se refiere a programación funcional cuando una función **recibe un input y retorna un output**, además tiene que cumplir que, con el **mismo input siempre tiene que retornar el mismo output**, por ejemplo si de input una función recibe el número 5 y retorna de output el número 10, haciendo esto n cantidad de veces con la misma función con input 5 siempre debe retornar de output 10, no un resultado diferente.

Ejemplo

```js
/* Esta cuenta con 2 características de una función, 
retorna un valor y además siempre con el mismo input retornará el mismo output, 
en otras palabras si recibe un 5 como input siempre retornará de output 10
*/
function multiplyBy2( number ) {
    return number * 2;
}
//
multiplyBy2( 5 ); // 👈si ejecutamos esta función n cantidad de veces con input 5 siempre retornará 10
```

Ejemplo de lo que no es una función

```js
var basePrice = 12500;
var tax = 13;
var result;
/*
esto es conocido como un procedimiento y no una función
👇
*/
function calcTax() {
    result = ( basePrice /100 ) * tax;
}
calcTax();
console.log(result); // result : 1,625
```
Otro ejemplo de lo que no es una función

Nota: a pesar de que este procedimiento recibe un input no está retornando un output como consecuencia del input

```js
var basePrice = 12500;
var tax = 13;
var result;

function calcTax(taxRate) {
    result = ( basePrice / 100 ) * taxRate;
}
calcTax(tax);
console.log(result); // result : 1,625
```
Suena ilógico que algo que tenga la palabra `function` no sea una función, Kyle Simpson de You Don't know js dice en su libro [Functional-Light JavaScript](https://github.com/getify/Functional-Light-JS) 
>Functional Programming is **not just programming with the `function` keyword**. *Kyle Simpson*.

>Programación funcional no es solo programar con la palabra clave `function`.

También en uno de sus cursos de programación funcional en  [Frontend Masters](https://frontendmasters.com/courses/functional-javascript-v3/) dice: porque se use la palabra `function` no la hace una función.

Me tomé el tiempo de hacer estas notas mientras voy en mi viaje de aprender JavaScript, me parece que hay información muy valiosa en inglés y que no está traducida al español, espero le sirva de mucho a aquellas personas que todavía no tienen un inglés avanzado ❤️

Parte de estas notas fueron basadas en el libro [Functional-Light JavaScript](https://github.com/getify/Functional-Light-JS) y cursos de Kyle Simpson de You Don't Know JS y también Brian Lonsdorf.
