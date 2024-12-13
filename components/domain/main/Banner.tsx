"use client";

import { BannerType } from "@/types/banner";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import ChevronLeft from "@/assets/icons/chevron-left.svg";
import ChevronRight from "@/assets/icons/chevron-right.svg";
import { useRouter } from "next/navigation";
import Skeleton from "@/components/common/Skeleton";

//lazy loading 빼고 로딩이나 스켈레톤이미지
const Banner = ({ banners }: { banners: BannerType[] }) => {
  if (banners.length <= 0) return;

  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      created() {
        setIsLoading(false);
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

  return (
    <div className="relative h-48 w-full">
      <div ref={sliderRef} className="keen-slider">
        {banners.map((banner, idx) => (
          <div
            key={idx}
            className={`keen-slider__slide number-slide${idx + 1}`}
          >
            {isLoading && <Skeleton w={"full"} h={48} />}
            {!isLoading && (
              <img
                className="cursor-pointer rounded-xl"
                src={banner.imageUrl}
                onClick={() => banner.href && router.push(banner.href)}
              />
            )}
          </div>
        ))}
      </div>
      {instanceRef.current && (
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
