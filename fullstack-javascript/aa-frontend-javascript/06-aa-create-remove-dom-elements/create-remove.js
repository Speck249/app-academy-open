/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();
        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        const breed = new URL(url).pathname.split('/')[3] 

        /*------------ Create new dog card with the url above ------------- */
        const newList = document.createElement('li');
        newList.innerHTML = `<figure><img src=${url} /><figcaption>${breed}</figcaption></figure>`

        /* Add the new dog card as a child to the ul in the .gallery element */
        document.querySelector('ul').appendChild(newList)

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    const dogList = document.querySelectorAll('li')
    const firstDog = dogList[0]

    /*-------------------- Remove the first dog card --------------------- */
    firstDog.remove()
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    const dogList = document.querySelectorAll('li')
    const lastDog = dogList[dogList.length - 1]

    /*-------------------- Remove the last dog card ----------------------- */
    lastDog.remove()
});