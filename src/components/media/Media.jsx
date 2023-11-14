import React from "react";
import Video from "./video/Video";

const Media = () => {
  return (
    <div className="flex flex-col space-y-4 my-10 w-[990px]">
      <div className="flex">
        <Video url="https://www.youtube.com/watch?v=LXb3EKWsInQ" week={1} />
        <Video url="https://www.youtube.com/watch?v=LXb3EKWsInQ" week={2} />
      </div>

      <div className="flex">
        <Video url="https://www.youtube.com/watch?v=LXb3EKWsInQ" week={3} />
        <Video url="https://www.youtube.com/watch?v=LXb3EKWsInQ" week={4} />
      </div>
    </div>
  );
};

export default Media;
