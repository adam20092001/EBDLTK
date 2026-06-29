import { Benefits } from "@/components/Benefits";
import { FeaturedDishes } from "@/components/FeaturedDishes";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { ReservationForm } from "@/components/ReservationForm";
import { SocialLinks } from "@/components/SocialLinks";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <FeaturedDishes />
        <ReservationForm />
        <Location />
        <SocialLinks />
      </main>
      <Footer />
    </>
  );
}
