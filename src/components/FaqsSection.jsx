import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is PoSP?',
    answer:
      'A PoSP (Point of Sales Person) is a certified insurance agent who is authorized to sell specific types of insurance products, such as health, motor, life, and other insurance policies. PoSPs work with insurance intermediaries and are equipped with training to guide customers through the process of selecting the right insurance coverage.',
  },
  {
    question: 'Who can become a PoSP and what are the criteria?',
    answer:
      'Anyone who is at least 18 years old and has completed education up to the 10th standard can become a PoSP. This role is ideal for individuals like students, housewives, retirees, or professionals looking for an additional income source.',
  },
  {
    question: 'What is the enrollment process?',
    answer:
      'To enroll as a PoSP, you need to sign up with an insurance intermediary like PBPartners. After signing up, you must complete mandatory training and pass an IRDAI certification exam. Once certified, you can start selling policies.',
  },
  {
    question: 'Does it require any investment?',
    answer:
      'Becoming a PoSP insurance agent is a zero-investment career. You can work at your own pace, part-time or full-time, while building an insurance career.',
  },
  {
    question: 'Is becoming an insurance agent permanent employment?',
    answer:
      'Yes, one can work as a PoSP insurance agent full-time. Many advisors choose this role as an independent full-time profession and build a stable income through policy sales.',
  },
  {
    question: 'How do I sell? Who could be my customer?',
    answer:
      'As a PoSP, you can sell insurance policies to friends, family, local businesses, and anyone looking for health, motor, life, or other insurance products through both online and offline channels.',
  },
];

export default function FaqsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white px-4 py-[38px] sm:px-6">
      <div className="mx-auto max-w-[1040px]">
        <div className="text-center">
          <h2 className="text-[25px] font-medium text-black sm:text-[28px]">
            FAQs on Becoming an Insurance PoSP
          </h2>
          <div className="mx-auto mt-4 h-px w-[60px] bg-[#4c81fe]" />
        </div>

        <div className="mt-10 grid items-center gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div className="text-center">
            <img
              src="https://static.pbcdn.in/pbpartners-cdn/website/images/motor-faq.svg"
              alt="Insurance PoSP FAQ"
              className="mx-auto w-full max-w-[420px]"
            />
            <div className="mt-[25px]">
              <a
                href="#"
                className="inline-flex rounded-[4px] bg-[#2384ff] px-4 py-3 text-[16px] font-medium text-white"
              >
                Become Insurance PoSP
              </a>
            </div>
          </div>

          <div>
            {faqs.map((faq, index) => {
              const open = index === openIndex;

              return (
                <div key={faq.question} className="border-b border-[#f1f1f1]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className={`flex w-full items-center justify-between px-6 py-[18px] text-left text-[14px] font-medium ${
                      open ? 'bg-[#fafcff] text-[#0c63e4]' : 'bg-white text-[#111111]'
                    }`}
                  >
                    <span>{faq.question}</span>
                    {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>

                  {open ? (
                    <div className="bg-[#fafcff] px-6 pb-5 pt-3 text-[16px] leading-[1.6] text-[#344055]">
                      {faq.answer}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
