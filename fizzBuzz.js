function dammyFizzBuzz(){
    for (i = 0; i <= 100; i++){
      if ((i % 3 === 0) || (i % 5 === 0)){
        console.log(i);
      }
    }
  }

function simpleFizzBuzz(value){
	if ((value % 3 === 0) || (value % 5 === 0)){
	  return true;
	}
}
