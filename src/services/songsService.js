// import { storageService } from './storageService.js'
// import { makeId } from './utilService.js'
import axios from 'axios'
// const STORAGE_KEY = 'robots'

export const songsService = {
    query,

}
const YT_KEY='AIzaSyD9NhrbLlxuCoYC74C6-rl6Lj5J2eeOir4';
async function query(filterBy) {
        return await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YT_KEY}&q=${filterBy}`)
        .then(res => res.data)
        .catch(err => {
            console.log('had issus', err)
            throw err
        })
    }
