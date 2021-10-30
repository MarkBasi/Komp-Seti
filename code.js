
const aboba = document.querySelector('.aboba')
const settings = document.querySelector('#settings')
let replacementNode = document.createElement('input',  placeholder="Enter place")

settings.addEventListener('click', () => {
    replacementNode = aboba.replaceChild(replacementNode, aboba.childNodes[1])
    settings.hidden = true
    aboba.childNodes[1].addEventListener('keyup', (e)=>{
        if (e.key = 'Enter') {
            alert()
        }
        console.log(e);
    })
})

