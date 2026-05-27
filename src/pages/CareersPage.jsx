import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Play,
  Search,
} from 'lucide-react';
import {
  careerOpportunities,
  careersHero,
  employeeVideos,
  leaderTestimonials,
  whyUsCards,
  workplaceGallery,
} from '../data/careersData.js';

function SectionHeading({ blueWord, rest, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-[#111111] md:text-[42px]">
        {blueWord ? <span className="text-[#1e67f5]">{blueWord}</span> : null}
        {blueWord ? ' ' : ''}
        {rest}
      </h2>
      {subtitle ? <p className="mt-3 text-[15px] text-[#7b7b7b] md:text-[17px]">{subtitle}</p> : null}
      <div className="mx-auto mt-4 h-[2px] w-[56px] bg-[#6b8fff]" />
    </div>
  );
}

function CareersHeroSection() {
  return (
    <section className="overflow-hidden bg-[#eaf1ff] pt-[112px] md:pt-[86px]">
      <div className="relative mx-auto min-h-[562px] max-w-[1344px] px-4 md:px-6">
        <div className="grid min-h-[562px] items-center md:grid-cols-[58%_42%]">
          <div className="relative z-10 pb-14 pt-10 md:pb-8 md:pl-[162px] md:pt-[80px]">
            <h1 className="max-w-[650px] text-[34px] font-semibold leading-[1.32] tracking-[-0.03em] text-black md:text-[58px]">
              Embark on a career journey
              <br className="hidden md:block" />
              with <span className="text-[#1e67f5]">PBPARTNERS</span>
            </h1>
            <p className="mt-8 max-w-[560px] text-[18px] italic text-[#7b7b7b] md:text-[15px]">
              Where <span className="text-[#1e67f5]">passion</span> meets <span className="text-[#1e67f5]">profession</span> and{' '}
              <span className="text-[#1e67f5]">success</span> is the destination.
            </p>
            <a
              href="#career-opportunities"
              className="mt-[56px] inline-flex h-[40px] items-center gap-2 rounded-[4px] bg-[#288bf5] px-5 text-[14px] font-medium text-white shadow-sm transition hover:bg-[#1477e3]"
            >
              <Search size={17} strokeWidth={2.4} />
              Find jobs
            </a>
          </div>

          <div className="relative min-h-[360px] md:min-h-[562px]">
            <div className="absolute right-[164px] top-[54px] z-30 rounded-[24px] bg-white px-[16px] py-[16px] shadow-[0_16px_34px_rgba(16,24,40,0.14)]">
              <button
                type="button"
                className="flex h-[40px] items-center gap-2 rounded-full bg-[#1ab74e] px-6 text-[14px] font-semibold text-white"
              >
                <Play size={16} fill="currentColor" />
                Message from our CBO
              </button>
              <div className="absolute bottom-[-14px] right-[22px] h-0 w-0 border-l-[14px] border-r-[14px] border-t-[18px] border-l-transparent border-r-transparent border-t-white" />
            </div>

            <img
              src={careersHero.badge}
              alt="Great Place To Work Certified"
              className="absolute right-[22px] top-0 z-20 w-[120px] md:w-[124px]"
            />

            <img
              src={careersHero.person}
              alt="PBPartners careers"
              className="absolute bottom-0 right-[26px] z-10 w-[360px] max-w-none object-contain md:w-[448px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className="bg-white px-4 py-[62px] md:px-6 md:py-[78px]">
      <div className="mx-auto max-w-[1020px]">
        <SectionHeading blueWord="Why" rest="PBPartners?" subtitle="Because your career deserves the extraordinary" />

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {whyUsCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[28px] border border-[#e4edf3] bg-[linear-gradient(135deg,rgba(215,246,255,0.72)_0%,rgba(235,251,245,0.9)_52%,rgba(255,218,234,0.72)_100%)] p-[10px] shadow-[0_8px_24px_rgba(38,64,102,0.12)]"
            >
              <div className="flex min-h-[148px] flex-col items-center justify-center rounded-[24px] border border-white/80 px-5 text-center">
                <img src={card.image} alt="" className="mb-4 h-[48px] w-[48px] object-contain" />
                <h3 className="text-[17px] font-medium leading-[1.45] text-[#131313]">{card.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpportunityCard({ opportunity }) {
  return (
    <article className="rounded-[24px] bg-white p-[10px] shadow-[0_14px_28px_rgba(66,86,119,0.12)]">
      <img
        src={opportunity.image}
        alt={opportunity.title}
        className="h-[124px] w-full rounded-[18px] object-cover"
      />
      <div className="flex items-start justify-between gap-4 px-[2px] pb-[6px] pt-3">
        <div>
          <h3 className="text-[15px] font-semibold text-[#384866]">{opportunity.title}</h3>
        </div>
        <span className="text-[13px] text-[#919191]">{opportunity.location}</span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          className="rounded-[4px] bg-[#b9d1f7] px-4 py-[8px] text-[14px] font-medium text-[#1f2f48] transition hover:bg-[#9fc0f5]"
        >
          View Jobs
        </button>
        <button
          type="button"
          aria-label={`Open ${opportunity.title}`}
          className="inline-flex h-[32px] w-[32px] items-center justify-center rounded-[6px] bg-[#f5f5f5] text-[#111111]"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </article>
  );
}

function OpportunitiesSection() {
  return (
    <section id="career-opportunities" className="bg-[#eaf1ff] px-4 py-[62px] md:px-6 md:py-[74px]">
      <div className="mx-auto max-w-[1020px]">
        <SectionHeading
          rest={(
            <>
              Explore your next <span className="text-[#1e67f5]">career</span> move
            </>
          )}
          subtitle={(
            <>
              Join a legacy of <span className="text-[#1e67f5]">2000+</span> thriving careers - Your{' '}
              <span className="text-[#1e67f5]">Ambitions</span>, our <span className="text-[#1e67f5]">Commitment</span>.
            </>
          )}
        />

        <h3 className="mt-9 text-[18px] font-semibold text-[#2c3f63] md:text-[22px]">Career Opportunities</h3>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {careerOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.title} opportunity={opportunity} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LeaderTestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = leaderTestimonials.length;
  const active = leaderTestimonials[activeIndex];
  const prev = leaderTestimonials[(activeIndex - 1 + total) % total];
  const next = leaderTestimonials[(activeIndex + 1) % total];

  function move(direction) {
    setActiveIndex((current) => (current + direction + total) % total);
  }

  return (
    <section className="bg-white px-4 py-[36px] md:px-6 md:py-[48px]">
      <div className="mx-auto max-w-[1020px] rounded-[30px] border border-[#dcebe6] bg-[linear-gradient(120deg,rgba(213,245,255,0.75)_0%,rgba(238,250,232,0.9)_52%,rgba(252,219,236,0.76)_100%)] px-4 py-10 shadow-[0_14px_30px_rgba(50,80,120,0.12)] md:px-10 md:py-12">
        <SectionHeading blueWord="Leader's" rest="Testimonial" />

        <div className="mt-10 flex items-center justify-between gap-3 md:gap-6">
          <button
            type="button"
            onClick={() => move(-1)}
            className="inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-white/55 text-[#2e2e2e] shadow-sm backdrop-blur"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="grid flex-1 items-center gap-4 md:grid-cols-[0.9fr_1.25fr_0.9fr]">
            <div className="hidden min-h-[170px] rounded-[26px] border border-white/60 bg-white/35 p-7 text-[14px] leading-[1.8] text-[#5a6b7d] md:block">
              {prev.quote}
            </div>

            <div className="min-h-[170px] rounded-[26px] border border-white/70 bg-white/55 p-7 text-center shadow-[0_10px_24px_rgba(255,255,255,0.28)_inset] backdrop-blur-[2px]">
              <h3 className="text-[20px] font-semibold text-[#4b576b]">{active.name}</h3>
              <p className="mt-4 text-[16px] leading-[1.8] text-[#4d5f72]">{active.quote}</p>
            </div>

            <div className="hidden min-h-[170px] rounded-[26px] border border-white/60 bg-white/35 p-7 text-[14px] leading-[1.8] text-[#5a6b7d] md:block">
              {next.quote}
            </div>
          </div>

          <button
            type="button"
            onClick={() => move(1)}
            className="inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-white/55 text-[#2e2e2e] shadow-sm backdrop-blur"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="mt-10 flex items-end justify-center gap-4">
          {[prev, active, next].map((person, index) => {
            const isActive = index === 1;
            return (
              <button
                key={`${person.name}-${index}`}
                type="button"
                onClick={() => setActiveIndex(leaderTestimonials.findIndex((item) => item.name === person.name))}
                className="text-center"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className={`mx-auto rounded-full object-cover transition ${
                    isActive
                      ? 'h-[110px] w-[110px] border-[6px] border-white shadow-lg'
                      : 'h-[66px] w-[66px] border-[3px] border-white/80 opacity-95'
                  }`}
                />
                {isActive ? (
                  <div className="mt-3">
                    <p className="text-[18px] font-semibold text-[#4b576b]">{person.name}</p>
                    <p className="text-[15px] text-[#5a6875]">{person.role}</p>
                  </div>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WorkplaceGallerySection() {
  return (
    <section className="bg-white px-4 py-[56px] md:px-6 md:py-[70px]">
      <div className="mx-auto max-w-[1020px]">
        <SectionHeading
          rest={(
            <>
              <span className="text-[#1e67f5]">Work!</span> Thrive! Enjoy!
            </>
          )}
          subtitle={(
            <>
              Unveiling the essence of everyday excellence <span className="text-[#1e67f5]">#lifeatpbpartners</span>
            </>
          )}
        />

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-[0.42fr_1.15fr_1.2fr_0.58fr]">
          {workplaceGallery.slice(0, 4).map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt="Life at PBPartners"
              className="h-[280px] w-full rounded-[16px] object-cover"
            />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-[0.52fr_1.65fr_1.55fr_0.7fr]">
          {workplaceGallery.slice(4, 8).map((image, index) => (
            <img
              key={`${image}-${index + 4}`}
              src={image}
              alt="PBPartners workplace moments"
              className="h-[146px] w-full rounded-[16px] object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function EmployeeVoicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = employeeVideos.length;
  const active = employeeVideos[activeIndex];

  function move(direction) {
    setActiveIndex((current) => (current + direction + total) % total);
  }

  return (
    <section className="bg-[#eaf1ff] px-4 py-[62px] md:px-6 md:py-[78px]">
      <div className="mx-auto grid max-w-[1020px] items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="max-w-[420px] text-[36px] font-semibold leading-[1.25] tracking-[-0.03em] text-black md:text-[52px]">
            Listen what <span className="text-[#1e67f5]">our Employees</span> say about us!
          </h2>
        </div>

        <div>
          <div className="relative overflow-hidden rounded-[20px] bg-black shadow-[0_18px_36px_rgba(20,20,20,0.2)]">
            <iframe
              key={active.embed}
              src={active.embed}
              title={active.title}
              className="aspect-video w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="mt-4 flex items-center justify-center gap-6">
            <button type="button" onClick={() => move(-1)} className="text-[#d7d7d7] transition hover:text-[#7a7a7a]">
              <ArrowLeft size={18} />
            </button>
            <div className="flex items-center gap-3">
              {employeeVideos.map((video, index) => (
                <button
                  key={video.embed}
                  type="button"
                  aria-label={video.title}
                  onClick={() => setActiveIndex(index)}
                  className={`h-[10px] w-[10px] rounded-full transition ${
                    index === activeIndex ? 'bg-[#1e67f5]' : 'bg-[#d9d9d9]'
                  }`}
                />
              ))}
            </div>
            <button type="button" onClick={() => move(1)} className="text-[#d7d7d7] transition hover:text-[#7a7a7a]">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CareersPage() {
  return (
    <>
      <CareersHeroSection />
      <WhyUsSection />
      <OpportunitiesSection />
      <LeaderTestimonialSection />
      <WorkplaceGallerySection />
      <EmployeeVoicesSection />
    </>
  );
}
