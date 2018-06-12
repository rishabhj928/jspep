var a = prompt("Enter a number from 1-6");
if(a<0 || a>6){
  console.log("Error");
}
else {
  var b = Math.floor((Math.random() * 6)+1);
  if(a==b)
    console.log("Win");
  else
    console.log("Lose");
}