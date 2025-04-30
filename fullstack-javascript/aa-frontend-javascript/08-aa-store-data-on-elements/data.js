window.addEventListener("DOMContentLoaded", () => {
    const inputElement = document.getElementById("name");
    const selectedType = document.getElementById("type")
    const unorderedList = document.getElementById("shopping-list");
    const addButton = document.getElementById("add");

    addButton.addEventListener("click", (event) => {
        event.preventDefault()

        const listItem = document.createElement('li');        
        listItem.setAttribute("data-type", selectedType.value)
        listItem.innerText = inputElement.value.trim();
        unorderedList.append(listItem);
    })
})