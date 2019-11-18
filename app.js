const form = document.querySelector('#task-form');

const tasklist = document.querySelector('.collection');

const fliter = document.querySelector('#fliter');

const clearbtn = document.querySelector('#clearTask');

const taskInput = document.querySelector('#task');


const load = () => {

    form.addEventListener('submit' , addtask);
    tasklist.addEventListener('click' , removeTask);
    clearbtn.addEventListener('click', clearTask)
}
 


const addtask = (e) =>{
    if (taskInput.value === "") {
    alert('PLease add task o')
    }


    //create li elelment
const li = document.createElement('li');

li.className = 'collection-item';
li.appendChild(document.createTextNode(taskInput.value));

const x = document.createElement('a');

x.className = 'delete-item';
x.innerHTML = "X";

li.appendChild(x);





tasklist.appendChild(li);

taskInput.value = "";
    e.preventDefault();

}
const removeTask =  (e) =>{

    if (e.target.parentElement.classList.contains('collection-item')) {

if(confirm ('Are you sure'))
        e.target.parentElement.parentElement.remove();
        
        console.log(e.target)
    }
    

   
    
     }

     const clearTask =()=> {
if(confirm('Remove all tasks')){

        tasklist.innerHTML= "";

    
    

    

}
     }

load();