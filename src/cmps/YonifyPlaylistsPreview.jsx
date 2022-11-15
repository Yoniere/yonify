import React from 'react'

export function YonifyPlaylistsPreview({song}) {
  const hello = ()=> {
    console.log(song)
  }
  return (
    <section className='YonifyPlaylistsPreview grid-item'>
      <img className='song-img' src={song.snippet.thumbnails.default.url} alt="" />
      {hello()}
      <div className='below-img'>
        <h1>{song.snippet.channelTitle}</h1>
        <p>{song.snippet.description}</p>
      </div>
      
      </section>
  )
}
