import AboutUs from "./component/about-us/aboutus.component";
import OurClients from "./component/clients/clients.component";
import OurPartnersGallery from "./component/partners/partners.component";
import AutoPlaySlider from "./component/slider/slider.component";

export default function Home() {
  return (
    <>
      <AutoPlaySlider />
      <AboutUs />
      <OurPartnersGallery />
      <OurClients />
    </>
  );
}
