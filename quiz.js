document.getElementById('p-button').addEventListener('click',()=>{

    let parent = document.getElementById('p-div');

// New Paragraph
    let newparag = document.createElement('p');
    newparag.innerHTML = document.getElementById('p-input').value;
    
    parent.appendChild(newparag);
    document.getElementById('p-input').value ='';
});