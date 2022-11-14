import { YonifyPlaylistsPreview } from "./YonifyPlaylistsPreview";


export function YonifyPlaylistsList({songs}) {
  console.log(songs)
  return (
    <section className="yonify-playlists">
        <div className="upper-btns flex">
        <a className="left-btn" href="">Yonify Playlists</a>
        <a className="right-btn" href="">See All</a>  
        </div>
        <section className="songs flex">{songs.map(song=>
          <YonifyPlaylistsPreview song={song} key={song.id.videoId}></YonifyPlaylistsPreview>
          )}

        </section>
        </section>
  )
}
