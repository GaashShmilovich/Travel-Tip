import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const LOCS_KEY = 'locsDB'

export const locService = {
  getLocs,
  remove,
  save,
}

const locs = [
  { name: 'Greatplace', lat: 32.047104, lng: 34.832384 },
  { name: 'Neveragain', lat: 32.047201, lng: 34.832581 },
]

function getLocs() {
  var locs = storageService.query(LOCS_KEY) || [
    { name: 'Greatplace', lat: 32.047104, lng: 34.832384 },
    { name: 'Neveragain', lat: 32.047201, lng: 34.832581 },
  ]
  return locs
}

function remove(loc) {
  return storageService.remove(LOCS_KEY, loc)
}

function save(loc) {
  if (loc) return storageService.put(LOCS_KEY, loc)
  else return storageService.post(LOCS_KEY, loc)
}
