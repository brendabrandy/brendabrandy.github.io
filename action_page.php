<?
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$email_message = "

Name: ".$name."
Email: ".$email."
Message: ".$message."

";

mail ('sogun3@gmail.com', "New Enquiry", $email_message);
header ("Location: email_sucess.php");

?>