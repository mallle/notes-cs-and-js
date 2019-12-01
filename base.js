/**
 * Scroll behavior
 * 
 */
function scroll() {
    //Get all elements that has hrefs with #
    let targets = document.querySelectorAll('a[href^="#"]');

    for (let i = 0; i < targets.length; i++) {
        targets[i].onclick = function (e) {
            e.preventDefault();

            let hash = this.getAttribute("href");
            let elem = document.getElementById(hash.replace("#", ""));

            elem.scrollIntoView({ left: 0, block: 'start', behavior: 'smooth' });
        }
    }
}
scroll();

/*******************
* Accordion
********************/
//Get all accordions
let accordions = document.getElementsByClassName('accordion');

//loop over accordions
for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function () {
        //toggle class 'active' to the button of accordion
        this.classList.toggle('active');

        //get the panel beloging to specific button that was clicked
        let panel = this.nextElementSibling;

        //toggle display between 'block' and 'none'
        panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + 'px';
    });
}
