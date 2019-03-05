import { graphql } from 'gatsby';
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import { ContentfulOffice } from 'src/graphql-types';

import s from './OfficeMap.module.scss';

const defaultProps = {
  styles: [
    {
      elementType: 'geometry',
      stylers: [{ color: '#1d2c4d' }],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [{ color: '#8ec3b9' }],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#1a3646' }],
    },
    {
      elementType: 'geometry.stroke',
      featureType: 'administrative.country',
      stylers: [{ color: '#4b6878' }],
    },
    {
      elementType: 'labels.text.fill',
      featureType: 'administrative.land_parcel',
      stylers: [{ color: '#64779e' }],
    },
    {
      elementType: 'geometry.stroke',
      featureType: 'administrative.province',
      stylers: [{ color: '#4b6878' }],
    },
    {
      elementType: 'geometry.stroke',
      featureType: 'landscape.man_made',
      stylers: [{ color: '#334e87' }],
    },
    {
      elementType: 'geometry',
      featureType: 'landscape.natural',
      stylers: [{ color: '#023e58' }],
    },
    {
      elementType: 'geometry',
      featureType: 'poi',
      stylers: [{ color: '#283d6a' }],
    },
    {
      elementType: 'labels.text.fill',
      featureType: 'poi',
      stylers: [{ color: '#6f9ba5' }],
    },
    {
      elementType: 'labels.text.stroke',
      featureType: 'poi',
      stylers: [{ color: '#1d2c4d' }],
    },
    {
      elementType: 'geometry.fill',
      featureType: 'poi.park',
      stylers: [{ color: '#023e58' }],
    },
    {
      elementType: 'labels.text.fill',
      featureType: 'poi.park',
      stylers: [{ color: '#3C7680' }],
    },
    {
      elementType: 'geometry',
      featureType: 'road',
      stylers: [{ color: '#304a7d' }],
    },
    {
      elementType: 'labels.text.fill',
      featureType: 'road',
      stylers: [{ color: '#98a5be' }],
    },
    {
      elementType: 'labels.text.stroke',
      featureType: 'road',
      stylers: [{ color: '#1d2c4d' }],
    },
    {
      elementType: 'geometry',
      featureType: 'road.highway',
      stylers: [{ color: '#2c6675' }],
    },
    {
      elementType: 'geometry.stroke',
      featureType: 'road.highway',
      stylers: [{ color: '#255763' }],
    },
    {
      elementType: 'labels.text.fill',
      featureType: 'road.highway',
      stylers: [{ color: '#b0d5ce' }],
    },
    {
      elementType: 'labels.text.stroke',
      featureType: 'road.highway',
      stylers: [{ color: '#023e58' }],
    },
    {
      elementType: 'labels.text.fill',
      featureType: 'transit',
      stylers: [{ color: '#98a5be' }],
    },
    {
      elementType: 'labels.text.stroke',
      featureType: 'transit',
      stylers: [{ color: '#1d2c4d' }],
    },
    {
      elementType: 'geometry.fill',
      featureType: 'transit.line',
      stylers: [{ color: '#283d6a' }],
    },
    {
      elementType: 'geometry',
      featureType: 'transit.station',
      stylers: [{ color: '#3a4762' }],
    },
    {
      elementType: 'geometry',
      featureType: 'water',
      stylers: [{ color: '#0e0f21' }],
    },
    {
      elementType: 'labels.text.fill',
      featureType: 'water',
      stylers: [{ color: '#4e6d70' }],
    },
  ],
};

const key = process.env.GOOGLE_MAPS_API_KEY;

const Pin = (props: any) => (
  <div>
    {React.createElement(require(`assets/svg/pin.svg`))}
  </div>
);

interface MapProps {
  items: ContentfulOffice[];
}

const OfficeMap = (props: MapProps) => {
  if (!props.items) return null;

  const [map, updateMap] = useState({ lat: props.items[0].map.lat, lng: props.items[0].map.lon });

  return (
    <div className={s.map}>
      <div className={s.map__holder}>
        <div className={s.map__holderSticky}>
          <GoogleMapReact
            bootstrapURLKeys={{ key }}
            center={map}
            zoom={14}
            options={{
              styles: defaultProps.styles,
            }}
          >
            <Pin {...map} />
          </GoogleMapReact>
        </div>
      </div>
      <div className={s.map__offices}>
        <ul className={s.map__offices__list}>
          {props.items.map((office) => {
            const onOfficeClick = () => updateMap({ lat: office.map.lat, lng: office.map.lon });
            return (
              <li key={office.id}>
                <div className={s.map__offices__listPoint} />
                <div className={s.map__offices__listItem} onClick={onOfficeClick}>
                  <div className={s.map__offices__listItemTitle}>{office.title}</div>
                  <div className={s.map__offices__listItemAddress}>{office.address}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default OfficeMap;

export const officeQuery = graphql`
  fragment OfficeFragment on ContentfulOffice {
    id
    slug
    title
    address
    map { lat lon }
  }
`;
