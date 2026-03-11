import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Form from '@/components/Form';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Problem />
      <Features />
      <Pricing />
      <Form />
      <CTA />
      <Footer />
    </main>
  );
}
