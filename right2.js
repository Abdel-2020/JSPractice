function right2(str){
  lastTwo = str.slice(0,-2);
  str = str.replace(lastTwo, "");
  return  str+lastTwo;
  
}