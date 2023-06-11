import { React, useState, useEffect } from 'react';
import {
  ComposableMap, Geographies, Geography, Marker, ZoomableGroup,
} from 'react-simple-maps';
import { Link } from 'react-router-dom';
import { ReactTooltip } from 'react-tooltip';
import axios from 'axios';

function Circle({ loc, setContent }) {
  const [ifhover, setHover] = useState(false);
  const link = `/album?city=${loc.index}&name=${loc.city}`;
  return (
    <Marker key={loc.coordinates} coordinates={loc.coordinates}>
      <Link to={link}>
        <circle
          className="bulb"
          r={3}
          fill="#F0F382"
          onClick={() => { console.log(loc.city, loc.admin, loc.country); }}
          onMouseEnter={() => {
            setHover(true);
            console.log(ifhover);
            // setContent(loc.city);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        />

      </Link>

      {ifhover && (

      <text stroke="#F0F382" style={{ fontSize: '10px' }}>
        {loc.city}
        ,
        {' '}
        {loc.admin}
        ,
        {' '}
        {loc.country}
      </text>

      )}
    </Marker>
  );
}

function Map() {
  const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';
  const [content, setContent] = useState("");
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    axios.get('/api/cities', { params: { user_id: 5 } })
      .then((res) => {
        const arr = res.data.map((ele) => ({
          index: ele.index,
          city: ele.city,
          coordinates: [ele.lng, ele.lat],
          admin: ele.admin_name ? ele.admin_name : ele.city,
          country: ele.country,
          markerOffset: -15,
        }));
        console.log(arr);
        setMarkers(arr);
      });
  }, []);

  const color = ['#95DBEA', '#A1DCE8', '#65CDE2'];
  return (
    <div>
      {/* <ReactTooltip>{content}</ReactTooltip> */}
      <div>
        <ComposableMap data-tip="" style={{ background: '#CCE5EA' }}>
          <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl}>
              { ({ geographies }) => geographies.map((geo) => {
                const index = Math.floor(Math.random() * 3);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={color[index]}
                    stroke={color[index]}
                  />
                );
              })}
            </Geographies>
            {markers.map((loc) => (<Circle loc={loc} setContent={setContent} />))}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>

  );
}

export default Map;
