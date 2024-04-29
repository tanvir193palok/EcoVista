import LocationFinder from "@/components/LocationFinder";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <LocationFinder />
    </Suspense>
  );
}
