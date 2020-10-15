const features = document.querySelectorAll('.feature');

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

function loadDisharder(){}

function loadGoals(){}

function loadFriends(){}

function loadTiming(){}

function loadNotifications(){}

// adding new tasks -------------------------------
const tasksContainer = document.querySelector('.tasks-container');
const newTaskButton = document.querySelector('.addTaskBtn');

newTaskButton.addEventListener('click',()=>{
    const newTaskPopup = document.createElement('div');
    newTaskPopup.classList.add('newTaskPopup');
    document.querySelector('body').appendChild(newTaskPopup);
    const exitButton = document.createElement('div')
    exitButton.classList.add('exitBtn');
    exitButton.textContent = "x";
    newTaskPopup.appendChild(exitButton);


    // tworzenie formularza tworzenia zadania
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

    submitBtn.addEventListener('click',(e)=>{
        // e.preventDefault;
        const divEl = document.createElement('div');
        divEl.classList.add('task');
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

    })



    exitButton.addEventListener('click',()=>{
        newTaskPopup.remove();
    })
})





// --------------------------------------------------------