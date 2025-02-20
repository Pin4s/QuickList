export const ul = document.querySelector("ul")
export const li = document.createElement("li")
export const div = document.createElement("div")
export const input = document.createElement("input")
export const span = document.createElement("span")
export const button = document.createElement("button")
export const img = document.createElement("img")


ul.classList.add("flex", "flex-col", "gap-12")
div.classList.add("flex", "input-wrapper", "gap-12", "align-center", "pad-12")
input.type ="checkbox"
img.src= "assets/icons/lixeira.svg"
span.textContent = 'Agua branca'

ul.prepend(li)
li.append(div)
div.append(input, span, button)
button.append(img)

