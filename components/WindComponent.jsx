import { getWindData } from "@/lib/weather-info";
import Card from "./Card";
import Image from "next/image";

const WindComponent = async ({ lat, lon }) => {
  const { speed, deg } = await getWindData(lat, lon);
  return (
    <Card>
      <h6 class="feature-name">Wind</h6>
      <div class="feature-main">
        <Image
          class="max-w-20"
          src="/assets/icons/icon_wind.png"
          alt="rain icon"
          width={80}
          height={80}
        />
        <h3 className="feature-title">{speed} meter/sec</h3>
        <span className="feature-name">{deg} degrees</span>
      </div>
    </Card>
  );
};

export default WindComponent;
