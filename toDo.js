let id = 0;

document.getElementById('add').addEventListener('click',() =>{
    let createdDate=new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    //Set attr to row you just created.
    //Attr for row is id, then id value w/ template literals ``. item-${increments of id}
    row.setAttribute('id',`item-${id}`);
    //insert value of first(0) element in row 0=task,1=datecrea,2=startdate...
    //grabs value from task input puts in task col
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    //2nd value  date created(1)
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth()+1}-${createdDate.getDate()}`;
    //3rd value Start Date(2)
    //find location you want info to go (col 2) = find input where data entered.
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
    //4th value End Date(3)
    //find location you want info to go (col 2) = find input where data entered.
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
    //shortcut for actions cell location
    let actions = row.insertCell(4);
    //future delete button on 4th cell of row Actions
    actions.appendChild(createDeleteButton(id++)); 
    //reset inputs
    document.getElementById('new-task').value='';

});


function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: test-${id}`);
        let elementToDelete = document.getElementById(`test-${id}`);
    
    }
}


