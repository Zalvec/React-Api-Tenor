import React from 'react'

export default function Gif(props) {
    return(
        <div className='flex-container'>
            {
                props.data.map( gif => 
                    <a href={gif.media[0].gif.url} target='_blank' rel="noopener noreferrer">
                        <img key={gif.created} src={gif.media[0].gif.url} className='flex-item' alt=''/>
                    </a> )
            }
        </div>
    )
}