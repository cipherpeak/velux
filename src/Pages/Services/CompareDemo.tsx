import React from "react";
import { Compare } from "../../components/ui/compare";
import first from "../../assets/servicePage/car-window-shield-060220210503.jpg"
import second from "../../assets/servicePage/car-wrapping-with-foil-car-service (4).jpg"

export function CompareDemo() {
  return (
    <div className="p-4 px-4">
      <Compare
        firstImage={first}
        secondImage={second}
        firstImageClassName="object-cover object-center"
        secondImageClassname="object-cover object-center"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}
