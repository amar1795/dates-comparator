

let result =document.getElementById("result");
let btn=document.getElementById("check")
btn.addEventListener("click",()=>{

    let date1=document.getElementById('date-1').value;
    let date2=document.getElementById('date-2').value;



if(date1.length==0 || date2.length==0)
{
    result.innerHTML="<span> please enter valid dates</span>"
}
else if(date1>date2)
{
    result.innerHTML="date 1 is <b> greater </b> than date 2 "
}
else if(date1<date2)
{
    result.innerHTML="date 1 is <b> smaller </b> than date 2 "
}
else if(date1==date2)
{
    result.innerHTML="date 1 is <b> equal </b> than date 2 "
}

})