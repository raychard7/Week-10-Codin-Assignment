let button = document.getElementById('btn');
let content = document.getElementById('content')

console.log(content.parentNode)

button.addEventListener('click',() =>{
    if (content.innerHTML =='Goodbye.'){
        content.innerHTML = "Hello."
    } else {
        content.innerHTML = "Goodbye."
    }
})

//Remove Element from DOM
// grab remove button first do->getElement id remove. Then add event(click)
document.getElementById('remove').addEventListener('click',()=>{
    let idToRemove = document.getElementById('remove-id').value;
    let elementToRemove = document.getElementById(idToRemove);
    //Use the child=content to find the parent, to remove the child.
    elementToRemove.parentNode.removeChild(elementToRemove);
    document.getElementById('remove')='';
})

let id=0;


//Add Element to DOM
//1.Find parent we want to add child to. 2.Create new element in JS.
//3. Set up element with atr  4. Appending Element as a child to parent.

//Select add button, create click event for button
document.getElementById('add').addEventListener('click',()=>{
// Locate parent
    let parent = document.getElementById('paragraphs');
    //creates new element 'tag' desired in ''
    let newElement = document.createElement('p');
    //add attributes
    //inner html takes in the input from html page and apends it to new element<p>
    newElement.innerHTML= document.getElementById('new-text').value;
    //add attrbute incremental new ones (new attibute,att value)
    newElement.setAttribute('id',id++);
    //Append to parent
    parent.appendChild(newElement);
    //Lets clear input after child appended w/ new element.
    document.getElementById('new-text').value='';
})