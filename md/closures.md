## Closures

### ¿Qué son los closures?
Básicamente son funciones que tienen la capacidad de recordar, además un closure es una **función de orden superior**, *en inglés **High order function (`HOF`)***, esto quiere decir que son funciones que reciben una o más funciones como input o que retorna una o más funciones como output, por cierto se considera que los closures no son funciones puras ya que estas no siempre retornan el mismo output si le enviamos el mismo input una y otra vez.

El siguiente ejemplo es un **closure** que recuerda el `string` anterior y lo concatena con el `string` que le enviamos nuevamente.

```js
function crearFuncion(){
    var stringRecordado = "";

    function concatString(str) {
        
        stringRecordado += str;
        return stringRecordado;
    }

    return concatString;
}

var funcionCreada = crearFuncion();

funcionCreada("Hola");
funcionCreada(" ");
funcionCreada("Mundo")
console.log( funcionCreada("!") ); //Hola mundo!
```