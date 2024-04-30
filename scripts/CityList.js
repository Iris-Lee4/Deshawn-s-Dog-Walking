import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers();
const cities = getCities();

document.addEventListener(
    "click",
    //function below is invoked when click happens
    (clickEvt) => {
        const cityTarget = clickEvt.target
        if (cityTarget.dataset.type === 'city') {
            let walkersList = ""
            let numWalkers = 0
            for (const walker of walkers) {
                if (walker.cityId === parseInt(cityTarget.dataset.id) && numWalkers === 0) {
                    walkersList += walker.name;
                    numWalkers ++;
                } else if (walker.cityId === parseInt(cityTarget.dataset.id) && numWalkers !== 0) {
                    walkersList += `, ${walker.name}`;
                    numWalkers ++;
                }
            }
            if (numWalkers > 1) {
                window.alert(`${walkersList} are servicing this city`)    
            } else {
                window.alert(`${walkersList} is servicing this city`)
            }
        }    
    }
)

export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li data-type="city" 
                        data-id="${city.id}"
                        >${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

