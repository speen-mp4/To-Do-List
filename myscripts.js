document.getElementById("addBtn"). addEventListener("click", addText);

function addText(){
  var listItem = document.createElement("li");
  listItem.innerText = document.getElementById("myInput").value;
  document.getElementById("myUL").appendChild(listItem);
  
  //delete button
  var deleteButton = document.createElement("button");
  deleteButton.className  = "delete";
  deleteButton.onclick=removeText;
  deleteButton.innerText = "x";
  listItem.appendChild(deleteButton);
  }

  function removeText(){  
    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    ul.removeChild(listItem);
    
  }
