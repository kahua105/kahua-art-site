import Hero from "./components/Hero"
import Philosophy from "./components/Philosophy"
import ExperienceOurWorld from "./components/ExperienceOurWorld"
import Services from "./components/Services"
import AIArtShowcase from "./components/AIArtShowcase"
import ClientTestimonials from "./components/ClientTestimonials"
import Timeline from "./components/Timeline"
import ContactForm from "./components/ContactForm"

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <ExperienceOurWorld />
      <div id="services">
        <Services />
      </div>
      <AIArtShowcase />
      <ClientTestimonials />
      <Timeline />
      <div id="contact">
        <ContactForm />
      </div>
    </>
  )
}
