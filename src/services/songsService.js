// import { storageService } from './storageService.js'
// import { makeId } from './utilService.js'
import axios from 'axios'
// const STORAGE_KEY = 'robots'
import { httpService } from './http.service'
export const songsService = {
    query,

}

async function query(filterBy) {
        return await axios.get('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V')
        .then(res => { console.log(res.date); return res.data})
        .catch(err => {
            console.log('had issus', err)
            throw err
        })
    }
// const ENDPOINT = 'spotify'
//     async function query(filterBy) {
//         try {
//             return await httpService.get(ENDPOINT, filterBy)
//         } catch {
//             console.error('cannot load plants')
//         }
//     }