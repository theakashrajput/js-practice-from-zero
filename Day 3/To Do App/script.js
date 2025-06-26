let tasks = [];

function loadData(arr) {
    document.querySelector(".task-cap-cont ul").innerHTML = "";
    arr.map((data, idx) => {
        let elem = document.createElement('li');
        elem.textContent = data;
        let removeBtn = document.createElement('button');
        removeBtn.setAttribute('class', "remove-btn");
        removeBtn.setAttribute('id', idx);
        removeBtn.textContent = "Remove";
        elem.appendChild(removeBtn);
        document.querySelector(".task-cap-cont ul").appendChild(elem);
    })
}

function deleteTask(idx) {
    tasks = tasks.filter((ele, id) => id != idx);
    loadData(tasks);
    updateLocalStorage(tasks);
}

if (localStorage.getItem("taskData") != null) {
    tasks = JSON.parse(localStorage.getItem("taskData"));
    loadData(tasks);
}

document.querySelector(".task-cap-cont ul").addEventListener("click", (e) => {
    if (e.target.classList.contains('remove-btn') && e.target.closest('li')) {
        deleteTask(e.target.id);
    }
})

document.querySelector("#input-field").addEventListener('submit', (det) => {
    det.preventDefault();
    let input = document.querySelector("#input-field input");
    let textContent = input.value.trim();

    if (textContent != '') {
        tasks.push(textContent);
        loadData(tasks);
        input.value = "";
        updateLocalStorage(tasks);
    }
})

function updateLocalStorage(arr) {
    localStorage.setItem("taskData", JSON.stringify(arr));
}
