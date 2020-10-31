<?php
$host="localhost";
$user="root";
$password="";
$db="myschool";

mysql_connect($host,$user,$password);
mysql_select_db($db);

if(isset($_POST['username'])){
    $name=$_POST['username'];
    $class=$_POST['class'];
    $section=$_POST['section'];
    $roll=$_POST['roll'];
    $id=$_POST['id']; 
    $password=$_POST['password'];

    $sql="select * from student_login where Name='".$name."'AND Class='".$class=$."'AND Sec='".$section."'AND Roll='".$roll."'AND id='".$id."'AND pass='".$password."'
    limit 1;
    $result=mysql_query($sql);

    if(mysql_num_rows($result)==1){
        echo "you have succesfully logged in";
        exit();
    }
    else{
        echo"you have entered incorect in form";
        exit();
    }
}

?>

<html>
<head>
<title>Login Form Design</title>
    <link rel="stylesheet" type="text/css" href="style.css">
<body>
    <div class="loginbox">
    <img src="images/avatar.png" class="avatar">
        <h1>Login Here</h1>
        <form method='POST' action='#'>
            <p>Name</p>
            <input type="text" name="username" placeholder="Your Name">
            <p>Class</p>
            <input type="text" name="class" placeholder="Your Class">
             <p>Section</p>
            <input type="text" name="section" placeholder="Enter Section">
            <p>Roll</p>
            <input type="text" name="roll" placeholder="Your Roll">
            <p>ID</p>
            <input type="text" name="id" placeholder="Your ID">
            <p>Password</p>
            <input type="text" name="password" placeholder="Your password">
            <input type="submit" name="submit" value="Login">
           
            <a href="#">Don't have Regestation?</a>
        </form>
        
    </div>

</body>
</head>
</html>