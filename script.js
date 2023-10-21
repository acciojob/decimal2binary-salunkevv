function decimalToBinary(num) {
  //Write you code here
	  var quotient =Math.floor(num/2);
      let binary="";
   
      while(quotient>=2)
          {
            let remainder = num %2 ;
            binary = binary + remainder; 
            quotient = Math.floor(num/2);
            num= quotient;
          }
      binary+=1;
      let ans =[...binary].reverse().join("");
      return ans;
  
}

window.decimalToBinary = decimalToBinary;
