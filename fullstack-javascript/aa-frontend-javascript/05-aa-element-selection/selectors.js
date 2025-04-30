const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    let firstSection = document.getElementById('one')
    let seededFruit = firstSection.children[2].querySelectorAll('li.seed');
    console.log(seededFruit);

    // 2. Get all seedless fruit elements
    let seedlessFruit = firstSection.children[2].querySelectorAll('li.seedless');
    console.log(seedlessFruit); 

    // 3. Get first seedless fruit element
    let firstSeedlessFruit = firstSection.children[2].querySelector('li.seedless');
    console.log(firstSeedlessFruit);

    /* Section 2 */
    // 4. Get inner span with text "you"
    let secondChild = document.getElementById('wrapper');
    let targetSpan = secondChild.querySelector('span');
    console.log(targetSpan);
    
    // 5. Get all children of element "wrapper"
    let childrenOfWrapper = secondChild.children
    console.log(childrenOfWrapper);

    // 6. Get all odd number list items in the list
    let secondSection = document.getElementById('two').children[2];
    let oddNumberList = secondSection.querySelectorAll('li.odd');
    console.log(oddNumberList);
    
    // 7. Get all even number list items in the list
    let evenNumberList = secondSection.querySelectorAll(':not(li.odd)');
    console.log(evenNumberList);
    
    /* Section 3 */
    // 8. Get all tech companies without a class name
    let thirdSection = document.getElementById('three'); // section three
    let anchorElement = thirdSection.children[1].querySelectorAll(':not(a.shopping):not(a.social)')
    console.log(anchorElement); 

    // 9. Get "Amazon" list element
    let amazonElement = thirdSection.querySelector('a.shopping');
    console.log(amazonElement);

    // 10. Get all unicorn list elements (not the image element)
    let unicornElements = document.getElementsByClassName('unicorn');
    console.log(unicornElements);
}

window.onload = select;