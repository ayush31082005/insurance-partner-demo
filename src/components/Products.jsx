import { ArrowRight, ArrowLeft } from 'lucide-react';
import { products } from '../data/siteData.js';

export default function Products() {
  return (
    <section id="products" className="overflow-hidden bg-[linear-gradient(180deg,#eef5ff_0%,#ffffff_100%)] px-4 py-[30px] sm:px-6">
      <div className="mx-auto max-w-[1232px]">
        <div className="mb-6 flex items-center gap-5 text-[#2384ff]">
          <button
            type="button"
            aria-label="Previous"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-transparent text-[#2384ff] md:inline-flex"
          >
            <ArrowLeft size={22} />
          </button>

          <div className="grid w-full gap-4 md:grid-cols-4">
            {products.map(({ title, icon: Icon, wikipediaUrl }) => (
              <article
                key={title}
                className="flex min-h-[358px] flex-col items-center justify-between rounded-[4px] border border-[#dfe7f5] bg-white px-6 py-10 text-center"
              >
                <div className="flex flex-1 flex-col items-center">
                  <div className="mt-6 text-[#2384ff]">
                    <Icon size={38} strokeWidth={2.1} />
                  </div>
                  <h3 className="mt-[66px] max-w-[240px] text-[22px] font-medium leading-[1.2] text-[#344055]">
                    {title}
                  </h3>
                </div>

                <a
                  href={wikipediaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 inline-flex items-center gap-2 text-[15px] font-normal text-[#2384ff]"
                >
                  Read more <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
