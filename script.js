const backgroundColor = 'rgb(128, 128, 128)';
const getItemsList = document.getElementsByTagName('li');
const comparedClass = 'completed';


function salveItensListOnLocalStorage() {
  const itensClassList = [];
  const objectItemClassList = {};

  if (getItemsList.length === 0) {
    alert('Lista vazia');
  } else {
    for (let index = 0; index < getItemsList.length; index += 1) {
      const item = getItemsList[index].innerText;
      const classItem = getItemsList[index].className;
      itensClassList.push(objectItemClassList[index] = [item, classItem]);
    }
  }
  localStorage.setItem('itemsList', JSON.stringify(itensClassList));
}

function addItemListInOrderList(itemList) {
  document.getElementById('lista-tarefas').appendChild(itemList);
}

function createItemList(arrayItens) {
  arrayItens.forEach((item) => {
    const itemList = document.createElement('li');
    itemList.innerText = item;
    addItemListInOrderList(itemList);
  });
}

function createItemListLocalStorage(getObjectList) {
  getObjectList.forEach((item) => {
    const itemList = document.createElement('li');
    const textItemList = item[0];
    const textClassName = item[1];
    itemList.innerText = textItemList;
    if (textClassName !== '') {
      itemList.classList.add(textClassName);
    }
    addItemListInOrderList(itemList);
  });
}

function loadingListItemsOnLocalstorage() {
  const getObjectList = JSON.parse(localStorage.getItem('itemsList'));
  if (getObjectList !== null) createItemListLocalStorage(getObjectList);
}

loadingListItemsOnLocalstorage();

function clearInputValue(item) {
  item.value = '';
}

function changeFromBackgroundToWhite() {
  for (let index = 0; index < getItemsList.length; index += 1) {
    getItemsList[index].style.backgroundColor = 'rgb(255,255,255)';
  }
}

function chanceBackgroundColorItemList(itemList) {
  itemList.style.backgroundColor = backgroundColor;
}

function getItemSelected() {
  for (let index = 0; index < getItemsList.length; index += 1) {
    if (getItemsList[index].style.backgroundColor === backgroundColor) {
      return getItemsList[index];
    }
  }
  return false;
}

function existClassCompleted(itemList) {
  if (itemList.getAttribute('class') === comparedClass) {
    return true;
  }
  return false;
}

function addClasseCompleted(itemList) {
  itemList.className = comparedClass;
}

function removeClasseCompleted(itemList) {
  itemList.classList.remove(comparedClass);
}

function deleteAllItensList(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

document.getElementById('criar-tarefa').addEventListener('click', function () {
  const inputItem = document.getElementById('texto-tarefa');
  const arrayItens = [inputItem.value];
  createItemList(arrayItens);
  clearInputValue(inputItem);
});

document.getElementById('lista-tarefas').addEventListener('click', function (event) {
  changeFromBackgroundToWhite();
  chanceBackgroundColorItemList(event.target);
});

document.getElementById('lista-tarefas').addEventListener('dblclick', function (event) {
  const resultBoolean = existClassCompleted(event.target);
  if (resultBoolean) {
    removeClasseCompleted(event.target);
  } else addClasseCompleted(event.target);
});

document.getElementById('apaga-tudo').addEventListener('click', function () {
  deleteAllItensList(document.getElementById('lista-tarefas'));
});

document.getElementById('salvar-tarefas').addEventListener('click', function () {
  const arrayItemsList = [];
  const arrayClassItemList = [];
  for (let index = 0; index < getItemsList.length; index += 1) {
    arrayItemsList.push(getItemsList[index].innerText);
    arrayClassItemList.push(getItemsList[index].className);
  }
  salveItensListOnLocalStorage(arrayItemsList, arrayClassItemList);
});

function downItemList(itemSelected) {
  const elementFather = itemSelected.parentNode;
  const lastElementChild = elementFather.lastElementChild;
  const nextSibling = itemSelected.nextSibling;

  if (itemSelected === lastElementChild) {
    alert('Não existem itens a baixo');
  } else elementFather.insertBefore(itemSelected, nextSibling.nextSibling);
}

function upItemList(itemSelected) {
  const elementFather = itemSelected.parentNode;
  const firstElementChild = elementFather.firstElementChild;
  const previousSibling = itemSelected.previousElementSibling;

  if (itemSelected === firstElementChild) {
    alert('Não existem itens a cima');
  } else elementFather.insertBefore(itemSelected, previousSibling);
}

document.getElementById('mover-cima').addEventListener('click', function () {
  const resultItemSelectec = getItemSelected();
  if (resultItemSelectec === false) {
    alert('Selecione um item');
  } else upItemList(resultItemSelectec);
});

document.getElementById('mover-baixo').addEventListener('click', function () {
  const resultItemSelectec = getItemSelected();
  if (resultItemSelectec === false) {
    alert('Selecione um item');
  } else downItemList(resultItemSelectec);
});

function mountArrayOfCompletedClass() {
  const arrayOfCompletedClass = [];
  for (let index = 0; index < getItemsList.length; index += 1) {
    if (getItemsList[index].getAttribute('class') === comparedClass) {
      arrayOfCompletedClass.push(getItemsList[index]);
    }
  }
  return arrayOfCompletedClass;
}

function removeFinishedItems() {
  const elementFather = getItemsList[0].parentNode;

  const arrayOfCompletedClass = mountArrayOfCompletedClass();
  const totalItems = arrayOfCompletedClass.length;

  for (let index = 0; index < totalItems; index += 1) {
    elementFather.removeChild(arrayOfCompletedClass[index]);
  }
}

document.getElementById('remover-finalizados').addEventListener('click', function () {
  removeFinishedItems();
});

document.getElementById('remover-selecionado').addEventListener('click', function () {
  const itemSelected = getItemSelected();
  if (itemSelected === false) {
    alert('Selecione um item');
  } else itemSelected.parentNode.removeChild(itemSelected);
});
