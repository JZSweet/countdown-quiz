console.log("hallo world")
// place qustions on the page
var qs = [
    {title:"1+2", answe1:"3"}, 
   {title:"4+3", answe1:"10"}, 
   {title:"1+2", answe1:"3"}, 
   {title:"1+2", answe1:"3"}, 
]
var qindex = 0
function qustionsholder(){

    document.querySelector("#question-title").innerHTML = qs[qindex].title;
    document.querySelector("#anser-1").innerHTML = qs[qindex].answe1
    document.querySelector("#anser-2").innerHTML = "5";
    document.querySelector("#anser-3").innerHTML = "8";
    document.querySelector("#anser-4").innerHTML = "10";
}
qustionsholder()
document.querySelector("#start").addEventListener("click",function(){
    qindex++ 
    qustionsholder()
})
// decide if answers cerct
// count scort
// save scort
// start timer/decreas timer/
//  end time