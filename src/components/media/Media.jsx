import React, { useState } from "react";
import Video from "./video/Video";
import clsx from "clsx";
import { ReactComponent as ArrowDown } from "./assets/arrowDown.svg";
import useWindowDimensions from "./helpers";

const Media = () => {
  if (useWindowDimensions().width < 1024) {
    return <MobileMedia />;
  } else {
    return (
      <div className="content-wrapper mx-auto">
        <div className="space-y-4 my-10 w-full flex flex-col justify-center items-center">
          <div className="flex space-x-6">
            <Video
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              week={1}
              width={430}
              height={242}
            />
            <Video
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              week={2}
              width={430}
              height={242}
            />
          </div>

          <div className="flex space-x-6">
            <Video
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              week={3}
              width={430}
              height={242}
            />
            <Video
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              week={4}
              width={430}
              height={242}
            />
          </div>
        </div>
      </div>
    );
  }
};

const MobileMedia = () => {
  const [weeks, setWeeks] = useState([true, false, false, false]);

  return (
    <div className="content-wrapper mx-auto flex flex-col space-y-2">
      <button
        className="w-full"
        onClick={() => setWeeks([!weeks[0], false, false, false])}
      >
        <div className="flex justify-between items-center border-t-2 border-green">
          <h5 className="my-2 text-green font-bold text-2xl text-[18px]">
            1 week
          </h5>
          <ArrowDown className={clsx("shrink-0", weeks[0] && "rotate-180")} />
        </div>
        {weeks[0] && (
          <Video
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            week={1}
            width={355}
            height={200}
          />
        )}
      </button>
      <button
        className="w-full"
        onClick={() => setWeeks([false, !weeks[1], false, false])}
      >
        <div className="flex justify-between items-center border-t-2 border-green">
          <h5 className="my-2 text-green font-bold text-2xl text-[18px]">
            2 week
          </h5>
          <ArrowDown className={clsx("shrink-0", weeks[1] && "rotate-180")} />
        </div>
        {weeks[1] && (
          <Video
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            week={2}
            width={355}
            height={200}
          />
        )}
      </button>
      <button
        className="w-full"
        onClick={() => setWeeks([false, false, !weeks[2], false])}
      >
        <div className="flex justify-between items-center border-t-2 border-green">
          <h5 className="my-2 text-green font-bold text-2xl text-[18px]">
            3 week
          </h5>
          <ArrowDown className={clsx("shrink-0", weeks[2] && "rotate-180")} />
        </div>
        {weeks[2] && (
          <Video
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            week={3}
            width={355}
            height={200}
          />
        )}
      </button>
      <button
        className="w-full"
        onClick={() => setWeeks([false, false, false, !weeks[3]])}
      >
        <div className="flex justify-between items-center border-t-2 border-green">
          <h5 className="my-2 text-green font-bold text-2xl text-[18px]">
            4 week
          </h5>
          <ArrowDown className={clsx("shrink-0", weeks[3] && "rotate-180")} />
        </div>
        {weeks[3] && (
          <Video
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            week={4}
            width={355}
            height={200}
          />
        )}
      </button>
    </div>
  );
};

export default Media;
