var list = document.getElementById("list");
function addItem() {
  var item = document.getElementById("item").value;

  var li = document.createElement("li");
  // entry.appendChild(document.createTextNode(item));
  // list.appendChild(entry);

  li.textContent = item;                //assigning the input given to every list item  
  list.appendChild(li);

  let a = document.createElement("a");  //we are creating an href link here i.e a so that hover krke we can perform our functionalities. We can also add bootstrap icons here.
  a.className = "delete";               //giving it a className so that we can add the css we need
  a.textContent = "x";                  //link ka name X rakha as it can be used as a way to show cross/delete
  a.href = "javascript:void(0)";        //since we are using href link, need to write this so that we are not redirected anywhere, its like href # in html.

  li.appendChild(a);                    //adding this cross in front of our item

  document.getElementById("item").value = " ";  //if we dont do this, the box will still contain the item typed by the user, so next time he/she'll need to erase it first and then add a new entry. To avoid we again reset the item to null string
}

//here we are adding event listners.
//they are used to perform event when something triggers
//it can be a click, mouse roll or anything
//here we want something to occur when we "click" X

let deleteButton = document.querySelector("ul");         //selecting ul means we want something to happen with whats inside our ul
deleteButton.addEventListener("click", function (e) {    //addEvent listeners has 2 parameters. 1 ke kaunsa event horha(here its click), 2nd is the function where we define ke kya event hoga
  let list = document.getElementById("list");            //function me we are passing e, implies e is the  target trigger (in short whatever we are clicking, so e here is x) 
  let li = e.target.parentNode;
  list.removeChild(li);                                  //deleting
});
