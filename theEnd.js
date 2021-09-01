function theEnd(str, front){
  
  var val = front === true ? str.slice(0,1) : str.slice(str.length -1, str.length)
  
  return val;
}