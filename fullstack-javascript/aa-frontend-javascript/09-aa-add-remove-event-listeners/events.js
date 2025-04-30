// Alert user when spacebar is pressed
const handleSpaceBar = (event) => {
    if (event.code === "Space") {
        alert("You pressed the Spacebar 🚀")
    }
}

// Change background color of Input section based on Input value
const changeBackground = (event)  => {
    console.log("🎨 Input section background-color changed")
    const redInput = document.getElementById('red-input'); 
    redInput.style.backgroundColor = event.target.value.trim().toLowerCase() === "red" ? "red" : "transparent";
}   

// Add input value as an Unordered List Item
const addNewList = () => {
    console.log("📃 New list item added")
    const inputItem = document.getElementById("list-add");
    const unorderedList = document.querySelector('ul');

    if (inputItem.value.trim()) {
        const newList = document.createElement('li');
        newList.innerText = inputItem.value;
        unorderedList.appendChild(newList);
    }
}

// Change section background color based on user color selection
const changeSectionColor = (event) => {
    console.log("🎨 Section background-color changed")
    const coloredSection = document.getElementById('section-3');
    coloredSection.style.backgroundColor = event.target.value;
}

// Insert text indicating section hover status
const hoverEffect = () => {
    console.log("🪄 Inserted text on hover status");
    const divElement = document.getElementById("hover-div")
    divElement.innerText = "You just hovered over me, yay";
}

// Attach all Event Listeners
const addEvents = () => {
    const redInput = document.getElementById('red-input');
    if (!redInput.dataset.listenerAttached) {
        redInput.addEventListener("input", changeBackground);
        redInput.dataset.listenerAttached = true;
    }
    
    const addItem = document.getElementById("add-item");
    if (!addItem.dataset.listenerAttached) {
        addItem.addEventListener("click", addNewList);
        addItem.dataset.listenerAttached = true;
    }
    
    const colorSelect = document.getElementById("color-select")
    if (!colorSelect.dataset.listenerAttached) {
        colorSelect.addEventListener("click", changeSectionColor);
        colorSelect.dataset.listenerAttached = true;
    }

    const hoverDiv = document.getElementById("section-5");
    if (!hoverDiv.dataset.listenerAttached) {
        hoverDiv.addEventListener("mouseover", hoverEffect);
        hoverDiv.dataset.listenerAttached = true;
    }

    console.log("✅ All Events Attached");
}

// Remove all Event Listeners
const removeEvents = () => {
    const redInput = document.getElementById('red-input');
    if (!redInput.dataset.listenerAttached) {
        redInput.removeEventListener("input", changeBackground);
        redInput.dataset.listenerAttached = false;
    }
    
    const addItem = document.getElementById("add-item");
    if (!addItem.dataset.listenerAttached) {
        addItem.removeEventListener("click", addNewList);
        addItem.dataset.listenerAttached = false;
    }
    
    const colorSelect = document.getElementById("color-select")
    if (!colorSelect.dataset.listenerAttached) {
        colorSelect.removeEventListener("click", addNewList);
        colorSelect.dataset.listenerAttached = false;
    }

    const hoverDiv = document.getElementById("section-5");
    if (!hoverDiv.dataset.listenerAttached) {
        hoverDiv.removeEventListener("mouseover", hoverEffect);
        hoverDiv.dataset.listenerAttached = false;
    }

    console.log("❎ All Events Removed") 
}

// Event attached upon DOMContentLoad
document.addEventListener("DOMContentLoaded", () => {
    alert('DOM Fully Loaded!');
    document.addEventListener("keydown", handleSpaceBar);
    addEvents();

    try {
        document.getElementById("remove-listeners").addEventListener("click", removeEvents)
    } catch (error) {
        alert('Failed to Remove Events')
    }
    
    const addBackListeners = document.createElement('button');
    addBackListeners.setAttribute("id", "add-listener");
    addBackListeners.innerText = "Add Listeners";
    document.getElementById("section-4").appendChild(addBackListeners);

    try {
        addBackListeners.addEventListener("click", addEvents);
    } catch (error) {
        alert("Failed to Add Back Events");
    }   
})