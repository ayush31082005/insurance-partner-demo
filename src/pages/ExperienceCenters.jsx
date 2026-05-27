import { experienceCenters, featuredExperienceCenters } from '../data/siteData.js';

function CenterCard({ center }) {
  return (
    <div className="mb-[42px]">

      <div className="rounded-[4px] border border-[#edf0f5] bg-white">
        <div className="border-b border-[#eeeeee] bg-[rgba(0,0,0,0.01)] px-4 py-[11px] text-center text-[13px] font-medium text-[#294e7c]">
          {center.title}
        </div>
        <div className="px-3 py-[15px] text-center text-[16px] leading-[1.65] text-[#283f74] sm:px-5">
          {center.prefix ? <div>{center.prefix}</div> : null}
          <div>{center.address}</div>
          {center.directions ? (
            <p className="mt-[8px]">
              <a
                href={center.directions}
                target="_blank"
                rel="noreferrer"
                className="text-[16px] text-[#406eff] underline underline-offset-2"
              >
                Get Directions
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceCenters() {
  return (
    <section className="bg-white px-4 py-[25px] sm:px-6">
      <div className="mx-auto max-w-[1040px]">
        <div className="text-center">
          <h2 className="inline-block pb-[15px] text-[24px] font-medium text-black">
            Taking Insurance to Bharat!
          </h2>
          <div className="mx-auto h-px w-[60px] bg-[#4c81fe]" />
          <h1 className="text-[24px] font-medium text-black">Taking Insurance to Bharat!</h1>
        </div>

        <div className="mt-[35px] space-y-5 text-[14px] leading-[2] text-[#344055]">
          <p>
            PBPartners, the PoSP business of Policybazaar, is one of India&apos;s leading B2B2C insuretech
            platforms with a strong network of over 2.25 Lakh + registered agent partners.
          </p>
          <p>
            Our presence is marked all over PAN India, serving 18000+ pin codes. Policybazaar&apos;s PBP
            Experience Centers are based out of Tier-1, Tier-2, and Tier-3 cities to ensure that our agent
            partners &amp; employees can come together and have meaningful business discussions on insurance
            &amp; financial products.
          </p>
        </div>

        <div className="text-center">
          <h3 className="my-[35px] text-[16px] font-medium text-[#ff9800]">
            Policybazaar&apos;s PBP Experience Centre
          </h3>
        </div>

        <div className="relative pb-2 md:pr-[500px]">
          <img
            src="https://static.pbcdn.in/pbpartners-cdn/images/indiamap-experience.jpg"
            alt="India experience centers map"
            className="pointer-events-none absolute right-0 top-0 hidden w-[450px] max-w-none md:block"
          />

          <div className="relative z-10 grid gap-x-6 md:grid-cols-2">
            {featuredExperienceCenters.map((center) => (
              <CenterCard key={center.title} center={center} />
            ))}
          </div>
        </div>

        <div className="mt-2 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
          {experienceCenters.map((center) => (
            <CenterCard key={center.title} center={center} />
          ))}
        </div>
      </div>
    </section>
  );
}
