/* Selecionando elementos do DOM */
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.getElementById("new-item-input");

const createItem = (event) => {
    event.preventDefault(); 

    const text = input.value.trim();
    
    if (!text) {
        alert("Informe um item!");
        return;
    }

    //criando os elementos
    const li = document.createElement("li");
    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const button = document.createElement("button");
    const img = document.createElement("img");

    // Atribuindo classes e atributos
    ul.classList.add("flex", "flex-col", "gap-12");
    div.classList.add("flex", "input-wrapper", "gap-12", "align-center", "pad-12");
    checkbox.type = "checkbox";
    img.src = "assets/icons/lixeira.svg";
    img.classList.add("trash")
    span.textContent = text;

    //estruturando
    button.appendChild(img);
    div.append(checkbox, span, button);
    li.appendChild(div);
    ul.prepend(li);


    input.value = "";

    
}

ul.addEventListener("click", (e) => {
    if(e.target.classList.contains("trash")){
        e.target.closest("li").remove()
    }
})

form.addEventListener("submit", createItem);
