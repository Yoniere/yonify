import React from 'react'

export function YonifyPlaylistsPreview({song}) {
  const hello = ()=> {
    console.log(song)
  }
   const songDescription=(song)=> {
    let newDesc=song.snippet.description
      if (newDesc.length > 50) {
        newDesc=newDesc.substring(0,51)+'...'
        
      } 
      return newDesc
    }

  return (
    <section className='YonifyPlaylistsPreview grid-item'>
      <img className='song-img' src={song.snippet.thumbnails.medium.url} alt="" />
      {hello()}
      <div className='below-img'>
        <h1>{song.snippet.channelTitle}</h1>
        <p>{songDescription(song)}</p>
      </div>
      
      </section>
  )
}
