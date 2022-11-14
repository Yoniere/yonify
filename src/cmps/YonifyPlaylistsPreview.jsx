import React from 'react'

export function YonifyPlaylistsPreview({song}) {
  const hello = ()=> {
    console.log(song)
  }
  return (
    <section className='YonifyPlaylistsPreview grid-item'>
      <img src={song.snippet.thumbnails.default.url} alt="" />
      {hello()}
      <h1>{song.snippet.channelTitle}</h1>
      <p>{song.snippet.description}</p>
      
      </section>
  )
}
