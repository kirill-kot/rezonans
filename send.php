<?php
    $to = "icook22@mail.ru";
    $name = $_POST['name'];
    $telephone = $_POST['telephone'];
    $message = $_REQUEST['message'];
    $headers  = "Content-type: text/html; charset=windows-1251 \r\n";
    $headers .= "Заяка на консультацию от " . $_POST['name'];
    $subject = "Заяка на консультацию от " . $_POST['name'];
    $body = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$name.'</p>
                        <p>Телефон: '.$telephone.'</p>
                        <p>Сообщение: '.$message.'</p>
                    </body>
                </html>';
    $send = mail($to, $subject, $body, $headers);
?>
