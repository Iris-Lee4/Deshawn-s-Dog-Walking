import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers();
const cities = getCities();

document.addEventListener(
    "click",

    // theClickEvent is a parameter
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        let cityWalked = null
        if(whatWasClickedOn.dataset.type === 'walker') {
            
            for (const city of cities) {
                if (parseInt(whatWasClickedOn.dataset.cityid) === city.id) {
                    cityWalked = city.name;
                }
            }
            window.alert(`This walker works in ${cityWalked}`)
        }
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}"
                        data-cityid="${walker.cityId}"
                        data-type="walker"
                        >${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML;
}

