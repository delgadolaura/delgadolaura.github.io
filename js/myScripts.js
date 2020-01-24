var f;
for (f = 0; f < 9; f++) {
  var ans=Math.sqrt(2,f)
  document.write(ans +"<br>");
}

var count=1 
while(count<8){
  var ans=Math.random(count); count++;
  document.write(ans+"<br>")
}

function myLoop(){
var start= document.getElementById("start").value;
var end = document.getElementById("end").value;
  var jump = document.getElementById("jump").value;
  
  console.log(typeof start);
  console.log(typeof end);
  console.log(typeof jump);
  
  start=Number(start);
  end=Number(end);
  jump=Number(jump);
  
for(var i = start; i <= end; i+=jump)
{document.write('<p>' + i + '</p>');
}
}
