<?php
/*
	Leemos el flujo que hay en php://input
	Como codificamos los datos con JSON al enviarlos,
	al recibirlos tenemos que decodificarlos de la misma manera.
	Para ello, PHP provee el método json_decode: http://php.net/manual/es/function.json-decode.php
*/
$formulario = json_decode(file_get_contents("php://input"));

# Ahora mascota sigue siendo un objeto, con propiedades. 
# Podemos acceder a ellas dependiendo de cómo las hayamos nombrado en el lado del cliente
$nombre = $formulario->nombre;
$subject = $formulario->asunto;
$from = $formulario->email;
$message = $formulario->mensaje;

ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
  
    $to = "adriantorres@fronteraswebs.com";
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    $to="fronteraswebs@gmail.com";
    mail($to,$subject,$message, $headers);

   