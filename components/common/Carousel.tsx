"use client";

import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import ChevronLeft from "@/assets/icons/chevron-left.svg";
import ChevronRight from "@/assets/icons/chevron-right.svg";
import Skeleton from "@/components/common/Skeleton";
import { ThumbnailType } from "@/types/file";
import clsx from "clsx";

const Carousel = ({
  Thumbnails,
}: {
  Thumbnails: ThumbnailType[] | string[];
}) => {
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
    slides: { spacing: 10 },
    initial: 0,
  });

  return (
    <div className="relative h-80 w-full">
      <div ref={sliderRef} className="keen-slider">
        <div className="flex overflow-hidden">
          {Thumbnails.map((thumbnail, idx) => (
            <div
              key={idx}
              className={`keen-slider__slide number-slide${idx + 1}`}
            >
              {isLoading && <Skeleton w="full" h={80} />}
              {!isLoading && (
                <img
                  className="h-80 w-full rounded-xl object-cover"
                  src={typeof thumbnail == "string" ? thumbnail : thumbnail.url}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {instanceRef.current && (
        <>
          <button
            className={clsx(
              "absolute left-4 top-1/2 px-3",
              currentSlide === 0 && "hidden",
            )}
            onClick={() => instanceRef.current?.prev()}
          >
            <ChevronLeft />
          </button>
          <button
            className={clsx(
              "absolute right-4 top-1/2 px-3",
              currentSlide ===
                instanceRef.current.track.details.slides.length - 1 && "hidden",
            )}
            onClick={() => instanceRef.current?.next()}
          >
            <ChevronRight />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
