import { React, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Card, Col, Row, Button, Text,
} from '@nextui-org/react';
import axios from 'axios';
import moment from 'moment';

function CoverEntry({ value, key }) {
  return (
    <div className="card">
      <Card css={{ w: '350px' }}>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={value.cover}
            width="100%"
            height="100%"
            objectFit="cover"
            alt="Card example background"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: 'absolute',
            bgBlur: '#ffffff66',
            borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
            bottom: 0,
            zIndex: 1,
          }}
          style={{
            height: '55px',
          }}
        >
          <Row>
            <Col>
              <Text color="#000" size={12}>
                {value.city}
                ,
                {' '}
                {value.admin}
                ,
                {' '}
                {value.country}
              </Text>
              <Text color="#000" size={12}>
                {value.date}
              </Text>
              <Text color="#000" size={12}>
                {value.user_name}
              </Text>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
}

function Community() {
  const [searchParams] = useSearchParams();
  const [photoArr, setPhotoArr] = useState([]);
  let city = null;
  let year = null;
  let text = 'Album ';
  console.log(searchParams.get('city'));
  if (searchParams.get('name')) {
    text += ` in ${searchParams.get('name')}`;
    city = searchParams.get('city');
  }
  if (searchParams.get('year')) {
    text += ` in ${searchParams.get('year')}`;
    year = searchParams.get('year');
  }

  useEffect(() => {
    axios.get('/api/community/album', { params: { city, year } })
      .then((res) => {
        console.log('res', res.data);
        const arr = res.data.map((ele) => (
          {
            cover: ele.cover,
            date: moment(ele._date).utc().format('YYYY-MM-DD'),
            city: ele.city,
            admin: ele.admin_name,
            country: ele.country,
            user_name:ele.user_name,
            id: ele.id,
          }
        ));
        console.log(arr);
        setPhotoArr(arr);
      });
  }, [city, year]);
  return (
    <div>
      <p>
        {text}
      </p>
      <div className="album">
        {photoArr.map((ele, index) => (
          <CoverEntry value={ele} key={index} />
        ))}
      </div>
    </div>

  );
}
export default Community;
