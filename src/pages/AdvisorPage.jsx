import { useMemo, useState } from 'react';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ClipboardList,
  Laptop,
  ScanLine,
  User,
  UserPlus,
} from 'lucide-react';
import { Navigate, useParams } from 'react-router-dom';
import { advisorPages, appPromo } from '../data/advisorPages.js';

const stepIcons = {
  ClipboardList,
  UserPlus,
  ScanLine,
  Laptop,
};

function underlineClass() {
  return <div className="mx-auto mt-3 h-[2px] w-[78px] bg-[#2e6df8]" />;
}

function LeadForm({ title, nameLabel }) {
  return (
    <section id="lead-form" className="overflow-hidden rounded-[10px] border border-[#dce4f0] bg-white shadow-[0_8px_22px_rgba(25,62,125,0.05)]">
      <div className="border-b border-[#e7edf7] bg-[#f4f8ff] px-4 py-4">
        <h3 className="text-[17px] font-semibold leading-[1.35] text-black">{title}</h3>
      </div>

      <form className="space-y-4 p-4">
        {[
          [nameLabel, 'Enter your full name'],
          ['Email Address *', 'Enter your email'],
          ['Phone Number (without 0/+91) *', 'Enter 10-digit phone number'],
        ].map(([label, placeholder]) => (
          <label key={label} className="block">
            <span className="mb-2 block text-[12px] font-medium text-[#222]">{label}</span>
            <input
              type="text"
              placeholder={placeholder}
              className="h-[40px] w-full rounded-[10px] border border-[#dbe4f1] px-4 text-[14px] outline-none placeholder:text-[#bcc6d6]"
            />
          </label>
        ))}

        <label className="block">
          <span className="mb-2 block text-[12px] font-medium text-[#222]">Select State *</span>
          <select className="h-[40px] w-full rounded-[10px] border border-[#dbe4f1] px-4 text-[14px] text-[#303d55] outline-none">
            <option>Please Select State</option>
          </select>
        </label>

        <div>
          <span className="mb-2 block text-[12px] font-medium text-[#222]">Any prior experience in insurance? *</span>
          <div className="flex items-center gap-6 text-[14px] text-[#1d2c46]">
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="experience" className="h-4 w-4" />
              Yes
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="experience" className="h-4 w-4" />
              No
            </label>
          </div>
        </div>

        <p className="text-[12px] leading-[1.35] text-[#6f7b91]">
          This site is protected by reCAPTCHA and the Google <a href="#" className="text-[#1663f6]">Privacy Policy</a> and
          <a href="#" className="text-[#1663f6]"> Terms of Service</a> apply.
        </p>

        <button
          type="button"
          className="inline-flex h-[48px] w-full items-center justify-center rounded-[10px] bg-[#1364f4] text-[18px] font-semibold text-white"
        >
          Submit
        </button>

        <div className="rounded-[8px] bg-[#f5f7fb] px-4 py-3 text-[13px] text-[#31445f]">
          Only authorised PBPartners expert will assist you
        </div>

        <p className="text-center text-[11px] leading-[1.5] text-[#6f7b91]">
          By clicking, you agree to our <a href="#" className="text-[#1663f6]">Privacy policy</a>,{' '}
          <a href="#" className="text-[#1663f6]">Terms of Use</a> &amp; <a href="#" className="text-[#1663f6]">Disclaimers</a>
        </p>
      </form>
    </section>
  );
}

function ArticleCard({ article }) {
  return (
    <article className="overflow-hidden rounded-[12px] border border-[#d8e5f6] bg-white shadow-[0_4px_14px_rgba(23,52,104,0.06)]">
      <img src={article.image} alt={article.title} className="h-[194px] w-full object-cover" />
      <div className="p-4">
        <h3 className="min-h-[72px] text-[16px] font-semibold leading-[1.5] text-[#0f2342]">{article.title}</h3>
        <p className="mt-3 min-h-[56px] text-[14px] leading-[1.6] text-[#596b88]">{article.excerpt}</p>
        <button
          type="button"
          className="mt-4 inline-flex h-[38px] w-full items-center justify-center rounded-[9px] border border-[#7fb0ff] bg-[#e8f1ff] text-[15px] font-semibold text-[#1b56bf]"
        >
          Read more ...
        </button>
      </div>
    </article>
  );
}

