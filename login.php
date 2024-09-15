<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Conexión a la base de datos
    $servername = "localhost";
    $username_db = "root";  // Cambiar según tu configuración
    $password_db = "";      // Cambiar según tu configuración
    $dbname = "mi_base_datos";

    $conn = new mysqli($servername, $username_db, $password_db, $dbname);

    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Sanitizar entradas para prevenir inyección SQL
    $name = $conn->real_escape_string($_POST['name']);
    $user = $conn->real_escape_string($_POST['username']);
    $email = $conn->real_escape_string($_POST['email']);
    $pass = $conn->real_escape_string($_POST['password']);

    // Consulta SQL segura usando prepared statements
    $stmt = $conn->prepare("SELECT * FROM usuarios WHERE username = ? AND email = ? AND password = ?");
    $stmt->bind_param("sss", $user, $email, $pass);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Redirigir a la página de éxito
        header("Location: success.html");
        exit();
    } else {
        echo "Usuario, correo o contraseña incorrectos";
    }

    $stmt->close();
    $conn->close();
}
?>


