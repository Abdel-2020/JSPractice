function missingChar(str, n){
 var strPartOne = str.slice(0, n);
 var strPartTwo = str.slice(n+1, str.length);
 return strPartOne + strPartTwo;
}