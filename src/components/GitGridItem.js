import React from 'react'

export const GitGridItem = ({ title,url }) => {

  return (
    <div className='animate__animated cardanimate__fadeIn'>
       <img src={ url } alt= { title } />
       <p> { title }</p>
    </div>
  )
}

