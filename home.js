
const newTournament = document.getElementById('new-tournament');
const newTournamentDiv = document.getElementsByClassName('new-tournament')[0];
const home = document.getElementById('home');
const history = document.getElementById('history');
const divForAddTeam = document.getElementById('addTeamDiv');
const divForTable = document.getElementById('table-div');
const tableBody = document.getElementById('table-body');
const trForTbody = document.createElement('tr');


const tournament = [];
let numberInputs = [];
const inputValues = [];


let start = document.createElement('button');
let br = document.createElement('br');
let br1 = document.createElement('br');
let addTeam = document.createElement('button');


start.textContent = 'Start';
addTeam.style.margin = '0 0 20px 0';
addTeam.textContent = 'Add Team';


let arrElements = [];
arrElements.push(start, br, br1);

function hide() {
    newTournament.classList = 'hide';
    arrElements.forEach(el => newTournamentDiv.appendChild(el));
    divForAddTeam.appendChild(addTeam);
}

newTournament.addEventListener('click', hide);

function addInput() {
    let inpTeam = document.createElement('input');
    let br = document.createElement('br');
    inpTeam.style.margin = '5px 0px 0px 0px';
    inpTeam.classList = 'inpTeam';
    newTournamentDiv.appendChild(inpTeam);
    newTournamentDiv.appendChild(br);
    numberInputs = document.querySelectorAll('.inpTeam');
}

function editTable() {
    numberInputs.forEach(a => inputValues.push(a.value));
    for(let i = 0; i < inputValues.length; i++) {
        let trForBody = document.createElement('tr');
        for(let k = 0; k < 4; k++) {
            let tdForTr = document.createElement('td');
            trForBody.appendChild(tdForTr);
            tdForTr.textContent = 0;
        }

        tableBody.appendChild(trForBody);
        trForBody.firstElementChild.textContent = inputValues[i];
        newTournamentDiv.classList = 'hide';
        divForAddTeam.classList = 'hide';
        divForTable.classList = 'show';
    }  
}

addTeam.addEventListener('click', addInput);

start.addEventListener('click', editTable);

