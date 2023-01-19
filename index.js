let myLeads = []
const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const inputEl = document.getElementById('input-el')
const linkList = document.getElementById('link-list')

let leadsFromLocalstorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalstorage) {
    myLeads = leadsFromLocalstorage;
    renderLeads()
}

function renderLeads() {
    let listItems = ""

    for (i = 0; i < myLeads.length; i++) {
        listItems += `<li><a href="${myLeads[i]}"  target="_blank">${myLeads[i]} </a></li>`

    }
    linkList.innerHTML = listItems

}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    renderLeads()
})



inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})


// single item delete
// linkList.addEventListener("click", function (e) {
//     e.preventDefault()
//     myLeads.splice(e.target.dataset.id, 1);
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     renderLeads()

// })