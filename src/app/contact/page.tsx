import Hero from '@/components/contact/Hero';
import ContactForm from '@/components/contact/ContactForm';
import InfoSidebar from '@/components/contact/InfoSidebar';
import FAQSection from '@/components/contact/FAQSection';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Hero />
      
      {/* Contact Form & Sidebar Section */}
      <section className="py-12 lg:py-16 bg-[#FAFAFA]">
        <div className="container-app">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <InfoSidebar />
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FAQSection />
    </main>
  );
}
