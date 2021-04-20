document.addEventListener('DOMContentLoaded',()=>{


//card options

const cardArray = [
{ name: 'fries',
  img: 'src/images/fries.png ',
},
{   name:'cheeseburger',
    img: 'src/images/cheeseburger.png',
},
{   name: 'hotdog',
    img: 'src/images/hotdog.png',
},
{   name: 'ice-cream' ,
    img: 'src/images/ice-cream.png',
},
{   name: 'milkshake' ,
    img: 'src/images/milkshake.png',
},
{   name: 'pizza' ,
    img: 'src/images/pizza.png',
},
{ name: 'fries',
  img: 'src/images/fries.png ',
},
{   name:'cheeseburger',
    img: 'src/images/cheeseburger.png',
},
{   name: 'hotdog',
    img: 'src/images/hotdog.png',
},
{   name: 'ice-cream' ,
    img: 'src/images/ice-cream.png',
},
{   name: 'milkshake' ,
    img: 'src/images/milkshake.png',
},
{   name: 'pizza' ,
    img: 'src/images/pizza.png',
},
]

console.log(cardArray)
console.log(cardArray.length)

cardArray.sort(()=> 0.5-Math.random())

const protein = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

function createBoard(){
    for (let i=0;i<cardArray.length;i++){
        const card = document.createElement('img')
        card.setAttribute('src','src/images/blank.png')
        card.setAttribute('data-id',i)
        protein.appendChild(card)
        card.addEventListener('click',flipCard)
    }
}




function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if (cardsChosen.length ===2){
        setTimeout(checkForMatch, 500)
    }
    console.log(cardsChosenIds)
    // console.log(cardsChosenIds[0]) //first item chosen 
    // console.log(cardsChosenIds[1]) // second item chose
}

function checkForMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId){
        alert('You have clicked the same image!')
        cards[optionOneId].setAttribute('src','src/images/blank.png')
        cards[optionTwoId].setAttribute('src','src/images/blank.png')
    }else if (cardsChosen[0] === cardsChosen[1]){
    alert("You have found a match!")
    cards[optionOneId].setAttribute('src','src/images/white.png')
    cards[optionTwoId].setAttribute('src','src/images/white.png')
    cards[optionOneId].removeEventListener('click',flipCard)
    cards[optionTwoId].removeEventListener('click',flipCard)
    cardsWon.push(cardsChosen)
} else{
    cards[optionOneId].setAttribute('src','src/images/blank.png')
    cards[optionTwoId].setAttribute('src','src/images/blank.png')
    alert("Not a match, try again!")
}
cardsChosen =[]
cardsChosenIds = []
resultDisplay.textContent = cardsWon.length
if (cardsWon.length === cardArray.length/2)
{
    resultDisplay.textContent = 'Congratulations, You won!'
}


console.log(cardsChosen)
console.log(cardsWon)

}

createBoard()





















console.log(" ")
console.log("Calisthenics is fun!")
console.log("from the ashes we will rise")





























})