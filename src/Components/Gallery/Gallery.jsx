import React from 'react'
import gallery from '../../assets/gallery'
import styles from './Gallery.module.scss'
import SimpleReactLightbox from "simple-react-lightbox";

const Gallery = () => {
    const images = gallery.map(imgItem => <img src={imgItem.url} />)
    return (
        <SimpleReactLightbox>
		<div id={styles.photos}>
			{images }
		</div>
		</SimpleReactLightbox>
    )
}

export default Gallery