import React from "react";
import ReactPlayer from "react-player/youtube";

const Video = (props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ReactPlayer url={props.url} width={props.width} height={props.height} />
      <div className="flex flex-col items-center justify-center px-3 max-w-[430px]">
        <h5 className="my-2 text-green font-bold text-2xl">{props.week} week</h5>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur. A consectetur viverra amet
          amet. Elit in tristique laoreet velit cras.
        </p>
      </div>
    </div>
  );
};

export default Video;
