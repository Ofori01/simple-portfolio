import React from 'react'

const Link = ({url, title}) => {
  return (
    <a href={url} target = '_blank' rel = 'noopener noreferrer'>
        {title}
    </a>
  )
}

export default Link
