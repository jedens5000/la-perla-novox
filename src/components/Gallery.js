import React from "react";
import img01 from "../../src/images/image-01.jpg";
import img02 from "../../src/images/image-02.jpg";
import img03 from "../../src/images/image-03.jpg";
import img04 from "../../src/images/image-04.jpg";
import img05 from "../../src/images/image-05.jpg";
import img06 from "../../src/images/image-06.jpg";
import img07 from "../../src/images/image-07.jpg";
import img08 from "../../src/images/image-08.jpg";
import img09 from "../../src/images/image-09.jpg";
import img10 from "../../src/images/image-10.jpg";
import img11 from "../../src/images/image-11.jpg";
import img12 from "../../src/images/image-12.jpg";
import img13 from "../../src/images/image-13.jpg";
import img14 from "../../src/images/image-14.jpg";
import img15 from "../../src/images/image-15.jpg";
import img00 from "../../src/images/image-00.jpg";
import img16 from "../../src/images/image-16.jpg";
import img17 from "../../src/images/image-17.jpg";

export default function Gallery() {
  const insideImg = [img00, img16, img17];
  const insideCaptions = ["ImageCaption00", "ImageCaption16", "ImageCaption17"];
  const images = [
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
    img09,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ];
  const imgCaptions = [
    "ImageCaption01",
    "ImageCaption02",
    "ImageCaption03",
    "ImageCaption04",
    "ImageCaption05",
    "ImageCaption06",
    "ImageCaption07",
    "ImageCaption08",
    "ImageCaption09",
    "ImageCaption10",
    "ImageCaption11",
    "ImageCaption12",
    "ImageCaption13",
    "ImageCaption14",
    "ImageCaption15",
  ];

  return (
    <div id="gallery">
      <h1>Inside the Restaurant</h1>
      {chunk(insideImg, 3).map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((insideImg, columnIndex) => (
            <div key={insideImg} className="column">
              <img
                src={insideImg}
                alt={insideCaptions[rowIndex * 4 + columnIndex]}
              />
              <p>{insideCaptions[rowIndex * 4 + columnIndex]}</p>
            </div>
          ))}
        </div>
      ))}

      <h1>Gallery of Food</h1>
      {chunk(images, 4).map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((image, columnIndex) => (
            <div key={image} className="column">
              <img src={image} alt={imgCaptions[rowIndex * 4 + columnIndex]} />
              <p>{imgCaptions[rowIndex * 4 + columnIndex]}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function chunk(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}
