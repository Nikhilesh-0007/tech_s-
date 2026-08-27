import { motion } from 'framer-motion';
import { sbnProfile } from '../data/sbn_data';
import { Container } from '../components/layout/Container';
import { SectionEyebrow } from '../components/ui/SectionEyebrow';
import { Card } from '../components/ui/Card';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* 1. Page Header */}
      <section className="bg-soft-bg py-10 md:py-14 border-b border-border-green/20">
        <Container>
          <SectionEyebrow>About Us</SectionEyebrow>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-dark-text mb-4 leading-tight tracking-tight">
            Reliable Networking Hardware.<br />Practical Infrastructure.
          </h1>
          <p className="font-sans text-body-text max-w-2xl text-sm sm:text-base leading-relaxed">
            {sbnProfile.descriptor}
          </p>
        </Container>
      </section>

      {/* 2. Company Profile */}
      <section className="py-20 bg-white border-b border-border-green/20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex flex-col">
              <SectionEyebrow>Corporate Profile</SectionEyebrow>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark-text mb-6">
                Our Mission & Sourcing Network
              </h2>
              <p className="font-sans text-body-text leading-relaxed mb-4">
                {sbnProfile.about.body}
              </p>
              <p className="font-sans text-body-text leading-relaxed mb-6">
                Under corporate standards led by our management coordinator, {sbnProfile.ceo}, we help companies scale operations. We acquire off-lease server hardware and enterprise switch assets, replacing worn nodes and certifying them to prevent downtime.
              </p>
              
              <div className="bg-soft-bg border border-border-green/60 p-5 rounded-[8px] flex flex-col gap-2">
                <div className="text-xs font-mono text-body-text uppercase tracking-wider">
                  Operational Credentials
                </div>
                <div className="text-sm font-heading font-bold text-dark-text">
                  Management / Administrator: <span className="text-primary-green">{sbnProfile.ceo}</span>
                </div>
              </div>
            </div>

            {/* Hardware list */}
            <div>
              <Card className="bg-soft-bg/45">
                <h3 className="font-heading font-bold text-lg text-dark-text mb-6">
                  Supplied Hardware Equipment Range
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sbnProfile.about.range.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-dark-text font-semibold">
                      <ChevronRight size={16} className="text-primary-green shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Multi-Point Quality Verification Process */}
      <section className="py-20 bg-soft-bg border-b border-border-green/20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionEyebrow>Testing Standard</SectionEyebrow>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark-text mt-2">
              Our 5-Stage Verification Timeline
            </h2>
            <p className="font-sans text-body-text leading-relaxed mt-4">
              We check every card, engine, and transceiver. Below is the workflow each pre-owned component passes through.
            </p>
          </div>

          <div className="relative">
            {/* Desktop timeline line */}
            <div className="absolute top-[38px] left-[10%] right-[10%] h-[3px] bg-border-green/50 hidden lg:block z-0 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {sbnProfile.process.map((step, idx) => (
                <motion.div
                  key={step.no}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex lg:flex-col gap-4 lg:gap-3 lg:items-center lg:text-center group"
                >
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-primary-green text-primary-green font-mono font-bold text-xs flex items-center justify-center group-hover:bg-primary-green group-hover:text-white transition-colors duration-300 shadow-sm relative z-20 shrink-0">
                    {step.no}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-dark-text group-hover:text-primary-green transition-colors mb-1.5 mt-0.5">
                      {step.title}
                    </h4>
                    <p className="text-xs text-body-text leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Why SBN Networks */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionEyebrow>Why Partner With Us</SectionEyebrow>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark-text mt-2">
              Reduced IT CAPEX. Maximized Performance.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sbnProfile.why.map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-base text-dark-text mb-2">
                    {item}
                  </h4>
                  <p className="text-xs sm:text-sm text-body-text leading-relaxed">
                    Sourced responsibly, rigorously verified, and dispatched globally with warranty coverage details.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
export default About;
