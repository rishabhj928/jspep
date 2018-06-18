var a = ['rock','paper','scissor'];
var b = a[Math.floor(Math.random()*a.length)];

while(true){
  var c = prompt('Enter rock/paper/scissor');
  if(c!=b)
    break;
  else{
    console.log('Tie! Your move: '+c+', computer move: '+b);
  }
}
if(c=='rock' && b=='scissor'){
  console.log('You Win! Your move: '+c+', computer move: '+b);
}else if(c=='scissor' && b=='rock'){
  console.log('You Lose! Your move: '+c+', computer move: '+b);
}
if(c=='scissor' && b=='paper'){
  console.log('You Win! Your move: '+c+', computer move: '+b);
}else if(c=='paper' && b=='scissor'){
  console.log('You Lose! Your move: '+c+', computer move: '+b);
}
if(c=='paper' && b=='rock'){
  console.log('You Win! Your move: '+c+', computer move: '+b);
}else if(c=='rock' && b=='paper'){
  console.log('You Lose! Your move: '+c+', computer move: '+b);
}