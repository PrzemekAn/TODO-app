const features = document.querySelectorAll('.feature');
const tasksDetails = document.querySelector('.tasks-details');
const tasksDetailsHeader = document.querySelector('.tasks-details-header');
const taskDetailsHeader = document.querySelector('.task-details-header');
const deadline = document.querySelector('.deadline');
const taskDetails = document.querySelector('.task-details');

function removeSelection(){
    features.forEach((feature)=>{
        feature.classList.remove('active');
    })
};

features.forEach((feature)=>{
    feature.addEventListener('click', (e)=>{
        removeSelection();
        e.target.classList.add('active');
    })
});

const checkCircles = document.querySelectorAll('.check-circle');

checkCircles.forEach(checkCircle =>{
    checkCircle.addEventListener('click',(e)=>{
        e.target.classList.toggle('active');
    })
})

// function loadDisharder(){}

// function loadGoals(){}

// function loadFriends(){}

// function loadTiming(){}

// function loadNotifications(){}

// adding new tasks -------------------------------
const tasksContainer = document.querySelector('.tasks-container');
const newTaskButton = document.querySelector('.addTaskBtn');
const tasks = [];
let idx = 0;

newTaskButton.addEventListener('click',()=>{

    // tworzenie formularza tworzenia zadania
    const newTaskPopup = document.createElement('div');
    newTaskPopup.classList.add('newTaskPopup');
    document.querySelector('body').appendChild(newTaskPopup);
    const exitButton = document.createElement('div')
    exitButton.classList.add('exitBtn');
    exitButton.textContent = "x";
    newTaskPopup.appendChild(exitButton);

    
    const newTaskPopupHeaderContainer = document.createElement('div');
    newTaskPopupHeaderContainer.classList.add('newTaskPopupHeaderContainer');
    newTaskPopup.appendChild(newTaskPopupHeaderContainer);
        
    const taskName = document.createElement('input');
    const taskNameLabel = document.createElement('label');
    taskName.id = 'popupTaskHeader';
    taskNameLabel.setAttribute('for', 'popupTaskHeader');
    taskNameLabel.textContent = 'Task name';
    newTaskPopupHeaderContainer.appendChild(taskName);
    newTaskPopupHeaderContainer.appendChild(taskNameLabel);


    const newTaskPopupShortcutContainer = document.createElement('div');
    newTaskPopupShortcutContainer.classList.add('newTaskPopupShortcutContainer');
    newTaskPopup.appendChild(newTaskPopupShortcutContainer);

    const taskShortcut = document.createElement('textarea');
    const taskShortcutLabel = document.createElement('label');
    taskShortcut.id = 'taskShortcut';
    taskShortcutLabel.setAttribute('for', 'taskShortcut');
    taskShortcutLabel.textContent = 'Task details';
    newTaskPopupShortcutContainer.appendChild(taskShortcut);
    newTaskPopupShortcutContainer.appendChild(taskShortcutLabel);


    const newTaskDatePopupContainer = document.createElement('div');
    newTaskDatePopupContainer.classList.add('newTaskDatePopupContainer')
    newTaskPopup.appendChild(newTaskDatePopupContainer);

    const taskDate = document.createElement('input');
    const taskDateLabel = document.createElement('label');
    taskDate.id = 'taskDate';
    taskDateLabel.setAttribute('for','taskDate');
    taskDateLabel.textContent = 'Task date';
    newTaskDatePopupContainer.appendChild(taskDate);
    newTaskDatePopupContainer.appendChild(taskDateLabel);

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submitBtn');
    submitBtn.textContent = 'Add task';
    newTaskPopup.appendChild(submitBtn);

    exitButton.addEventListener('click',()=>{
        newTaskPopup.remove();
    })

    

    // nowe zadania

    submitBtn.addEventListener('click',(e)=>{
        
        // e.preventDefault;
        const divEl = document.createElement('div');
        divEl.classList.add('task');
        divEl.setAttribute('id', `${idx}`)
        tasksContainer.appendChild(divEl);

        const headerEl = document.createElement('h2');
        headerEl.classList.add('task-header');
        headerEl.textContent = taskName.value;
        divEl.appendChild(headerEl);

        const shortcutEl = document.createElement('p')
        shortcutEl.classList.add('task-shortcut');
        shortcutEl.textContent = taskShortcut.value;
        divEl.appendChild(shortcutEl);

        const dataEl = document.createElement('p');
        dataEl.classList.add('date');
        dataEl.textContent = taskDate.value;
        divEl.appendChild(dataEl);

        const deleteTaskButtons = document.createElement('div');
        deleteTaskButtons.classList.add('deleteTaskButton');
        deleteTaskButtons.textContent = 'x';
        divEl.appendChild(deleteTaskButtons);

        // tworzenie obiektow i dodawanie do nich wartosci z inputow 
        // dodać zwiększanie indeksu o 1 i nadawać to jako id dla każdego obiektu (możliwość wyboru)
        const taskObj = {
            name: taskName.value,
            shortcut: taskShortcut.value,
            date: taskDate.value
        }

        tasks.push(taskObj);

        taskName.value = '';
        taskShortcut.value = '';
        taskDate.value = '';

        deleteTaskButtons.addEventListener('click',(e)=>{
            e.target.parentNode.remove();
            deleteTaskButtons.parentNode.removeEventListener('click',showTask);
            idx--;
        })
        
        divEl.addEventListener('mouseover',()=>{
            divEl.addEventListener('click',showTask);
        })

        function showTask(){
            taskDetailsHeader.textContent = taskObj.name;
            deadline.textContent = taskObj.date;
            taskDetails.textContent = taskObj.shortcut;
        }
        // otwieranie szczegolow zadania
        divEl.addEventListener('click',showTask)
        console.log(idx);
        idx++;
    }) 
})





// --------------------------------------------------------

// otwieranie szczegolow zadania


