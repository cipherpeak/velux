import React from "react";
import { Compare } from "../../components/ui/compare";
import first from "../../assets/servicePage/car-window-shield-060220210503.jpg"
import second from "../../assets/servicePage/car-wrapping-with-foil-car-service (4).jpg"

export function CompareDemo() {
  return (
    <div className="w-full max-w-full px-4">
      <Compare
        firstImage={first}
        secondImage={second}
        firstImageClassName="object-cover object-center"
        secondImageClassname="object-cover object-center"
        className="h-[250px] w-full max-w-full sm:h-[350px] md:h-[400px] lg:h-[500px]"
        slideMode="hover"
      />
    </div>
  );
}