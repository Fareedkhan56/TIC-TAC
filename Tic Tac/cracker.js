
let firstUser = document.getElementById('firstUser');
let secondUser;
let warn = document.getElementById('alert');
let div = document.getElementsByTagName('div');

let table = document.getElementById('table');
let tableRowsData = document.getElementsByTagName('td');

function StartGame() {
    if (firstUser.value.length > 1 || firstUser.value.length < 1 || firstUser.value == " " || firstUser.value == ""  || firstUser.value.toString().toLowerCase() != "x" && firstUser.value.toString().toLowerCase() != "0") {
        warn.style.display = 'inline';
    }
    else if (firstUser.value.toString().toLowerCase() == "x" || firstUser.value.toString().toLowerCase() == "0") {
        warn.style.display = 'none';
        div[1].style.display = 'none';
        div[2].style.display = 'inline';

        if (firstUser.value.toString().toLowerCase() == "x") {
            secondUser = "0";
        }
        else if (firstUser.value.toString().toLowerCase() == "0") {
            secondUser = "x";
        }
    }
}

let flag = 0;

function checker(mark) {
    if (flag == 0 && mark.innerText == "" && winStatus == false) {
        mark.innerText = firstUser.value;
        mark.classList = 'firstUser'
        flag = 1;
        setTimeout(()=>(
            Winner(),3000
        ))
    }
    else if (flag == 1 && mark.innerText == "" && winStatus == false) {
        mark.innerText = secondUser;
        mark.classList = 'secondUser'
        flag = 0;
        setTimeout(()=>(
            Winner(),3000
        ))
    }
    else if(winStatus){
        window.location.reload();
    }
}

let winStatus = false;

function Winner() {
    let x = firstUser.value.toString().toLowerCase()
    let y = secondUser;


    if (
        tableRowsData[0].innerText == x &&
        tableRowsData[1].innerText == x &&
        tableRowsData[2].innerText == x ||
        tableRowsData[3].innerText == x &&
        tableRowsData[4].innerText == x &&
        tableRowsData[5].innerText == x ||
        tableRowsData[6].innerText == x &&
        tableRowsData[7].innerText == x &&
        tableRowsData[8].innerText == x ||
        tableRowsData[0].innerText == x &&
        tableRowsData[3].innerText == x &&
        tableRowsData[6].innerText == x ||
        tableRowsData[1].innerText == x &&
        tableRowsData[4].innerText == x &&
        tableRowsData[7].innerText == x ||
        tableRowsData[2].innerText == x &&
        tableRowsData[5].innerText == x &&
        tableRowsData[8].innerText == x ||
        tableRowsData[0].innerText == x &&
        tableRowsData[4].innerText == x &&
        tableRowsData[8].innerText == x ||
        tableRowsData[2].innerText == x &&
        tableRowsData[4].innerText == x &&
        tableRowsData[6].innerText == x
    ) {
        winStatus =true;
        alert("FIRST USER WIN THE GAME")
    }
    else if (
        tableRowsData[0].innerText == y &&
        tableRowsData[1].innerText == y &&
        tableRowsData[2].innerText == y ||
        tableRowsData[3].innerText == y &&
        tableRowsData[4].innerText == y &&
        tableRowsData[5].innerText == y ||
        tableRowsData[6].innerText == y &&
        tableRowsData[7].innerText == y &&
        tableRowsData[8].innerText == y ||
        tableRowsData[0].innerText == y &&
        tableRowsData[3].innerText == y &&
        tableRowsData[6].innerText == y ||
        tableRowsData[1].innerText == y &&
        tableRowsData[4].innerText == y &&
        tableRowsData[7].innerText == y ||
        tableRowsData[2].innerText == y &&
        tableRowsData[5].innerText == y &&
        tableRowsData[8].innerText == y ||
        tableRowsData[0].innerText == y &&
        tableRowsData[4].innerText == y &&
        tableRowsData[8].innerText == y ||
        tableRowsData[2].innerText == y &&
        tableRowsData[4].innerText == y &&
        tableRowsData[6].innerText == y
    ) {
        winStatus = true;
        alert("SECOND USER WON THE GAME");
    }
    // else if(tableRowsData[0,8].innerText == "x" | "y"){
    //     alert("Match Drawed")
    // }
    
}