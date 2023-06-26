let players = JSON.parse(localStorage.getItem('players')) || [];
           
displayData();

var counter = 0;
function AddPlayers(){
    const fname = document.getElementById('fname');
    const f = fname.value;
    const lname = document.getElementById('lname');
    const l = lname.value;
    const country = document.getElementById('country');
    const c = country.value;
    const pscore = document.getElementById('pscore');
    const p = pscore.value;

    if(f.trim() !== ''){
        players.push({f,l,c,p});
    
        localStorage.setItem('players', JSON.stringify(players));
        displayData();
        fname.value = '';
        lname.value = '';
        country.value ='';
        pscore.value ='';
    }

    counter ++;
    var formID = 'ID' + counter;
    var formElement = document.createElement('ID');
    formElement.id = formID;
    formElement.innerHTML = formID;

    var listItem = document.createElement('li');
    listItem.appendChild(formElement);

    document.getElementById('formContainer').appendChild(listItem)
 }

 function displayData(){
    const output = document.getElementById('output');
    output.innerHTML = '';

    players.forEach(function(task, index) {
        const li = document.createElement('li');
        li.innerHTML = task.f +" "+task.l+" "+task.c+" "+task.p+ " "+'<button onclick="editData(' +index+ ')">Edit</button> <button onclick="deleteData(' +index+ ')">Delete</button>' ;
        output.appendChild(li);
        
    });
 }

 function editData(index){
    const newF = prompt("Enter New Firstname:");
    const newL = prompt("Enter New KLastname:");
    const newC = prompt("Enter New Country:");
    const newP = prompt("Enter New Personal Score:");

    if(newF !==null && newL !==null && newC !==null&& newP !==null){
        players[index] = { f: newF, l: newL, c: newC, p:newP };
        localStorage.setItem('players', JSON.stringify(players));
        displayData();
    }  
 }

 function deleteData(index){
    if (confirm('Are you sure you want to delete this Player?')) {
        players.splice(index, 1);
        localStorage.setItem('players',JSON.stringify(players));
        displayData();
    } 
 }