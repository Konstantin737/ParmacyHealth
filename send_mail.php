<?php

   ini_set('display_errors', '1');
   ini_set('display_startup_errors', '1');
   error_reporting(E_ALL);

   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;

   require 'PHPMailer/src/PHPMailer.php';
   require 'PHPMailer/src/Exception.php';

   $mail = new PHPMailer(true);
   $mail->CharSet = 'UTF-8';
   $mail->isHTML(true);
   $mail->setFrom('from@site.skilbe.ru', 'Аптека ЕМУП Здоровье');

   $name = $_POST['name'];
   $email = $_POST['email'];
   $text_subject = $_POST['text_subject'];
   $text_message = $_POST['text_message'];
   // $file = $_FILES['file']['name'];

   $email_template = 'template_mail.html'; //создаем переменную для шаблона письма из html
   $body = file_get_contents($email_template);// заношу сюда переменную созданную до этого

   $body = str_replace('%name%', $name, $body);//берем наше созданное body считываем оттуда %name% при помощи метода str_replace и меняем на наше имя $name, в конце пишем снова $body
   $body = str_replace('%email%', $email, $body);
   $body = str_replace('%text_subject%', $text_subject, $body);
   $body = str_replace('%text_message%', $text_message, $body);

   $theme = '[Обращение с формы аптеки ЕМУП Здоровье]'; // тема письма
   $mail->addAddress('samarcev737@yandex.ru'); //адрес куда отправится письмо, можно задать несколько

   //Прикрепляю файл
   if(!empty($_FILES['file']['tmp_name'])) {
      $filePath = __DIR__ . '/files/' . $_FILES['file']['name'];
      //загружаю файл
      if (copy($_FILES['file']['tmp_name'], $filePath)) {
         $fileAttach = $filePath;
         $body.='<strong style="margin: 30px;">!--К письму прикреплен файл--!</strong>';
         $mail->addAttachment($fileAttach);
      }
   }

   $mail->Subject = $theme; //присваиваем письму нашу тему через метод Subject
   $mail->MsgHTML($body); //формируем тело нашего сообщения

   // $mail->send(); //отправляем наше сообщение используя метод send(убрал)
   if (!$mail->send()) {//отправляем наше сообщение используя метод send
      $message = 'Ваше обращение не отправлено, попробуйте еще раз';
   } else {
      $message = 'Ваше обращение отправлено, спасибо!';
   };

   $response = ['message' => $message];
   header('Content-type: application/json');//заголовок ответа

   echo json_encode($response);
?>