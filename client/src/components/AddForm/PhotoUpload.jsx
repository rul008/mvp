import React from 'react';
import $ from 'jquery';

/* eslint "jsx-a11y/label-has-associated-control":0 */
function PhotoUpload({ inputHandler }) {
  function previewFiles(e) {
    const $preview = $('#preview');
    const $files = $('input[type=file]').prop('files');

    function readAndPreview(file) {
      const url = URL.createObjectURL(file);
      const image = new Image(100, 100);
      image.src = url;
      const $item = $('<li></li>');
      $item.append(image, `<span>${file.name}</span>`);
      $preview.append($item);
      inputHandler(e, url);
    }
    if ($files) {
      Array.prototype.forEach.call($files, readAndPreview);
    }
  }

  return (
    <fieldset className="photo section">
      <legend>Photos</legend>
      <label>
        Upload photos:
      </label>
      <input name="photos" type="file" accept=".png, .jpg, .jpeg" multiple onChange={previewFiles} />
      <ul id="preview" />
    </fieldset>
  );
}

export default PhotoUpload;
