import { storageService } from "./async-storage.service.js"
import { utilService } from './util.service.js'

const LOCS_KEY = 'locsDB'

export const locService = {
    getLocs
}


const locs = [
    { name: 'Greatplace', lat: 32.047104, lng: 34.832384 },
    { name: 'Neveragain', lat: 32.047201, lng: 34.832581 }
]

function getLocs() {
    const locs = storageService.query(LOCS_KEY)
    return locs
}