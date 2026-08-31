import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sbnProfile, sbnProducts, sbnServices } from '../data/sbn_data';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SectionEyebrow } from '../components/ui/SectionEyebrow';
import { IconBadge } from '../components/ui/IconBadge';
import { NetworkNodeGraphic } from '../components/ui/NetworkNodeGraphic';
import { ArrowRight, CheckCircle2, ShieldCheck, MessageSquare } from 'lucide-react';

export function Home() {
  const getWhatsAppLink = (categoryName: string) => {
    const message = `Hello CIS Tech Solutions, I am interested in your ${categoryName} hardware listings. Please share available models, pre-owned stock, and price details.`;
    return `https://wa.me/91${sbnProfile.whatsapp}?text=${encodeURIComponent(message)}`;
  };
  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-[#f6fbf8] overflow-hidden border-b border-border-green/20">
        {/* Background Hero Image (Zoomed to left on small screens, right on desktop) */}
        <div
          className="absolute inset-0 bg-no-repeat bg-[position:left_center] md:bg-[position:right_center] bg-cover pointer-events-none opacity-95"
          style={{ backgroundImage: "url('/hero.png')" }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 h-full z-10 opacity-30 lg:opacity-65 pointer-events-none lg:pointer-events-auto">
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
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: Math.min(0.2, idx * 0.05) }}
              >
                <Card className="group h-full flex flex-col justify-between hover:border-primary-green p-0 overflow-hidden shadow-sm hover:shadow-md transition-all">
                  {/* Image container */}
                  <div className="relative h-56 bg-slate-50 border-b border-border-green/20 p-5 flex items-center justify-center overflow-hidden">
                    <img
                      src={prod.imageUrl}
                      alt={prod.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 z-20">
                      <IconBadge name={prod.iconName} size="sm" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-dark-text group-hover:text-primary-green transition-colors mb-3">
                        {prod.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-body-text leading-relaxed mb-6">
                        {prod.desc}
                      </p>
                    </div>

                    {/* Inquiry Actions */}
                    <div className="mt-4">
                      <a
                        href={getWhatsAppLink(prod.title)}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full"
                      >
                        <Button
                          variant="primary"
                          className="w-full py-2.5 text-xs flex items-center justify-center gap-2 shadow-sm font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white border-none"
                        >
                          <MessageSquare size={14} />
                          <span>Enquire on WhatsApp</span>
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="primary" className="px-8 py-3 bg-deep-green hover:bg-primary-green">
                View All Products (10+ Items)
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
      <section className="py-20 bg-soft-bg border-t border-border-green/20">
        <Container>
          <div className="relative rounded-3xl bg-gradient-to-br from-[#006A2F] via-[#005838] to-[#004225] text-white p-10 sm:p-14 lg:p-16 text-center overflow-hidden shadow-2xl border border-primary-green/30">
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-leaf-green/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-primary-green/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-5 leading-tight">
                Ready to Optimize Your Infrastructure Expenditure?
              </h2>
              <p className="font-sans text-white/90 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Get certified pre-owned routers, switch stacks, and direct support contracts. Drop us a request today.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link to="/contact">
                  <button className="inline-flex items-center justify-center font-heading font-bold text-sm bg-white text-[#005838] hover:bg-slate-100 transition-all duration-300 rounded-lg px-7 py-3.5 shadow-lg active:scale-98 cursor-pointer">
                    Get a Consultation
                  </button>
                </Link>
                <a href={`https://wa.me/91${sbnProfile.whatsapp}`} target="_blank" rel="noreferrer">
                  <button className="inline-flex items-center justify-center gap-2 font-heading font-bold text-sm bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all duration-300 rounded-lg px-7 py-3.5 shadow-lg active:scale-98 cursor-pointer">
                    <MessageSquare size={16} className="text-white" />
                    <span>Message via WhatsApp</span>
                  </button>
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

