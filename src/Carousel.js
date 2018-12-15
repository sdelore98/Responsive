import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay infiniteLoop>
    <div>
      <img src="https://i.vimeocdn.com/video/595198868_505x160.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="https://i.vimeocdn.com/video/589972810_530x315.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="https://i.vimeocdn.com/video/590587169_530x315.jpg" />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
);
