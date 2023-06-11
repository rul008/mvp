import { React, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Card, Col, Row, Button, Text,
} from '@nextui-org/react';

function CityList({ list }) {
  return (
    <ol>
      {list.map((city) => (
        <li>
          <Text>
            {city.city}
            ,
            {' '}
            {city.admin}
            ,
            {' '}
            {city.country}
          </Text>

        </li>
      ))}
    </ol>
  );
}

function Community() {
  return (
    <div>Community</div>
  );
}
export default Community;
