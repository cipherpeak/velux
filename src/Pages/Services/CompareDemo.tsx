import { Compare } from "../../components/ui/compare";
import first from "../../assets/servicePage/car-window-shield-060220210503.jpg"
import second from "../../assets/servicePage/car-wrapping-with-foil-car-service (4).jpg"

export function CompareDemo() {
  return (
    <div className="w-full max-w-full px-4 relative">
      <Compare
        firstImage={first}
        secondImage={second}
        firstImageClassName="object-cover object-center"
        secondImageClassname="object-cover object-center"
        className="h-[250px] w-full max-w-full sm:h-[350px] md:h-[400px] lg:h-[500px]"
        slideMode="hover"
      />
      
      {/* First Image Heading - Top Left */}
      <div className="absolute top-4 left-4 z-40 bg-gradient-to-r from-secondary/90 to-secondary/70 backdrop-blur-md text-black px-4 py-2 rounded-full border-2 border-white/30 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <h3 className="text-sm font-bold uppercase tracking-wide">Before Service</h3>
        </div>
      </div>
      
      {/* Second Image Heading - Bottom Right */}
      <div className="absolute bottom-4 right-4 z-40 bg-primary backdrop-blur-md text-white px-4 py-2 rounded-full border-2 border-white/30 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <h3 className="text-sm font-bold uppercase tracking-wide">After Service</h3>
        </div>
      </div>
    </div>
  );
}