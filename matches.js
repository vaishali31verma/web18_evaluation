// write js code here corresponding to matches.html

var MPLdata = JSON.parse(localStorage.getItem("schedule"))
var Favdata = JSON.parse(localStorage.getItem("favourites"))|| []

displaydata(MPLdata)
function displaydata(MPLdata){
    document.querySelector("tbody").innerHTML = ""
    MPLdata.forEach(function(elem,index){
      var tr1 = document.createElement("tr")
      
      var td1 = document.createElement("td")
      td1.innerText = elem.matchNum

      var td2 = document.createElement("td")
      td2.innerText = elem.teamA


      var td3 = document.createElement("td")
      td3.innerText = elem.teamB


      var td4 = document.createElement("td")
      td4.innerText=elem.date



      var td5 = document.createElement("td")
      td5.innerText=elem.venue

      var td6 = document.createElement("td")
      td6.innerText="Add as Favourites"
      td6.addEventListener("click",function(){
          favfun(elem);
          
      });

      tr1.append(td1,td2,td3,td4,td5,td6)
      document.querySelector("tbody").append(tr1)
     
  })
      
 function favfun(elem){
    console.log(elem)
    Favdata.push(elem)
    localStorage.setItem("favourites",JSON.stringify(Favdata))
 }
      
  
}

function handlebyname(){
 var selected= document.getElementById("filterVenue").value

 var filterbyvenue =  MPLdata.filter(function(elem){
     return elem.venue == selected
 })
 displaydata(filterbyvenue)
}



