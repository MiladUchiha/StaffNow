'use client'

import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const FancyVideoFive = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 order-lg-last">
          <div className="text-wrapper pt-0">
            <div className="title-style-two mb-35 md-mb-20">
              <h2>
                <span>
                  Service we offer is{" "}
                  <Image  width="448" height="48" src="/images/shape/line-shape-5.svg" alt="icon" />
                </span>
                specifically designed to meet your needs.
              </h2>
            </div>
            {/* <!-- /.title-style-two --> */}
            <p>
              With Benefits from deski Pro, Earn rewards & Score discounts on
              purchases* Foryourself and your customers.
            </p>
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-md-12 order-lg-first">
          <div className="video-box">
            <Image width={490} height={470} style={{height:'fit-content'}}     className="w-100" src="/images/media/img_110.png" alt="media" />
            <div
              onClick={() => setOpen(true)}
              className="fancybox video-button d-flex align-items-center justify-content-center"
            >
              <Image  width="27" height="33"  src="/images/icon/170.svg" alt="icon" />
            </div>
          </div>
          {/* <!-- /.video-box --> */}
        </div>
      </div>
    </>
  );
};

export default FancyVideoFive;
