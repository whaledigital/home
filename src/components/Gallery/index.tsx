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
            <div className={s.gallery__areaGridCell}>
              <div
                className={s.gallery__areaGridCellImage}
                style={{ backgroundImage: `url(${media.fluid.src})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
