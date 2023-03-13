<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SERVER['CONTENT_TYPE']) && $_SERVER['CONTENT_TYPE'] === 'application/json') {

    $request = json_decode(file_get_contents('php://input'), true);

    $data = $request["data"];

    if($data === null){
        $response = [
            'statusCode' => 400,
            'message' => "El campo data es requerido",
        ];

        http_response_code(400);
        echo json_encode($response);
        exit;
    }

    $to      = 'anthony@dathaplus.com';

    $title    = 'Envio de formulario de contacto desde sky jet elite';

    $headers  = "From: no-reply@skyjetselite.theairlinecarrerprogram.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $message = '<h2><b>New lead in sky jets elite:</b></h2><br /><pre>'.json_encode($data).'</pre>';

    mail($to, $title, $message, $headers);

    $response = [
        'statusCode' => 200,
        'message' => 'Datos enviados correctamente'
    ];

    http_response_code(200);
    echo json_encode($response);
}else{
    $response = [
        'statusCode' => 400,
        'message' => "Solicitud incorrecta. El método HTTP debe ser POST y el formato application/json",
    ];

    http_response_code(400);
    echo json_encode($response);
}

