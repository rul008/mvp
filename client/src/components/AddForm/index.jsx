import { React, useState } from 'react';
import $ from 'jquery';
import axios from 'axios';

import PhotoUpload from './PhotoUpload';

function AddForm() {
  const [reviewObj, setReviewObj] = useState({
    rating: '',
    summary: '',
    body: '',
    recommend: '',
    name: '',
    email: '',
    photos: [],
    characteristics: '',
  });

  function inputHandler(e, url) {
    if (e.target.name === 'photos') {
      setReviewObj({ ...reviewObj, photos: reviewObj.photos.concat(url) });
    }
  }

  // function submitHandler(e) {
  //   e.preventDefault();
  //   if (dataValidation()) {
  //     modalHandler();
  //     axios.post('/reviews', reviewObj)
  //       .then((result) => {
  //         console.log(result.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }

  // function closeHandler() {
  //   modalHandler();
  // }

  return (
    <div className="modal">
      <form id="review-form">
        <h1>Choose a cover photo</h1>
        <fieldset className="review section">
          <div className="summary subsection">
            <label>
              Summary
            </label>
            {/* <textarea name="summary" maxLength={60} placeholder="Best purchase ever!" rows={1} cols={60} value={reviewObj.summary} onChange={inputHandler}></textarea> */}
          </div>
        </fieldset>
        <PhotoUpload inputHandler={inputHandler} />
        <button id="submit-form" type="submit">Submit</button>
        <button id="close-form" type="button">X</button>
      </form>
    </div>
  );
}

export default AddForm;
