import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sbnProfile, sbnProducts, sbnServices } from '../data/sbn_data';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SectionEyebrow } from '../components/ui/SectionEyebrow';
import { IconBadge } from '../components/ui/IconBadge';
import { NetworkNodeGraphic } from '../components/ui/NetworkNodeGraphic';
import { ArrowRight, CheckCircle2, ShieldCheck, MessageCircle } from 'lucide-react';

export function Home() {
  const getWhatsAppLink = (categoryName: string) => {
    const message = `Hello CIS Tech Solutions, I am interested in your ${categoryName} hardware listings. Please share available models, pre-owned stock, and price details.`;
    return `https://wa.me/91${sbnProfile.whatsapp}?text=${encodeURIComponent(message)}`;
  };
  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden border-b border-border-green/20">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.png"
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-5" />

        {/* Interactive Network Node Graphic Animation */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 h-full z-10 opacity-40 lg:opacity-100 pointer-events-none lg:pointer-events-auto">
          <NetworkNodeGraphic nodeCount={55} />
        </div>

        <Container className="relative z-20 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col max-w-xl"
            >
              <SectionEyebrow>{sbnProfile.hero.label}</SectionEyebrow>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-dark-text leading-[1.1] mb-6 tracking-[-0.03em]">
                {sbnProfile.hero.heading.split('With')[0]}
                <span className="text-primary-green relative">
                  With{sbnProfile.hero.heading.split('With')[1]}
                </span>
              </h1>
              <p className="font-sans text-base md:text-lg text-body-text leading-relaxed mb-8">
                {sbnProfile.hero.sub}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="primary" className="shadow-lg hover:shadow-[0_10px_25px_rgba(0,106,47,0.25)]">
                    Get a Consultation
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="secondary">Browse Hardware</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 2. Trust Strip */}
      <section className="bg-soft-bg border-b border-border-green/25 py-8 overflow-hidden">
        <Container>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            {sbnProfile.trustStrip.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 shrink-0 font-mono text-[10px] sm:text-xs font-bold text-dark-text uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary-green" />
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. About Summary */}
      <section className="py-20 bg-white border-b border-border-green/20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[320px] sm:h-[400px] rounded-[12px] overflow-hidden border border-border-green/50 shadow-premium-green"
            >
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
                alt="Networking Equipment Stocks"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <SectionEyebrow>About Sourcing & Supply</SectionEyebrow>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-text mb-6">
                {sbnProfile.about.heading}
              </h2>
              <p className="font-sans text-body-text leading-relaxed mb-6">
                {sbnProfile.about.body}
              </p>
              
              {/* Features bullets */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {sbnProfile.about.range.slice(0, 6).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-dark-text font-semibold">
                    <CheckCircle2 size={16} className="text-primary-green" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Link to="/about">
                  <Button variant="primary">Learn More About Us</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 4. Products Categories Grid */}
      <section className="py-20 bg-soft-bg border-b border-border-green/20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionEyebrow>Hardware Inventory</SectionEyebrow>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-text mt-2">
              Browse Our Networking Hardware Products
            </h2>
            <p className="font-sans text-body-text leading-relaxed mt-4">
              Explore our range of router, switch, transceiver, and server nodes. We maintain full hardware stocks for immediate dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sbnProducts.slice(0, 3).map((prod, idx) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="group h-full flex flex-col justify-between hover:border-primary-green p-0 overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <div className="relative h-[220px] w-full overflow-hidden bg-gray-100 border-b border-border-green/20">
                    <img
                      src={prod.imageUrl}
                      alt={prod.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 z-20">
                      <IconBadge name={prod.iconName} size="sm" />
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-dark-text group-hover:text-primary-green transition-colors mb-2">
                        {prod.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-body-text leading-relaxed mb-4">
                        {prod.desc}
                      </p>
                    </div>
                    <div className="mt-4">
                      <a
                        href={getWhatsAppLink(prod.title)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2.5 w-full py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-heading font-bold text-sm rounded-lg shadow-[0_4px_14px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 group/btn"
                      >
                        <MessageCircle size={16} className="shrink-0 transition-transform duration-300 group-hover/btn:scale-110" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="primary" className="px-8 py-3 text-sm font-bold shadow-md">
                View Full Product Catalog ({sbnProducts.length} Items)
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* 5. Quality & Stress Testing Section */}
      <section className="py-20 bg-white border-b border-border-green/20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Content left */}
            <div className="lg:col-span-5 flex flex-col">
              <SectionEyebrow>Strict Inspection Standards</SectionEyebrow>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-text mb-6">
                {sbnProfile.quality.heading}
              </h2>
              <p className="font-sans text-body-text leading-relaxed mb-6">
                {sbnProfile.quality.body}
              </p>
              <div className="flex gap-4">
                <Link to="/contact">
                  <Button variant="primary">Inquire About Warranty</Button>
                </Link>
              </div>
            </div>

            {/* Quality Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sbnProfile.quality.cards.map((card, idx) => (
                <div key={idx} className="bg-soft-bg border border-border-green/50 rounded-[8px] p-5 flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-primary-green shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-dark-text mb-1">
                      {card}
                    </h4>
                    <p className="text-xs text-body-text leading-relaxed">
                      Rigorous technical evaluation conducted by certified network engineering teams.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Core Services */}
      <section className="py-20 bg-soft-bg border-b border-border-green/20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionEyebrow>Engineering Services</SectionEyebrow>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-text mt-2 animate-pulse-slow">
              IOS Upgrades, rentals, and Support
            </h2>
            <p className="font-sans text-body-text leading-relaxed mt-4">
              In addition to supplying hardware, we provide remote OS configurations, network repairs, and temporary hardware leases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sbnServices.slice(0, 3).map((svc, idx) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="group h-full flex flex-col justify-between hover:border-primary-green">
                  <div>
                    <IconBadge name={svc.iconName} className="mb-6" />
                    <h3 className="font-heading font-bold text-lg text-dark-text group-hover:text-primary-green transition-colors mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-body-text leading-relaxed mb-6">
                      {svc.short}
                    </p>
                  </div>
                  <Link to="/services" className="inline-flex items-center text-primary-green font-heading text-sm font-bold gap-1 mt-auto">
                    <span>Learn More Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. CTA Band */}
      <section className="py-16 md:py-24 bg-soft-bg border-b border-border-green/20">
        <Container>
          <div className="relative rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#006A2F] via-[#00572D] to-[#003E1F] text-white p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden border border-white/15">
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-25 pointer-events-none" />
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <NetworkNodeGraphic dark={true} nodeCount={25} />
            </div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-6 leading-tight">
                Ready to Optimize Your Infrastructure Expenditure?
              </h2>
              <p className="font-sans text-white/85 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Get certified pre-owned routers, switch stacks, and direct support contracts. Drop us a request today.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link to="/contact">
                  <Button variant="secondary" className="font-bold border-none shadow-lg px-7 py-3.5 text-base">
                    Get a Consultation
                  </Button>
                </Link>
                <a href={`https://wa.me/91${sbnProfile.whatsapp}`} target="_blank" rel="noreferrer">
                  <Button variant="outline" className="font-bold border-white/40 text-white hover:bg-white/10 px-7 py-3.5 text-base">
                    Message via WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
export default Home;
