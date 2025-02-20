const ul = document.createElement("ul")
ul.classList.add("flex", "flex-col", "gap-12")

const li = document.createElement("li")

const div = document.createElement("div")
div.classList.add("flex", "input-wrapper", "gap-12", "align-center", "pad-12")

const input = document.createElement("input")
input.type("checkbox")

const span = document.createElement("span")
const button = document.createElement("button")
const img = document.createElement("img")
img.src("assets/icons/lixeira.svg")


ul.append(li)

console.log(ul)