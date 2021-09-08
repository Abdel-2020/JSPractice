function backAround(str){
  var lastChar = str.slice(str.length -1);
  return lastChar + str + lastChar; 
}