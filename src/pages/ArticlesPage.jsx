import { ArrowRight } from 'lucide-react';
import { articleCategories } from '../data/articlesData.js';

function ArticleCard({ category }) {
  return (
    <article className="rounded-[12px] border border-[#d9dee8] bg-white p-[14px] shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-[18px] font-semibold text-black">{category.name}</h3>
        <span className="rounded-full bg-[#3f4d68] px-4 py-[5px] text-[12px] font-semibold text-white">
          Article Count: {category.articleCount}
        </span>
      </div>

      <img
        src={category.image}
        alt={category.name}
        className="h-[200px] w-full rounded-[12px] object-cover"
      />

      <p className="mt-4 min-h-[92px] text-[14px] leading-[1.35] text-[#384a69]">
        {category.description}
      </p>

      <a
        href="#"
        className="mt-4 inline-flex h-[32px] w-full items-center justify-center gap-2 rounded-[8px] bg-[#d9e9ff] text-[14px] font-semibold text-[#18479f] no-underline"
      >
        View More <ArrowRight size={16} />
      </a>
    </article>
  );
}

export default function ArticlesPage() {
  return (
    <>
      <main className="mx-auto max-w-[1320px] px-3 pb-10 pt-[122px] md:px-4 md:pt-[132px]">
        <section className="text-center">
          <h1 className="text-[34px] font-black tracking-[0.02em] text-black">INSURANCE ARTICLES</h1>
          <p className="mt-4 text-[18px] italic text-[#ff7b39]">
            "Be curious always! For knowledge will not acquire you; you must acquire it". - Sudie Back.
          </p>
          <p className="mx-auto mt-5 max-w-[1240px] text-[18px] leading-[1.45] text-black">
            In this section, you will find a comprehensive list of well-researched articles on insurance,
            helping you to make informed decisions on buying insurance. This in-depth library of consumer
            insurance articles will make you understand all facets of insurance, including life, health,
            motor, travel, home and investments. Dive in to know about the various tips and advice related
            to the insurance sector.
          </p>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articleCategories.map((category) => (
            <ArticleCard key={category.slug} category={category} />
          ))}
        </section>
      </main>
    </>
  );
}
