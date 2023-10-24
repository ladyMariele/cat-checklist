const inputEl = document.getElementById("input-field")
const listEl = document.getElementById("item")



function add() {
    if (inputEl.value == "") {
        alert("enter item")
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
}
