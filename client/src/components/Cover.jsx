import { React, useState } from 'react';

function Cover() {
  const url = require('/Users/ruojialiu/Desktop/HRProject/mvpProject/UnrulyEnchantedFalcon-size_restricted.gif')
  setTimeout("location.href ='/';", 3000);
  return (
  <img className="cover" src={url} />);
}
export default Cover;