function TestimonialCard({ item }) {
  return (
    <article className="relative rounded-[18px] border border-[#d9e2f3] bg-white p-5 shadow-[0_4px_14px_rgba(23,52,104,0.04)]">
      <div className="mb-5 flex items-center gap-3">
        <div className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#1c63ff] text-[#1c63ff]">
          <User size={18} />
        </div>
        <h3 className="text-[15px] font-semibold text-[#1f2e48]">{item.title}</h3>
      </div>

      <p className="min-h-[130px] text-[15px] leading-[1.7] text-[#4c5e7b]">{item.quote}</p>

      <p className="mt-5 text-[15px] font-semibold text-[#1f2e48]">{item.author}</p>
      <p className="text-[14px] text-[#8d99ad]">{item.authorTitle}</p>

      <div className="absolute bottom-3 right-4 text-[54px] font-semibold leading-none text-[#b7d2ff]">''</div>
    </article>
  );
}

function AppPromo() {
  return (
    <section className="rounded-[20px] bg-[#f7fbff] px-6 py-8 md:px-10">
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_300px]">
        <div>
          <span className="inline-flex rounded-full bg-[#dbe9ff] px-3 py-1 text-[12px] font-semibold text-[#3b66b6]">
            {appPromo.tag}
          </span>
          <h2 className="mt-4 text-[28px] font-semibold leading-[1.2] text-[#10284d]">{appPromo.title}</h2>
          <p className="mt-2 text-[16px] text-[#60708d]">{appPromo.subtitle}</p>

          <div className="mt-5 flex flex-wrap gap-4">
            <img src={appPromo.appStore} alt="App Store" className="h-[44px] w-auto rounded-[8px]" />
            <img src={appPromo.googlePlay} alt="Google Play" className="h-[44px] w-auto rounded-[8px]" />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {appPromo.features.map((item) => (
              <div key={item} className="inline-flex items-center gap-3 text-[16px] text-[#1d355d]">
                <span className="inline-flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#dce9ff] text-[#1c63ff]">
                  <ChevronRight size={12} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="justify-self-end">
          <img src={appPromo.phoneImage} alt="PBPartners app" className="max-h-[300px] w-auto object-contain" />
        </div>
      </div>
    </section>
  );
}

export default function AdvisorPage({ pageKey = null }) {
  const { slug: routeSlug } = useParams();
  const slug = pageKey ?? routeSlug;
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const page = useMemo(() => (slug ? advisorPages[slug] : null), [slug]);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <main className="mx-auto max-w-[1100px] px-4 pb-16 pt-[112px]">
        <section className="relative overflow-hidden rounded-b-[12px]">
          <div className="absolute inset-x-0 top-0 h-[28px] bg-[#edf5ff]" />

          <div className="relative z-10 pt-6">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_332px]">
              <div>
                <h1 className="text-[25px] font-semibold leading-[1.25] text-[#152e57]">{page.hero.title}</h1>
                <p className="mt-1 text-[15px] font-semibold text-[#111111]">{page.hero.subtitle}</p>
                <p className="mt-4 max-w-[690px] text-[16px] leading-[1.7] text-[#243e66]">{page.hero.description}</p>

                <img
                  src={page.hero.image}
                  alt={page.hero.title}
                  className="mt-8 h-auto max-w-full object-contain"
                />

                <button
                  type="button"
                  aria-label="Scroll to next section"
                  onClick={() => document.getElementById('sections')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mx-auto mt-3 inline-flex h-[36px] w-[36px] items-center justify-center rounded-full text-[#6c7b92]"
                >
                  <ChevronDown size={32} strokeWidth={1.6} />
                </button>
              </div>

              <div className="relative">
                <div
                  className="absolute -bottom-8 -right-14 hidden h-[216px] w-[420px] lg:block"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(76,129,253,0.22) 1.4px, transparent 1.4px)',
                    backgroundSize: '11px 11px',
                  }}
                />
                <div className="relative z-10">
                  <LeadForm title={page.hero.formTitle} nameLabel={page.hero.nameLabel} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sections" className="pt-8">
          <div className="text-center">
            <h2 className="text-[24px] font-semibold leading-[1.25] text-[#152e57]">{page.featuresTitle}</h2>
            {underlineClass()}
          </div>
          <p className="mx-auto mt-6 max-w-[1020px] text-[16px] leading-[1.75] text-[#243e66]">
            {page.featuresIntro}{' '}
            <a href="#lead-form" className="font-semibold text-[#1663f6]">Read More</a>
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {page.features.map((item) => (
              <div
                key={item.label}
                className="rounded-[18px] border border-[#d8e4ff] bg-white px-5 py-8 text-center shadow-[0_8px_18px_rgba(63,102,179,0.08)]"
              >
                <img src={item.image} alt={item.label} className="mx-auto h-[88px] w-auto object-contain" />
                <p className="mt-5 text-[17px] leading-[1.45] text-[#1a2b4b]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-16">
          <div className="text-center">
            <h2 className="text-[24px] font-semibold leading-[1.25] text-[#152e57]">{page.whoTitle}</h2>
            {underlineClass()}
          </div>
          <p className="mx-auto mt-6 max-w-[1020px] text-[16px] leading-[1.75] text-[#243e66]">
            {page.whoIntro}{' '}
            <a href="#lead-form" className="font-semibold text-[#1663f6]">Read More</a>
          </p>
        </section>

        <section className="mt-12 bg-[#f7fbff] px-6 py-14 md:px-10">
          <div className="text-center">
            <h2 className="text-[24px] font-semibold leading-[1.25] text-[#152e57]">{page.stepsTitle}</h2>
            {underlineClass()}
          </div>
          <p className="mx-auto mt-6 max-w-[1020px] text-[16px] leading-[1.75] text-[#243e66]">{page.stepsIntro}</p>

          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {page.steps.map((step, index) => {
              const Icon = stepIcons[step.icon];
              return (
                <div key={step.title} className="relative text-center">
                  {index !== page.steps.length - 1 ? (
                    <div className="absolute left-1/2 top-[18px] hidden h-[2px] w-full bg-[#d7deeb] md:block" />
                  ) : null}
                  <div className="relative z-10 inline-flex h-[40px] w-[40px] items-center justify-center rounded-full border-[3px] border-white bg-[#1663f6] text-white shadow-[0_0_0_2px_#d7deeb]">
                    {Icon ? <Icon size={18} /> : null}
                  </div>
                  <p className="mt-5 text-[15px] font-semibold text-[#1663f6]">{`Step ${index + 1}: ${step.title}`}</p>
                  <p className="mx-auto mt-3 max-w-[230px] text-[14px] leading-[1.55] text-[#334d74]">{step.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pt-16">
          <div className="text-center">
            <h2 className="text-[24px] font-semibold leading-[1.25] text-[#152e57]">{page.articlesTitle}</h2>
            {underlineClass()}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {page.articles.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>
        </section>

        <section className="pt-16">
          <div className="text-center">
            <h2 className="text-[24px] font-semibold leading-[1.25] text-[#152e57]">{page.testimonialTitle}</h2>
            {underlineClass()}
          </div>

          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              type="button"
              className="inline-flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#dce4f0] text-[#6c7b92]"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="inline-flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#dce4f0] text-[#6c7b92]"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {page.testimonials.map((item) => (
              <TestimonialCard key={`${item.author}-${item.title}`} item={item} />
            ))}
          </div>
        </section>

        <section className="pt-16">
          <div className="text-center">
            <h2 className="text-[24px] font-semibold leading-[1.25] text-[#152e57]">{page.faqTitle}</h2>
            {underlineClass()}
          </div>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[340px_minmax(0,1fr)]">
            <div className="text-center">
              <img src={page.faqImage} alt="FAQs" className="mx-auto h-auto max-w-full object-contain" />
              <a
                href="#lead-form"
                className="mt-5 inline-flex h-[44px] min-w-[210px] items-center justify-center rounded-[10px] bg-[#1663f6] px-8 text-[20px] font-semibold text-white no-underline"
              >
                Become POSP Agent
              </a>
            </div>

            <div className="space-y-1">
              {page.faqs.map((item, index) => (
                <div key={item.question} className="border-b border-[#dfe6f2]">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex((current) => (current === index ? -1 : index))}
                    className={`flex w-full items-center justify-between gap-4 py-4 text-left text-[15px] font-medium ${
                      openFaqIndex === index ? 'text-[#1663f6]' : 'text-[#1f2e48]'
                    }`}
                  >
                    <span>{item.question}</span>
                    {openFaqIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {openFaqIndex === index ? (
                    <p className="pb-4 pr-6 text-[15px] leading-[1.7] text-[#5b6d89]">{item.answer}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-16">
          <AppPromo />
        </section>
      </main>

    </>
  );
}
