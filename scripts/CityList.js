import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    //function below is invoked when click happens
    (clickEvt) => {
        const cityTarget = clickEvt.target
        if (cityTarget.dataset.type === 'city') {
            window.alert(`${cityTarget.dataset.walkername} is servicing this city`)
        }    
    }
)

export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const walker of walkers) {
        citiesHTML += `<li data-walkername="${walker.name}" data-type="city">${walker.city}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

