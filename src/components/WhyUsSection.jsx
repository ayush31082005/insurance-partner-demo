const reasons = [
  {
    title: 'Biggest Product Line',
    text: '18 Insurance Providers on ONE Platform',
    icon: 'https://www.pbpartners.com/images/presentation.svg',
    tone: 'bg-[#f1e5f8]',
  },
  {
    title: 'Time Flexibility',
    text: 'Work Anytime, Anywhere!',
    icon: 'https://www.pbpartners.com/images/happy-hour.svg',
    tone: 'bg-[#dfebf9]',
  },
  {
    title: 'Zero Investment',
    text: 'Free Registration',
    icon: 'https://www.pbpartners.com/images/coupon.svg',
    tone: 'bg-[#f5dde2]',
  },
  {
    title: 'Unlimited Earning Potential',
    text: 'Attractive Payouts',
    icon: 'https://www.pbpartners.com/images/forever.svg',
    tone: 'bg-[#dcf2e1]',
  },
  {
    title: 'Professional Support',
    text: 'Ingenious Technology & Support from PBPartners Team',
    icon: 'https://www.pbpartners.com/images/support-why.svg',
    tone: 'bg-[#fef3ef]',
  },
  {
    title: 'Vast Network',
    text: 'Be part of a quality & value based community',
    icon: 'https://www.pbpartners.com/images/high-signal.svg',
    tone: 'bg-[#fef7e4]',
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-white px-4 py-[38px] sm:px-6">
      <div className="mx-auto max-w-[1040px]">
        <div className="text-center">
          <h2 className="text-[25px] font-medium text-black sm:text-[28px]">
            Why Become an Insurance Advisor with PBPartners?
          </h2>
          <div className="mx-auto mt-4 h-px w-[60px] bg-[#4c81fe]" />
        </div>

        <div className="mt-10 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="px-4 text-center">
              <div className={`mx-auto mb-[10px] flex h-[70px] w-[70px] items-center justify-center rounded-full ${reason.tone}`}>
                <img src={reason.icon} alt="" className="h-[34px] w-[34px]" />
              </div>
              <h3 className="text-[18px] font-medium leading-[1.35] text-[#344055]">{reason.title}</h3>
              <p className="mt-[3px] text-[14px] leading-[1.5] text-[#344055]">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
