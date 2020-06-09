import React from 'react'
import gallery from '../../assets/gallery'
import styles from './Gallery.module.scss'
import { SRLWrapper } from "simple-react-lightbox"



const Gallery = () => {
    const images = gallery.map(imgItem => <img src={imgItem.url} />)
    return (


        <div id = { styles.photos }>
        <SRLWrapper>
        	{images }
        	</SRLWrapper>
        </div>

    )
}

export default Gallery