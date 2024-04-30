import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets();
const walkers = getWalkers();
const cities = getCities();

// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalker) => {
    let petWalker = null

    for (const walker of walkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

// find city
const findCity = (walker) => {
    let cityName = null
    for (const city of cities) {
        if (city.id === walker.cityId) {
            cityName = city.name; 
        }
    }
    return cityName
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        const currentCity = findCity(currentPetWalker)

        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentCity}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

