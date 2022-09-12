function calc(){
    var sum=document.getElementById('sum').value
    var month=document.getElementById('month').value
    var percent=document.getElementById('percent').value
    var monthlypay=0;

    monthlypay=(sum/month)+(sum*(percent/100)/month)
           
           
    alert( `${monthlypay}`)

 if(sum==!null && month==!null && percent==!null){

 }

}