function custPop(x){
  var a = x.length;
  a=a-1;
  var b = [a];
  for(var i in x){
    if(i<a)
      b[i]=x[i];
  }
  return b;
}
var a = [1,2,3,4,5];
console.log(custPop(a));

//push
function custPush(x,a){
  var b = x.length;
  var c = [b+1];
  for(var i=0;i<b;i++){
    c[i] = x[i];
  }
  c[b] = a;
  return c;
}
var b = [1,2,3,4];
console.log(custPush(b,5));

//reverse
function custReverse(x){
  var l = x.length;
  for (var i=0;i<Math.floor(l/2);i++) {
    var z = x[i];
    x[i] = x[l-i-1];
    x[l-i-1] = z;
  }
  return x;
}
var c = [1,2,3,4,5];
console.log(custReverse(c));

//sort
function custSort(x){
  var f = false;
  while (!f){
    f=true;
    for(var i=1;i<x.length;i++){
      if (x[i-1]>x[i]){
        f = false;
        var tmp = x[i-1];
        x[i-1] = x[i];
        x[i] = tmp;
      }
    }
  }
  return x;  
}
var d = [4,2,3,1,5];
console.log(custSort(d));

//indexof
function custIndex(x,v){
  var f;
  for(var i=0;i<x.length;i++){
    if(v==x[i])
      f=i;
  }
  return f;
}
var e = ['a','b','c','d','e'];
console.log(custIndex(e,'c'));