// Logic Functions:

// function to catch input and add it to ul.todo-list:
function catchInput() {
    let inp = document.querySelector('.new-todo');
    let item = document.querySelector('label');
    console.log(item);
    let listItems = document.querySelector('.todo-list');
    inp.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            let li = document.createElement("li");
            //    let div = document.createElement('div');
            //    let input = document.createElement('input');
            //    li.appendChild(div).appendChild(input);
            //    div.appendChild(item).innerHTML = inp.value;
            listItems.appendChild(li).innerHTML = `<div><input type='checkbox'></input><label>${inp.value}</label><button class='remove'></button>`;
            let countItemsLeft = document.querySelector('strong');
            countItemsLeft.innerText++;
            if (countItemsLeft.innerText == 1) {
                changeFooterDisplay();
            }
        inp.value='';
          

        }
    });
}

document.querySelector('.new-todo').addEventListener('keydown',  catchInput());    


// Display functions:


function changeFooterDisplay() {
    let foot = document.querySelector('.footer');
    let ul = document.createElement("ul");
    foot.appendChild(ul).innerHTML = `<li class='foot'><a>All</a></li><li class='foot'><a>Active</a></li><li class='foot'><a>Completed</a></li>`;
}




// function changeDisplay() {
//     if (catchInput()) {
//         let foot = document.querySelector('footer');
//         foot.appendChild('ul').appendChild('li').innerHTML = "<a>All</a>"

//     }
// }

// changeDisplay();
