import { ChevronRight, MoveRight, Share2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { articleCategories } from '../data/articlesData.js';
import {
  commonFeaturedArticles,
  commonLatestArticles,
  insuranceCategoryPages,
} from '../data/articleCategoryPages.js';

const shareLinks = ['f', 'x', 'in', 'wa', 'lnk'];
const genericCategoryImage = articleCategories.find((category) => category.slug === 'generic')?.image ?? '';
const fallbackImageByCategory = Object.fromEntries(
  articleCategories.map((category) => [category.name, category.image]),
);

function normalizeImageSrc(url) {
  return url ? encodeURI(url) : genericCategoryImage;
}

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
  const categoryFallback = fallbackImageByCategory[article.category] ?? genericCategoryImage;
  const [imageSrc, setImageSrc] = useState(normalizeImageSrc(article.image));

  useEffect(() => {
    setImageSrc(normalizeImageSrc(article.image));
  }, [article.image]);

  function handleImageError() {
    if (imageSrc !== normalizeImageSrc(categoryFallback)) {
      setImageSrc(normalizeImageSrc(categoryFallback));
      return;
    }

    if (imageSrc !== normalizeImageSrc(genericCategoryImage)) {
      setImageSrc(normalizeImageSrc(genericCategoryImage));
    }
  }

  return (
    <article className="overflow-hidden rounded-[12px] border border-[#dce4f0] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.05)]">
      <img
        src={imageSrc}
        alt={article.title}
        loading="lazy"
        onError={handleImageError}
        className="h-48 w-full bg-[#eef5ff] object-cover sm:h-[220px]"
      />
      <div className="p-4">
        <h3 className="text-[16px] font-semibold leading-[1.4] text-black sm:min-h-[68px] sm:text-[17px]">{article.title}</h3>
        <ArticleMeta author={article.author} category={article.category} hits={article.hits} />
        <p className="mt-4 text-[14px] leading-[1.75] text-[#334d74] sm:mt-5 sm:min-h-[74px] sm:leading-[1.8]">{article.excerpt}</p>
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
          <div className="flex flex-col gap-3 text-[15px] text-[#1d2c46] sm:flex-row sm:items-center sm:gap-6">
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
      <div className="flex flex-wrap items-center gap-3 px-4 py-4 sm:gap-4">
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
      <main className="mx-auto max-w-[1100px] px-3 pb-16 pt-[104px] sm:px-4 sm:pt-[112px] md:pt-[104px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_328px]">
          <div className="min-w-0">
            <section className="rounded-[14px] bg-[#f7f9fc] p-4 sm:p-5">
              <h1 className="text-[24px] font-semibold text-black sm:text-[28px]">{page.title}</h1>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#213a61] sm:text-[16px] sm:leading-[1.65]">{page.description}</p>
            </section>

            <section className="mt-4 grid gap-4 md:grid-cols-2">
              {page.cards.map((article) => (
                <ArticleCard key={article.title} article={article} />
              ))}
            </section>

            <div className="mt-4 flex flex-col gap-4 rounded-[12px] border border-[#e4eaf4] bg-white px-4 py-4 md:flex-row md:items-center md:justify-between">
              <p className="text-[14px] text-[#6c7b92]">{page.articleCountLabel}</p>
              <div className="-mx-1 overflow-x-auto pb-1">
                <div className="flex w-max items-center gap-2 px-1 sm:flex-wrap sm:justify-end">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      className={`inline-flex h-[34px] min-w-[34px] items-center justify-center rounded-[10px] border px-2 text-[14px] sm:text-[15px] ${
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
                    className="inline-flex h-[34px] min-w-[34px] items-center justify-center rounded-[10px] border border-[#1663f6] bg-white px-4 text-[14px] text-[#1663f6] sm:text-[15px]"
                  >
                    {page.nextPage}
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-[34px] items-center gap-2 rounded-[10px] border border-[#1663f6] bg-white px-4 text-[14px] text-[#1663f6] sm:text-[15px]"
                  >
                    Next <MoveRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <aside className="min-w-0 space-y-4">
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
