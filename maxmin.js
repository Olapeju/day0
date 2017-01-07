function findMin(arrayValue){
	var minValue = arrayValue[0];
    for (var i = 0; i < arrayValue.length; i++){
      if (arrayValue[i] < minValue){
        minValue = arrayValue[i];
      }
    }
    return minValue;
  }

  function findMax(arrayValue){
      var maxValue = arrayValue[0];
      for (var i = 0; i < arrayValue.length; i++){
        if (arrayValue[i] > maxValue){
          maxValue = arrayValue[i];
        }
      }
      return maxValue;
    }