function parrotTrouble(talking, hour){
var val = talking === true && (hour < 7 || hour > 20) ? true : false
  return val; 
  
}