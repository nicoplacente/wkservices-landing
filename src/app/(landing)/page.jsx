import AboutUs from "./sections/about-us";
import CreateReviews from "./sections/create-reviews";
import Hero from "./sections/hero";
import Reviews from "./sections/reviews";
import WhyChooseUs from "./sections/why-choose-us";
import Services from "./sections/services";

export default function Home() {
  return (
    <main className="max-w-full text-gray-900 selection:bg-green-200">
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Services />
      <Reviews />
      <CreateReviews />
    </main>
  );
}
