function left2(str){
 
  firstTwo = str.slice(0,2);
  str = str.replace(firstTwo, "");
  return  str+firstTwo;
  
}