export function changeTitle() {
    window.document.title = "Rediet's Portfolio"
}

export function changeHeader() {
    let firstDiv = document.body.children[0]
    let firstDivHeading = firstDiv.children[0]
    firstDivHeading.innerHTML = "I am Rediet K."
}

export function changeAboutMe() {
    let secondDiv = document.body.children[1]
    let secondDivP = secondDiv.children[1]
    secondDivP.innerHTML = `Hello there, I'm an enthusiast of App Academy.
                            and I'm very happy to be showing you my portfolio. Enjoy!`
}