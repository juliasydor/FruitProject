
let title_1 = document.createElement('span')
title_1.innerText = "Fruta"

let title_2 = document.createElement('h1')
title_2.innerText = "Vida"

let content = document.createElement('div')
content.id = "divContent"

document.querySelector('body').appendChild(content)

content.appendChild(title_1)
content.appendChild(title_2)


let card_1 = document.createElement('div')
card_1.innerText = "Banana"
let card_2 = document.createElement('div')
card_2.innerText = "Pera"
let card_3 = document.createElement('div')
card_3.innerText = "Manga"
let card_4 = document.createElement('div')
card_4.innerText = "Abacaxi"
let card_5 = document.createElement('div')
card_5.innerText = "Jabuticaba"


let principal = document.createElement('article')
document.querySelector('body').appendChild(principal)

principal.appendChild(card_1)
principal.appendChild(card_2)
principal.appendChild(card_3)
principal.appendChild(card_4)
principal.appendChild(card_5)

















