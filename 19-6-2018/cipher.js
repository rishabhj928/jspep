const caesarCipher = str =>{
  var o = ''
  for (var i=0;i<str.length;i++) {
    var c = str[i]
	var code = str.charCodeAt(i)
	if (code>=65 && code<=90)
	  c = String.fromCharCode(((code-65+13)%26)+65)
	else if (code>=97 && code<=122)
	  c = String.fromCharCode(((code-97+13)%26)+97)
	o+=c
  }
  return o
}
console.log(caesarCipher('helloz'))