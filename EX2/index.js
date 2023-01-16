function numberOneTriangle(n) {
    if(n < 1 || n > 10){
      console.log("Please enter a number between 1 and 10.")
      return;
    }
    for(let i = 1; i <= n; i++){
      let row = '';
      for(let j = 1; j <= i; j++){
        row += '1';
      }
      console.log(row);
    }
  }
  numberOneTriangle(5);
