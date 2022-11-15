<?php
//get data from form  
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
$number = $_POST['number'];

//
$to = "myemail@mail.com";
$subject = "Mail From AutoXpress";

$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Subject = " . $subject . "\r\n Number = " . $number . "\r\n Message =" . $message;

$headers = "From: noreply@AutoXpress.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!== NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
echo"Email sent ! thank you";
header("Location:index.htlm");
?>