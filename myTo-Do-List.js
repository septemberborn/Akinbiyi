var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if( ev.target.tagName === 'LI') {
    if(ev.target.getAttribute("class") == 'done')
      ev.target.removeAttribute("class");
    else
      ev.target.setAttribute("class",'done'); 
  }
}, false);

function displayListItem(i) {
    var n = document.createElement("li");
    //console.log(i);
    document.getElementById("to-do-list").appendChild(n);
    n.innerHTML = i;    

}

function checkEnter(e) {
    e = e || event;
    var t = /textarea/i.test((e.target || e.srcElement).tagName);
    return t || (e.keyCode || e.which || e.charCode || 0) !== 13
}
function send(event) {
	console.log("Running send()...");
  var e=document.getElementById("list-input").value;
  document.getElementById("list-input").value = "";
  if(e.trim().length > 0 && e){
    displayListItem(e);
  }
 event.preventDefault();
};
document.querySelector("form").onkeypress = checkEnter;
document.querySelector("form").addEventListener('submit', send, true);

//document.querySelector("form").submit(displayListItem());

