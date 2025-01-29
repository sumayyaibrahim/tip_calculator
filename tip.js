function calculate( temp,tempp){
var result= (temp.value*(tempp.value/100))
const ans = document.getElementById("out1")
ans.innerHTML=`Tip Amount:  ₹<span>${result.toFixed(2)}</span>`  


const ans1 = document.getElementById("out2")
 var result1=parseFloat(temp.value)+result
 
ans1.innerHTML=`Total Amount To Pay:  ₹<span>${result1.toFixed(2)}</span>`

}
function reset()
{
    input_value.value=''
    input_valuep.value=''
     

}