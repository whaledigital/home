import Img from 'gatsby-image';
import React from 'react';

import {
  ContentfulGallery,
} from 'src/graphql-types';

import s from './Gallery.module.scss';

interface GalleryProps {
  gallery: ContentfulGallery;
}

const Gallery = (props: GalleryProps) => (
  <div className={s.gallery}>
    <div className={s.gallery__area}>
      <div className={s.gallery__areaContainer}>
        <div className={s.gallery__areaGrid}>
          {props.gallery.media.map(media => (
            <div key={media.id} className={s.gallery__areaGridCell}>
              <Img fluid={media.fluid} className={s.gallery__areaGridCellImage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
