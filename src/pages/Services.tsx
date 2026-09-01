import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sbnServices } from '../data/sbn_data';
import { Container } from '../components/layout/Container';
import { SectionEyebrow } from '../components/ui/SectionEyebrow';
import { Button } from '../components/ui/Button';
import { IconBadge } from '../components/ui/IconBadge';

export function Services() {
  return (
    <div>
      {/* 1. Page Header */}
      <section className="bg-gradient-to-b from-[#eaf6ee] to-[#f4faf6] text-dark-text py-16 sm:py-20 relative overflow-hidden border-b border-border-green/40">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <Container className="relative z-10">
          <SectionEyebrow>Our Services</SectionEyebrow>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-dark-text mb-4 leading-tight tracking-tight">
            IT Engineering &amp; <span className="text-primary-green">Hardware Solutions</span>
          </h1>
          <p className="font-sans text-body-text max-w-2xl text-sm sm:text-base leading-relaxed">
            We provide comprehensive technical support, device flashing, rentals and physical server room cable management.
          </p>
        </Container>
      </section>

      {/* 2. Services List Stack */}
      <section className="py-20 bg-white">
        <Container className="flex flex-col gap-24">
          {sbnServices.map((svc, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-55px' }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Text Content Column */}
                <div className={`lg:col-span-6 flex flex-col ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <IconBadge name={svc.iconName} size="md" className="mb-6 self-start" />
                  
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark-text mb-4">
                    {svc.title}
                  </h2>
                  
                  <p className="font-sans text-sm font-semibold text-primary-green mb-4">
                    {svc.short}
                  </p>
                  
                  <p className="font-sans text-body-text leading-relaxed mb-8">
                    {svc.body}
                  </p>
                  
                  <div>
                    <Link to="/contact">
                      <Button variant="primary">Inquire About This Service</Button>
                    </Link>
                  </div>
                </div>

                {/* Image Column */}
                <div className={`lg:col-span-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div className="relative h-[280px] sm:h-[350px] rounded-[12px] overflow-hidden border border-border-green/50 shadow-premium-green">
                    <img
                      src={svc.imageUrl}
                      alt={svc.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Container>
      </section>
    </div>
  );
}
export default Services;
