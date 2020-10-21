<?php
$post_data = json_decode(file_get_contents('php://input'), true); 
// the directory "data" must be writable by the server
$name = "data/".$post_data['filename'].".csv"; 
$data = $post_data['filedata'];
// write the file to disk
file_put_contents($name, $data);
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Food Allergy</title>
    <script src="db/submit.js"></script>
    <script src="db/validate.js"></script>
    <script src="jsPsych/jspsych.js"></script>
    <script src="jsPsych/plugins/jspsych-html-keyboard-response.js"></script>
    <script src="jsPsych/plugins/jspsych-image-keyboard-response.js"></script>
    <link href="jsPsych/css/jspsych.css" rel="stylesheet" type="text/css"></link>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/w3.css"> <!-- styling for w3c progress bars -->
  </head>
    <body id='unload' onbeforeunload="return areYouSure()" style="background-color:white;">  
      <?php include 'include/intake.php'?>
    </body>
  <footer>

    <script type="text/javascript" src="exp/fn.js"></script>
    <script type="text/javascript" src="exp/var.js"></script>
    <script type="text/javascript" src="exp/conf.js"></script>
    <script type="text/javascript" src="exp/main.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-git.js"></script>
  </footer>
</html>


  