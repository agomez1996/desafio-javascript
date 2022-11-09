const PI = 3.14159265359;
var x = PI/5;
var fx = x.toFixed(4)
document.write("<h3>El valor de x es: "+fx+"</h3>");
var iz = Math.pow(Math.cos(x/2),2)
var fiz = iz.toFixed(4)
document.write("<h2 class=rescolor>La parte izquierda tiene un valor de: "+fiz+" </2>")
var der = (Math.tan(x) + Math.sin(x))/(2*Math.tan(x))
var fder = der.toFixed(4)
document.write("<h2 class=rescolor>La parte derecha tiene un valor de: "+fder+" </h2>")
document.write("<h2>Queda verificado que el lado izquierdo es igual al lado derecho.</h2>")
