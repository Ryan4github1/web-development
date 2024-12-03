var student=['jia','bob','john','jia']
document.write(student+"<br><br>")
document.write("student's name in ascending order:<br>")
document.write(student.sort()+"<br><br>")
document.write("student's name in descending order:<br>")
document.write(student.reverse()+"<br><br>")

// var points = ['10', '16', '999.89', '999.98']
// document.write(points + "<br><br>")
// document.write("points name in ascending order:<br>")
// document.write(points.sort(function(a,b){return a - b}) + "<br><br>")
// document.write("points name in descending order:<br>")
// document.write(points.reverse(function(a,b){return b - a}) + "<br><br>")
var number = [28,6,19,95];
 function myFunction(num)
{
    return num * 10;
 }
var newarray = number.map(myFunction);
 document.getElementById("product_value").innerHTML = newarray;
var c=18, h=19, z= 20;
var a=eval( c*z+c+h-z)
document.write(a+"<br>")
var n=10;
document.write(n+a+"<br>")
 var x=10;
 var y=20;
 var ans = eval("x+y");
 document.write(ans+"<br>")
 document.write(eval("1+2")+"<br>")