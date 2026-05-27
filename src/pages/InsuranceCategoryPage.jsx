import { ChevronRight, MoveRight, Share2 } from 'lucide-react';
import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import {
  commonFeaturedArticles,
  commonLatestArticles,
  insuranceCategoryPages,
} from '../data/articleCategoryPages.js';

const shareLinks = ['f', 'x', 'in', 'wa', 'lnk'];

function ArticleMeta({ author, category, hits }) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[#445b84]">
      <span className="inline-flex items-center gap-2">
        <span className="inline-flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#1663f6] text-[10px] font-semibold text-white">
          pbp
        </span>
        By {author}
      </span>
      <span>Category: {category}</span>
      <span>Hits: {hits}</span>
    </div>
  );
}

function ArticleCard({ article }) {
  return (
    <article className="overflow-hidden rounded-[12px] border border-[#dce4f0] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.05)]">
      <img src={article.image} alt={article.title} className="h-[220px] w-full object-cover" />
      <div className="p-4">
        <h3 className="min-h-[68px] text-[17px] font-semibold leading-[1.4] text-black">{article.title}</h3>
        <ArticleMeta author={article.author} category={article.category} hits={article.hits} />
        <p className="mt-5 min-h-[74px] text-[14px] leading-[1.8] text-[#334d74]">{article.excerpt}</p>
        <button
          type="button"
          className="mt-5 inline-flex h-[40px] w-full items-center justify-center rounded-[10px] bg-[#dceafe] text-[16px] font-semibold text-[#1d4faa]"
        >
          Read more ...
        </button>
      </div>
    </article>
  );
}

function SidebarPanel({ title, items }) {
  return (
    <section className="overflow-hidden rounded-[12px] border border-[#dce4f0] bg-white">
      <div className="bg-[#eef5ff] px-4 py-4">
        <h3 className="text-[18px] font-semibold text-black">{title}</h3>
      </div>
      <div className="px-4">
        {items.map((item, index) => (
          <a
            key={`${title}-${item}`}
            href="#"
            className={`flex items-center justify-between gap-4 py-4 text-[14px] leading-[1.4] text-[#1f3d70] no-underline ${
              index !== items.length - 1 ? 'border-b border-[#e7edf7]' : ''
            }`}
          >
            <span>{item}</span>
            <ChevronRight size={18} className="shrink-0 text-[#6a7a90]" />
          </a>
        ))}
      </div>
    </section>
  );
}

function LeadForm() {
  return (
    <section className="overflow-hidden rounded-[12px] border border-[#dce4f0] bg-white">
      <div className="bg-[#eef5ff] px-4 py-4">
        <h3 className="text-[18px] font-semibold leading-[1.35] text-black">
          Become an Insurance Agent and
          <br />
          Earn Unlimited
        </h3>
      </div>

      <form className="space-y-4 p-4">
        {[
          ['Full Name *', 'Enter your full name'],
          ['Email Address *', 'Enter your email'],
          ['Phone Number (without 0/+91) *', 'Enter 10-digit phone number'],
        ].map(([label, placeholder]) => (
          <label key={label} className="block">
            <span className="mb-2 block text-[13px] font-medium text-[#222]">{label}</span>
            <input
              type="text"
              placeholder={placeholder}
              className="h-[44px] w-full rounded-[12px] border border-[#dae3f0] px-4 text-[15px] outline-none placeholder:text-[#b6c0cf]"
            />
          </label>
        ))}

        <label className="block">
          <span className="mb-2 block text-[13px] font-medium text-[#222]">Select State *</span>
          <select className="h-[44px] w-full rounded-[12px] border border-[#dae3f0] px-4 text-[15px] text-[#303d55] outline-none">
            <option>Please Select State</option>
          </select>
        </label>

        <div>
          <span className="mb-2 block text-[13px] font-medium text-[#222]">Any prior experience in insurance? *</span>
          <div className="flex items-center gap-6 text-[15px] text-[#1d2c46]">
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

        <p className="text-[12px] leading-[1.4] text-[#6f7b91]">
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
        </p>

        <button
          type="button"
          className="inline-flex h-[48px] w-full items-center justify-center rounded-[10px] bg-[#1364f4] text-[18px] font-semibold text-white"
        >
          Submit
        </button>

        <div className="rounded-[8px] bg-[#f5f7fb] px-4 py-3 text-[14px] text-[#31445f]">
          Only authorised PBPartners expert will assist you
        </div>

        <p className="text-center text-[11px] leading-[1.5] text-[#6f7b91]">
          By clicking, you agree to our <a href="#" className="text-[#1663f6]">Privacy policy</a>,{' '}
          <a href="#" className="text-[#1663f6]">Terms of Use</a> &amp;{' '}
          <a href="#" className="text-[#1663f6]">Disclaimers</a>
        </p>
      </form>
    </section>
  );
}

function SharePanel() {
  return (
    <section className="overflow-hidden rounded-[12px] border border-[#dce4f0] bg-white">
      <div className="bg-[#eef5ff] px-4 py-4">
        <h3 className="text-[18px] font-semibold text-black">Share this with Your Friends</h3>
      </div>
      <div className="flex items-center gap-4 px-4 py-4">
        <button
          type="button"
          className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#3a465b] text-white"
        >
          <Share2 size={18} />
        </button>
        {shareLinks.map((item) => (
          <button
            key={item}
            type="button"
            className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#3a465b] text-[13px] font-semibold uppercase text-white"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}

export default function InsuranceCategoryPage() {
  const { slug } = useParams();
  const page = useMemo(() => (slug ? insuranceCategoryPages[slug] : null), [slug]);

  if (!page) {
    return <Navigate to="/articles" replace />;
  }

  return (
    <>
      <main className="mx-auto max-w-[1100px] px-4 pb-16 pt-[112px] md:pt-[104px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_328px]">
          <div>
            <section className="rounded-[14px] bg-[#f7f9fc] p-5">
              <h1 className="text-[28px] font-semibold text-black">{page.title}</h1>
              <p className="mt-3 text-[16px] leading-[1.65] text-[#213a61]">{page.description}</p>
            </section>

            <section className="mt-4 grid gap-4 md:grid-cols-2">
              {page.cards.map((article) => (
                <ArticleCard key={article.title} article={article} />
              ))}
            </section>

            <div className="mt-4 flex flex-col gap-4 rounded-[12px] border border-[#e4eaf4] bg-white px-4 py-4 md:flex-row md:items-center md:justify-between">
              <p className="text-[14px] text-[#6c7b92]">{page.articleCountLabel}</p>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    className={`inline-flex h-[34px] min-w-[34px] items-center justify-center rounded-[10px] border text-[15px] ${
                      num === 1
                        ? 'border-[#1663f6] bg-[#1663f6] text-white'
                        : 'border-[#1663f6] bg-white text-[#1663f6]'
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <span className="px-2 text-[#4b5e7d]">...</span>
                <button
                  type="button"
                  className="inline-flex h-[34px] min-w-[34px] items-center justify-center rounded-[10px] border border-[#1663f6] bg-white px-4 text-[15px] text-[#1663f6]"
                >
                  {page.nextPage}
                </button>
                <button
                  type="button"
                  className="inline-flex h-[34px] items-center gap-2 rounded-[10px] border border-[#1663f6] bg-white px-4 text-[15px] text-[#1663f6]"
                >
                  Next <MoveRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <LeadForm />
            <SidebarPanel title="Latest Articles" items={commonLatestArticles} />
            <SharePanel />
            <SidebarPanel title="Featured Articles" items={commonFeaturedArticles} />
          </aside>
        </div>
      </main>

    </>
  );
}
