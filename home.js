
const newTournament = document.getElementById('new-tournament');
const newTournamentDiv = document.getElementsByClassName('new-tournament')[0];
const home = document.getElementById('home');
const history = document.getElementById('history');
const divForAddTeam = document.getElementById('addTeamDiv');
const divForTable = document.getElementById('table-div');
const tableBody = document.getElementById('table-body');

const trForTbody = document.createElement('tr');

const select1 = document.getElementById('team1');
const select2 = document.getElementById('team2');

const shot1 = document.getElementById('shot1');
const shot2 = document.getElementById('shot2');
const playBtn = document.getElementById('play');


const tournament = [];

const inputValues = [];
const optArr1 = [];
const optArr2 = [];

let arrElements = [];
let numberInputs = [];


let start = document.createElement('button');
let br = document.createElement('br');
let br1 = document.createElement('br');
let addTeam = document.createElement('button');


start.textContent = 'Start';
addTeam.style.margin = '0 0 20px 0';
addTeam.textContent = 'Add Team';


arrElements.push(start, br, br1);

function hide() {
    newTournament.classList = 'hide';
    arrElements.forEach(el => newTournamentDiv.appendChild(el));
    divForAddTeam.appendChild(addTeam);
}


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
        if(inputValues[i] !== '') {
            let trForBody = document.createElement('tr');

                let obj = {Team: inputValues[i], Games: 0, Goals: 0, Points: 0};
                tournament.push(obj);
            
            for(let k = 0; k < 4; k++) {
                let tdForTr = document.createElement('td');
                trForBody.appendChild(tdForTr);
                tdForTr.textContent = Object.values(obj)[k];
            }

            tableBody.appendChild(trForBody);          
            let opt1 = document.createElement('option');
            select1.appendChild(opt1);
            opt1.textContent = inputValues[i];
            let opt2 = document.createElement('option');          
            select2.appendChild(opt2);
            opt2.textContent = inputValues[i];
            optArr1.push(opt1.value);
            optArr2.push(opt2.value);
            newTournamentDiv.classList = 'hide';
            divForAddTeam.classList = 'hide';
            divForTable.classList = 'table-div';
        } 
    }  
}


function playMatch() {
    console.log(tournament); 
}


addTeam.addEventListener('click', addInput);
newTournament.addEventListener('click', hide);
start.addEventListener('click', editTable);
playBtn.addEventListener('click', playMatch);









