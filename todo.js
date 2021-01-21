//adding to do into todo list
const addTodo = document.querySelector('.add');
const list = document.querySelector('.todos-ul');
const search = document.querySelector('.search input')
const reusableFunc = task =>{
    const template = 
        `<li class="list-group-item d-flex justify-content-between align-items-center">
            <span>
               ${task}
            </span>
            <i class="fas fa-trash delete"></i>
        </li>

    `;
    // appending to the dom
    list.innerHTML += template;
}

addTodo.addEventListener('submit' , e=>{
    e.preventDefault();
    const task = addTodo.new.value.trim();
    // to add this task into dom lets create reusable function
    if(task.length){
        reusableFunc(task);
        addTodo.reset(); 
    }
    
})

// deleting a todo
list.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})

//keyup event 

const filterTask = (letter)=>{
    Array.from(list.children)  //used to convert the HTML collection into Arrays
        // hide content which does not matches
        .filter((task)=> !task.textContent.toLowerCase().includes(letter))
        .forEach((task)=> task.classList.add('filtered'))

        // show content which previously does not matched
        Array.from(list.children)  
        .filter((task)=> task.textContent.toLowerCase().includes(letter))
        .forEach((task)=> task.classList.remove('filtered'))


}
search.addEventListener('keyup', () =>{
    const letter = search.value.trim().toLowerCase();
    filterTask(letter);

})