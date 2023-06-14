import { React, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Card, Col, Row, Button, Text,
} from '@nextui-org/react';
import FlipPage from 'react-flip-page';
import axios from 'axios';

function Photos({ id }) {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    axios.get('/api/albumDetail', {
      params: { id },
    }).then(
      (res) => {
        setArr(res.data);
        console.log(res.data);
      },
    );
  }, [id]);
  return (
    <div className="Model">
      <div className="book">
        <FlipPage
          className="book"
          uncutPages
          orientation="horizontal"
          width={700}
          height={700}
          pageBackground="#F0E2DF"
          animationDuration="400"
        >
          {arr.map((obj) => (
            <article style={{ width: '700px ', padding: '10px 20px' }}>
              <img src={obj.photo_url} alt="pj" width="670px" />
              <Text color="midnightblue">{obj.comment}</Text>
            </article>
          ))}
        </FlipPage>

      </div>

    </div>

  );
}
export default Photos;
