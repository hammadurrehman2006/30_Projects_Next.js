import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import WeatherWidget from "@/components/weather-widget";
export default function Home() {
  return ( 
    <>
    <Navbar/>
<WeatherWidget />
    <Footer/>
    </>
  );
}
