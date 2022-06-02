

document.getElementById('add').addEventListener('click',()=>{
 
    let table = document.getElementById('list');
    let row = table.insertRow(1);

    row.insertCell(0).innerHTML= document.getElementById('name').value ;
    row.insertCell(1).innerHTML= document.getElementById('level').value ;
    row.insertCell(2).innerHTML= document.getElementById('type').value ;

    //reset inputs
    document.getElementById('name').value=''
    document.getElementById('level').value=''
    document.getElementById('type').value=''
        
});

