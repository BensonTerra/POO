import { EscapeRoom } from "./EscapeRoom.js"
console.log(EscapeRoom) 
import { Puzzle } from "./Puzzle.js"
console.log(Puzzle)

function renderEscapeRoomLista(escapeRoomsArray, escapeRoomsContainer)
{
    escapeRoomsContainer.innerHTML = ""
    for (let i = 0; i < escapeRoomsArray.length; i++)
    {
        const tempDiv = document.createElement("div")
        tempDiv.classList.add("escape-room")
        tempDiv.style.backgroundImage = `url("${escapeRoomsArray[i]._image}")`
        const tempH2 = document.createElement("h2")
        tempH2.innerHTML = escapeRoomsArray[i]._name
        tempDiv.appendChild(tempH2)
        tempDiv.addEventListener("click",() => renderEscapeRoom(i))
        escapeRoomsContainer.appendChild(tempDiv)
    }    
}

function renderEscapeRoom(escapeRoomId)
{
    const tempEscapeRoom = escapeRooms[escapeRoomId]
    escapeRoomTitle.innerHTML = tempEscapeRoom._name

    //console.log(tempEscapeRoom._puzzles)

    const form = document.createElement('form')
    form.id = escapeRoomId + 1

    let template = ""
    for (let i = 0; i < tempEscapeRoom._puzzles.length; i++)
    {
        template += 
        `
        <fieldset>
        <legend>${tempEscapeRoom._puzzles[i]._name}</legend>
        <div>
            Difficulty: ${tempEscapeRoom._puzzles[i]._dificuldade}
        </div>
        <br>
        <div>
            ${tempEscapeRoom._puzzles[i]._txtQuestao} ?
        </div>
        <br>
        `
        for (let j = 0; j < tempEscapeRoom._puzzles[i]._respostas.length; j += 1) 
        {
            template += 
            `
            <input type="radio" id="er${escapeRoomId + 1}p${i + 1}ans${j + 1}" name="er${escapeRoomId + 1}p${i + 1}" value="${tempEscapeRoom._puzzles[i]._respostas[j]}">
            <label for="er${escapeRoomId + 1}p${i + 1}ans${j + 1}">${tempEscapeRoom._puzzles[i]._respostas[j]}</label><br>
            `
        }
        template += `<div class="puzzle-solved">${tempEscapeRoom._puzzles[i]._solved ? '&#9989;' : '&#10060;'}</div>`;
        template += '</fieldset>';
    }

    escapeRoomContainer.innerHTML = ""
    //console.log(template)
    form.innerHTML = template
    form.innerHTML += '<br><input type="submit" value="Validate Room Answers">';
    form.addEventListener('submit', validateEscapeRoom);
    escapeRoomContainer.appendChild(form);
}

function validateEscapeRoom(event) {
    event.preventDefault();
  
    const fieldsets = escapeRoomContainer.getElementsByTagName('fieldset');
  
    const escapeRoomIndex = this.id - 1;
    console.log(escapeRoomIndex)
    for (let i = 0; i < fieldsets.length; i += 1) {
      const radioButtons = fieldsets[i].getElementsByTagName('input');
      console.log(radioButtons)
      console.log("ciclo fora")
  
      if (radioButtons[escapeRooms[escapeRoomIndex]._puzzles[i]._solucao - 1].checked) 
      {
        console.log("ciclo dentro")
        escapeRooms[escapeRoomIndex].solvePuzzle(i);
      }
    }
  
    renderEscapeRoom(escapeRoomIndex)
  }

// DOM selection
const escapeRoomsContainer = document.getElementById('escape-rooms-container');
const escapeRoomTitle = document.getElementById('escape-room-title');
const escapeRoomContainer = document.getElementById('escape-room-container');

// Create puzzles and escape rooms
const puzzle1 = new Puzzle('Math Puzzle', 'hard', 'What is the result of 3 x 7', [1, 2, 14, 21], 4);
const puzzle2 = new Puzzle('Geography Puzzle', 'medium', 'Which city is the capital of france', ['Lisbon', 'Madrid', 'Paris', 'Rome'], 3);
const puzzle3 = new Puzzle('Quiz Puzzle', 'easy', 'Which animal is the Mickey Mouse', ['Cat', 'Dog', 'Mouse', 'Rabbit'], 3);
const puzzle4 = new Puzzle('One Letter Puzzle', 'hard', 'Which letter denotes the roman numeral for 100', ['C', 'X', 'V', 'I'], 1);

const escapeRoom1 = new EscapeRoom('Lake Room', 'https://picsum.photos/id/980/5000/3509');
escapeRoom1.addPuzzle(puzzle1);
escapeRoom1.addPuzzle(puzzle2);

const escapeRoom2 = new EscapeRoom('Castle Room', 'https://picsum.photos/id/1040/4496/3000');
escapeRoom2.addPuzzle(puzzle3);

const escapeRoom3 = new EscapeRoom('Forest Room', 'https://picsum.photos/id/502/1920/1280');
escapeRoom3.addPuzzle(puzzle4);

const escapeRooms = [escapeRoom1, escapeRoom2, escapeRoom3];
console.table(escapeRooms);

// Add escape rooms to main page
renderEscapeRoomLista(escapeRooms, escapeRoomsContainer);