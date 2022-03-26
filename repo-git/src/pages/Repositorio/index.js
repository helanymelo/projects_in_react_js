import React from 'react'

function Repositorio({match}) {
  return (
    <h1 style={{color:'#FFF'}}>
    REPO
    {match.params.repositorio}
    </h1>
    
  )
}

export default Repositorio