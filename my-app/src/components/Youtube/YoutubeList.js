import React from "react";
import { YoutubeData } from "../../models/data";
import YoutubeFeature from "./YoutubeFeature";

const YoutubeList = () => {
  return (
    <div className="wrapper">
      {YoutubeData.map((item, index) => (
        <YoutubeFeature
          key={item.id}
          image={item.image}
          authorImg={item.authorImg}
          title={item.title}
          author={item.author}
          className={index === 1 ? "active" : "disabled"}
        />
      ))}
    </div>
  );
};

export default YoutubeList;
