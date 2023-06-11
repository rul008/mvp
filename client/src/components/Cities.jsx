import { React } from 'react';

function Cities() {
  const citylist = ['Shanghai', 'Beijing', 'Guangzhou'];
  return (
    <ul>
      {citylist.map((city) => (
        <li><p>{city}</p></li>
      ))}
    </ul>
  );
}
export default Cities;
