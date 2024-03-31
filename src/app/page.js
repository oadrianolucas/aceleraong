import Footer from "./components/footer";
import Nav from "./components/nav";
import Section from "./components/section";
import SectionFive from "./components/sectionFive";
import SectionFor from "./components/sectionFor";
import SectionThree from "./components/sectionThree";
import SectionTwo from "./components/sectionTwo";

export default function Home() {
  return (
    <main>
      <Nav />
      <Section />
      <SectionTwo />
      <SectionFor />
      <SectionThree />
      <SectionFive />
      <Footer />
    </main>
  );
}
