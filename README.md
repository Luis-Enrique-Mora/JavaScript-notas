# Notas de programación funcional con JavaScript

Se refiere a programación funcional cuando una función **recibe un input y retorna un output**, además tiene que cumplir que, con el **mismo input siempre tiene que retornar el mismo output**, por ejemplo si de input una función recibe el numero 5 y retorna el número 10, haciendo esto n cantidad de veces con la misma función con input 5 siempre debe retornar 10, no un resultado diferente.
ejemplos

```js
/* Esta es una función cuenta con 2 características, 
retorna un valor y además siempre con el mismo input retornará el mismo output, 
en otras palabras si recibe un 5 como input siempre retornará de output 10
*/
function multiplyBy2( number ) {
    return number * 2;
}
// si ejecutamos esta función n cantidad de veces con input 5 siempre retornará 10
multiplyBy2( 5 );
```