<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device=width,initial-scale=1.0">
    <script type="application/javascript" src="projectscripts.js"></script>
    <link href="bootstrap-3.3.2-dist/css/bootstrap.min.css" rel="stylesheet">
    <script src = "http://code.jquery.com/jquery-latest.min.js"></script>
</head>

<body>

  <div class = "wrapper">

  <div id = "menu"></div>

	<div class = "container">
    <h1 style = "color: black"> Get In Touch </h1>
    <hr>
		<p><font size = "3"> Email sent! </font></p>
    <div id = "footer"></div>

  </div>

  <script> 
      $(function(){
            $("#menu").load("menu.html");
            $("#menu.index").addClass("active");
            $("#footer").load("footer.html");
          
      });
      </script> 


</body>
</html>