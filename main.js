


const myButton = document.getElementById("btn1")

const myQuote = document.getElementById("myquote")
const myAuthor = document.getElementById("myauthor")

const copy = document.getElementById("copy")
const volume = document.getElementById("volume")

const myContainer = document.getElementById("container")
const myLoader = document.getElementById("loader")

function first()
{
    // container should be visible --> loader shuld not be visible
    myContainer.hidden = false
    myLoader.hidden = true
}

function second()
{
    //Loader should be visible --> container should not be visible
    myLoader.hidden = false
    myContainer.hidden = true
}


first()

myButton.addEventListener("click",async function()
{
    //Logic where container should be hidden, loader should be visible
    second()
const response = await fetch("https://api.quotable.io/random")
let quotes = await response.json()
//console.log(quotes)
myQuote.innerText = quotes.content
myAuthor.innerText = quotes.author
first()
})


copy.addEventListener("click",function(){

    navigator.clipboard.writeText(myQuote.innerText)
})

volume.addEventListener("click",function(){
    
    let speech = new SpeechSynthesisUtterance(myQuote.innerText)
    speechSynthesis.speak(speech)
})