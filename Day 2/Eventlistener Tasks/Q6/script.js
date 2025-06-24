document.querySelector("#add-btn").addEventListener('click', (det) => {
    let input = document.querySelector("#input-field input");
    let textContent = input.value.trim();

    if (textContent != '') {
        let elem = document.createElement('li');

        elem.textContent = textContent;
        let removeBtn = document.createElement('button');
        removeBtn.setAttribute('id', "remove-btn");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = function () {
            this.parentElement.remove();
        };

        elem.appendChild(removeBtn);

        document.querySelector(".task-cap-cont ul").appendChild(elem);
        input.value = "";
    }
})
