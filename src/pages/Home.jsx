import { useEffect, useState,useSelector } from "react"
import { YonifyPlaylistsList } from "../cmps/YonifyPlaylistsList"
import { songsService } from "../services/songsService";


export const Home=()=> {
  const [songs,setSongs] = useState(null)
  useEffect( ()=>{

    let prmSong= songsService.query()
    prmSong.then(res=>setSongs(res))
    console.log(prmSong)

  },[]);

  const hello=() => {
    console.log(songs)
  }
  // let { songs } = useSelector(state =>state.songs)
  if (!songs) return <div>Loading...</div>
  return (
    <section className='home grid-item-3'>
      {hello()}
      <YonifyPlaylistsList songs={songs.items}></YonifyPlaylistsList>

    
    </section>
    // <section className='home'>
  
    //             <section className='yonify-playlists'>
    //         <a href="">Yonify Playlist</a>
    //     </section>

    //     <section className='focus'>
    //         <a href="">Focus</a>
    //     </section>

    //     <section className='mood'>
    //         <a href="">Mood</a>
    //     </section>

    //     <section className='new-releases'>
    //         <a href="">Popular New Releases</a>
    //     </section>
    // </section> 
    
    )
}
