
const newTournament = document.getElementById('new-tournament');
const newTournamentDiv = document.getElementsByClassName('new-tournament')[0];
const home = document.getElementById('home');
const history = document.getElementById('history');
const divForAddTeam = document.getElementById('addTeamDiv')

const tournament = [
    {
        Team: '',
        Games: 0,
        Goals: 0,
        Points: 0,
    },
    {
        Team: '',
        Games: 0,
        Goals: 0,
        Points: 0,
    },
    {
        Team: '',
        Games: 0,
        Goals: 0,
        Points: 0,
    },
    {
        Team: '',
        Games: 0,
        Goals: 0,
        Points: 0,
    },
]

let start = document.createElement('button');
let br = document.createElement('br');
let inputForTeam = document.createElement('input');
let br1 = document.createElement('br');
let addTeam = document.createElement('button');


start.textContent = 'Start';
inputForTeam.style.margin = '10px 0 0 0';
addTeam.style.margin = '0 0 20px 0';
addTeam.textContent = 'Add Team';


let arrElements = [];
arrElements.push(start, br, inputForTeam, br1);

function hide() {
    newTournament.classList = 'hide';
    arrElements.forEach(el => newTournamentDiv.appendChild(el));
    divForAddTeam.appendChild(addTeam);
}

newTournament.addEventListener('click', hide);

function addInput() {
    let inp = document.createElement('input');
    inp.style.margin = '5px 0px 0px 0px';

    let br = document.createElement('br');

    if(inputForTeam.value) {
        newTournamentDiv.appendChild(inp);
        newTournamentDiv.appendChild(br);
    } else {
        alert('Input Is Empty, Please Enter The Team Name');
    }
}


addTeam.addEventListener('click', addInput);


