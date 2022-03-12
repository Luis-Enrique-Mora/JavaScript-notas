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