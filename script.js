window.onload = function () {

    clearListedField();
    insertTextBuildListField();
    clearField();
    RiskListChosen();

    function insertTextBuildListField() {
        document.querySelector("#criar-tarefa").addEventListener("click", function () {
            let list = document.querySelector("#lista-tarefas");
            let text = document.querySelector("#texto-tarefa");
            let li = document.createElement('li');
            li.className = 'item';
            li.textContent = text.value;
            paintListChosenAndTakeIt(li);
            if (text.value === '') {
                alert("Você precisa adicionar algo!");
            } else {
                list.appendChild(li);
                text.value = "";
                text.focus();
            }
        });
    }


    function clearListedField() {
        let list = document.querySelectorAll('ol');
        let btn = document.querySelector('.clearReadyBtn');
        list.forEach(item => {
            btn.addEventListener('click', function () {
                let atributoDiv = document.querySelector('.selected').getAttribute('class');
                console.log(atributoDiv);
                if (atributoDiv === 'item selected') {
                    item.innerText = '';
                }
            });
        });
    }


    function clearField() {
        document.querySelector('.btnClear').addEventListener('click', function () {
            let li = document.getElementsByTagName('ol');
            for (let item = 0; item < li.length; item += 1) {
                li[item].innerHTML = '';
            }
        });
    }


    function RiskListChosen() {
        let list = document.querySelectorAll('ol');
        list.forEach(item => {
            item.addEventListener('dblclick', function (event) {
                event.target.classList.add('selected');
                if (event.target.style.textDecoration === 'line-through solid rgb(0, 0, 0)') {
                    event.target.style.textDecoration = '';
                    event.target.classList.remove('selected');
                } else
                    event.target.style.textDecoration = 'line-through solid rgb(0,0,0)';
            });
        });
    }

    function paintListChosenAndTakeIt(task) {
        let list = document.querySelector('ol');

        console.log('entrei');
        task.addEventListener('click', function (event) {
            for (let item = 0; item < list.childElementCount; item += 1) {
                if (list.children[item] !== event.target) {
                    list.children[item].style.backgroundColor = '';
                } else {
                    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
                }
            }
        });
    }
}