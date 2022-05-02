// write js code here corresponding to index.html
// You should add submit event on the form
var MPLdata = JSON.parse(localStorage.getItem("schedule"))|| []
document.getElementById("masaiForm").addEventListener("submit",datasubmit)

function datasubmit(event){
  event.preventDefault()
  var mplobj = {
    matchNum:masaiForm.matchNum.value,
    teamA:masaiForm.teamA.value,
    teamB:masaiForm.teamB.value,
    date:masaiForm.date.value,
    venue:masaiForm.venue.value,
  }
  MPLdata.push(mplobj)
  localStorage.setItem("schedule",JSON.stringify(MPLdata))
  
}