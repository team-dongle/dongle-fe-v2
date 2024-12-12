"use client";

import { BannerType } from "@/types/banner";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import ChevronLeft from "@/assets/icons/chevron-left.svg";
import ChevronRight from "@/assets/icons/chevron-right.svg";

const Banner = ({ banners }: { banners: BannerType[] }) => {
  const [loaded, setLoaded] = useState<boolean[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      animationEnded(s) {
        setCurrentSlide(s.track.details.rel);
      },
      created() {
        setLoaded([true]);
      },
      loop: true,
      initial: 0,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver || !slider || slider.slides.length == 1) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3500);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );

  useEffect(() => {
    const new_loaded = [...loaded];
    new_loaded[currentSlide] = true;
    setLoaded(new_loaded);
  }, [currentSlide]);

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {banners.map((banner, idx) => (
          <div key={idx} className="keen-slider__slide lazy__slide">
            <img
              className="rounded-xl"
              src={loaded[idx] ? banner.imageUrl : undefined}
            />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <>
          <button
            className="absolute left-4 top-1/2 px-3"
            onClick={(e) => e.stopPropagation || instanceRef.current?.prev()}
          >
            <ChevronLeft />
          </button>
          <button
            className="absolute right-4 top-1/2 px-3"
            onClick={(e) => e.stopPropagation || instanceRef.current?.next()}
          >
            <ChevronRight />
          </button>
        </>
      )}
    </div>
  );
};

export default Banner;
