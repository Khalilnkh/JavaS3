function calc(){
    var sum=document.getElementById('sum').value
    var month=document.getElementById('month').value
    var percent=document.getElementById('percent').value
    var muddet=month/12;
    var monthlypay=0;


 if(sum=!null){
    if(percent=!null){

        if(month=!null){
            monthlypay=(sum/month)+(sum*(percent/100))
           
           
            alert( `${monthlypay}`)

        }
    }
 }

}