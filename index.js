const inputEl = document.getElementById("input-field")
const listEl = document.getElementById("item")
const buttonEl = document.getElementById("button")


buttonEl.addEventListener("click", function() {

    if (inputEl.value == "") {
            alert("You forgot to enter an item.")
        } else {
            listEl.innerHTML += `
                <li onclick="this.style.display='none'">
                ${inputEl.value}
                </li>
            ` 
            }
    inputEl.setAttribute("autofocus", "autofocus")
    inputEl.focus() // this actually sets the autofocus attribute

    inputEl.value = ""

})