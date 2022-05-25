console.log("welcome to app js");
//constructor
function book(name, author, type) {
    this.name = name,
        this.author = author,
        this.type = type
}

//display constructor
function display() {
;
}

//add to display book
display.prototype.add = function(book){
    let tablebody=document.getElementById("tablebody");
    let ulstring = `
    <tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
</tr> 
    `
    tablebody.innerHTML+=ulstring;
    console.log('addddddddddd');
}

display.prototype.clear = function () {
    let library = document.getElementById('library');
    library.reset()
}

display.prototype.show = function () {
  alert('Invalid name or Author !!');
}

display.prototype.validate = function (book) {
  if(book.name.length<2 || book.author.length<2)
  {
      return false;
  }  
  else
  return true;
}


// add submit event listner
let library = document.getElementById('library');
let addbook = document.getElementById('addbook');
addbook.addEventListener('click', libarysubmit);
function libarysubmit(e) {
    // e.preventdefault();
    let name = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let technical = document.getElementById("technical");
    let software = document.getElementById("software");
    let hardware = document.getElementById("hardware");
    let type;
    if (technical.checked)
        type = technical.value;
    else if (hardware.checked)
        type = hardware.value;
    else if (software.checked)
        type = software.value;

    let mybook = new book(name, author, type);
    let Display = new display();
    if(Display.validate(mybook)==true){
        Display.add(mybook);
        Display.clear();
        // alert('Added successfully !!');
    }
    else{
        Display.show();
    }
    console.log('event fired');
    console.log(mybook);
}