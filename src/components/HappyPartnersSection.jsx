import { useState } from 'react';

const reviews = [
  {
    name: 'Sakshi Gupta',
    image: 'https://www.pbpartners.com/frontend/images/woman.png',
    text: 'Selling insurance policies, online with PBPartners, is such a smooth experience. I start and finish work as per my convenience. The complete process saves so much time.',
  },
  {
    name: 'Utkarsh Deewan',
    image: 'https://www.pbpartners.com/frontend/images/boy.png',
    text: 'Such a wide range of insurance products, I compare the quotes and choose the best fit for my customers. My customers are happy to get quick policies and I am happy to get timely payments.',
  },
  {
    name: 'Rahul Bhatiya',
    image: 'https://www.pbpartners.com/frontend/images/boy.png',
    text: 'With detailed reports and analytics I am able to extract meaningful insights of my daily sales. I set my own targets and track the conversion. I now put more focused efforts.',
  },
];

export default function HappyPartnersSection() {
  const [index, setIndex] = useState(0);
  const active = reviews[index];

  function prev() {
    setIndex((current) => (current - 1 + reviews.length) % reviews.length);
  }

  function next() {
    setIndex((current) => (current + 1) % reviews.length);
  }

  return (
    <section className="bg-white px-4 py-[38px] sm:px-6">
      <div className="mx-auto max-w-[1040px]">
        <div className="text-center">
          <h2 className="text-[25px] font-medium text-black sm:text-[28px]">Happy Partners</h2>
          <div className="mx-auto mt-4 h-px w-[60px] bg-[#4c81fe]" />
        </div>

        <div className="relative mx-auto mt-10 min-h-[300px] max-w-[1040px]">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 top-[118px] hidden -translate-y-1/2 md:block"
          >
            <img src="https://www.pbpartners.com/images/icon_prev.svg" alt="" className="h-10 w-10" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute right-0 top-[118px] hidden -translate-y-1/2 md:block"
          >
            <img src="https://www.pbpartners.com/images/icon_next.svg" alt="" className="h-10 w-10" />
          </button>

          <div className="mx-auto max-w-[600px] pt-[15px] text-center">
            <img
              src={active.image}
              alt={active.name}
              className="mx-auto h-[70px] w-[70px] rounded-full border-[8px] border-white"
            />
            <p className="mt-[10px] text-[18px] font-medium text-[#344055]">{active.name}</p>
            <p className="mt-6 text-[16px] leading-[1.7] text-[#344055]">{active.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
