// write js code here corresponding to favourites.html

var Favdata = JSON.parse(localStorage.getItem("favourites"))

displaydata(Favdata)
function displaydata(Favdata){
    Favdata.forEach(function(elem,index){
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
      td6.innerText = "Delete"
      td6.addEventListener("click",function(){
         Delete(elem,index)
      })

    
     
      
      

      tr1.append(td1,td2,td3,td4,td5,td6)
      document.querySelector("tbody").append(tr1)
     
    })
}

function Delete(elem,index){
    Favdata.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(Favdata))
    window.location.reload()
}