"use client";

import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import ChevronLeft from "@/assets/icons/chevron-left.svg";
import ChevronRight from "@/assets/icons/chevron-right.svg";
import Skeleton from "@/components/common/Skeleton";
import { ThumbnailType } from "@/types/file";
import clsx from "clsx";

//lazy loading 빼고 로딩이나 스켈레톤이미지
const Thumbnail = ({ Thumbnails }: { Thumbnails: ThumbnailType[] }) => {
  if (Thumbnails.length <= 0) return;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setIsLoading(false);
    },
    initial: 0,
  });

  return (
    <div className="relative h-80 w-full">
      <div ref={sliderRef} className="keen-slider">
        {Thumbnails.map((thumbnail, idx) => (
          <div
            key={idx}
            className={`keen-slider__slide number-slide${idx + 1}`}
          >
            {isLoading && <Skeleton w={"full"} h={80} />}
            {!isLoading && (
              <img
                className="h-80 w-full rounded-xl object-cover"
                src={thumbnail.url}
              />
            )}
          </div>
        ))}
      </div>
      {instanceRef.current && (
        <>
          <button
            className={clsx(
              "absolute left-4 top-1/2 px-3",
              currentSlide === 0 && "hidden",
            )}
            onClick={(e) => e.stopPropagation || instanceRef.current?.prev()}
          >
            <ChevronLeft />
          </button>
          <button
            className={clsx(
              "absolute left-4 top-1/2 px-3",
              currentSlide ===
                instanceRef.current.track.details.slides.length - 1 && "hidden",
            )}
            onClick={(e) => e.stopPropagation || instanceRef.current?.next()}
          >
            <ChevronRight />
          </button>
        </>
      )}
    </div>
  );
};

export default Thumbnail;
