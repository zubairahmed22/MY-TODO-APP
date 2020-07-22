// alert("welcome to TODO APP DESIGN!");

function addLi(){

 var listItem = document.getElementById("listitem");


var textBox = document.getElementById("textholder");
var Li = document.createElement("li");
var text1 = document.createTextNode(textBox.value);
Li.setAttribute("class","liststyle")
///btn createtion 
var deleteBtn = document.createElement("button");
var btnText = document.createTextNode("DELETE");
deleteBtn.setAttribute("class","btnstyle")
deleteBtn.setAttribute("onClick","buttonDel(this);")
deleteBtn.appendChild(btnText);
//edit button 
var edit = document.createElement("button");
var eidtText = document.createTextNode("EDIT");
edit.setAttribute("class","editbtn");
edit.setAttribute("onClick","editBtn(this);")
edit.appendChild(eidtText);


//edit update 
var udateBtn = document.createElement("button");
var updateText = document.createTextNode("UPDATE");
udateBtn.setAttribute("class","upbtn");
udateBtn.setAttribute("onClick","updateBtn(this);")
udateBtn.appendChild(updateText);

//hide Input
var eidtInput = document.createElement("input");
var inputText = document.createTextNode(textBox);
eidtInput.setAttribute("class","editinput");

Li.appendChild(eidtInput);
Li.appendChild(udateBtn);
Li.appendChild(edit);
Li.appendChild(deleteBtn);

Li.appendChild(text1);
listItem.appendChild(Li);

textBox.value = "";



}

function buttonDel(e){

e.parentNode.remove()
}



function allDelete(){
    var listItem = document.getElementById("listitem");
    listItem.innerHTML = "";

}

function editBtn(e){
e.parentNode.childNodes[0].style.display = "block";
e.parentNode.childNodes[0].value = e.parentNode.childNodes[4].nodeValue;
e.parentNode.childNodes[2].style.display = "none";
e.parentNode.childNodes [1].style.display = "block";

}

function updateBtn(e){
 

   
   e.parentNode.childNodes[2].style.display = "block";
   e.parentNode.childNodes[0].style.display = "none";
   e.parentNode.childNodes[0].Value;
  
   
   var allValue  = e.parentNode.childNodes[0].value ;
    e.parentNode.childNodes[4].nodeValue    = allValue;
   console.log(allValue);
    console.log(e.parentNode.childNodes[4] );
 
}