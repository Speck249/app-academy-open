export function findElementById(id) {
    let bodyHeader = document.getElementById(id);
    return bodyHeader;
}

export function findFirstElementOfTag(tag) {
    let elementOfTag = document.querySelector(tag);
    return elementOfTag
}

export function findFirstElementOfClass(cls) {
    let elementOfClass = document.getElementsByClassName(cls)
    return elementOfClass[0]
    
}

export function findElementsOfTag(tag) {
    let arrayOfTags = document.getElementsByTagName(tag)
    return arrayOfTags
}

export function findElementsOfClass(cls) {
    let arrayOfClasses = document.getElementsByClassName(cls)
    return arrayOfClasses
}