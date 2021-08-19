function parrotTrouble(talking, hour){
  if(talking == false){
    return false;
  } else {
      return ((hour > 20) || (hour < 7));
    }
  }
