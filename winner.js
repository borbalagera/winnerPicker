var myNodelist = document.getElementsByTagName("LI");
var contenders = [];
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    console.log(contenders[i]);
  }
}

function addToList() {
    if (event.keyCode === 13) {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputVal").value;
  var t = document.createTextNode(inputValue);
  contenders.push(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("EMPTY FIELD");
  } else {
  document.getElementById("ulList").appendChild(li);
  }
  document.getElementById("inputVal").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

}


function winnerDraw(){
  if(contenders.length == 0){
    alert("NO CONTENDERS");
  }
  else{
var total = contenders.length;
var winner = Math.floor((Math.random()*total));

document.getElementById("szam").innerHTML="THE WINNER IS <br> <p>"+ contenders[winner] +"</p><br>CONGRATULATIONS!<br><button onclick='goBack()'>GO BACK!</button><button onclick='winnerDraw()'>PICK AGAIN!</button>" ;
console.log(contenders[winner]);
}}

function goBack(){
  document.getElementById("szam").innerHTML= ' <div id="szam"> <input type="text" id="inputVal" placeholder="ADD A CONTENDER!" onkeydown="addToList()" maxlength="40"> <ul class="listimisti" id="ulList"></ul> <button onclick="winnerDraw()">PICK THE WINNER!</button> <button onclick="arrayClear()">DELETE THEM ALL!</button> </div>' 
  contenders = [];
}


function arrayClear(){
  contenders = [];
  document.getElementById("ulList").innerHTML="";
}