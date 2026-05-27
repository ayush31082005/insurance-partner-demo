const sliderImages = [
  'https://static.pbcdn.in/pbpartners-cdn/images/Become-Agent-copy.webp',
  'https://static.pbcdn.in/pbpartners-cdn/images/Who-can-join-us-copy.webp',
  'https://static.pbcdn.in/pbpartners-cdn/images/Why-You-Should-Join-Us--copy.webp',
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-white pt-[76px]"
      style={{
        backgroundImage:
          "url('https://www.pbpartners.com/images/form-bg.svg'), linear-gradient(180deg, #ffffff 0%, #ffffff 50%, #eaf2fe 100%)",
        backgroundPosition: 'right bottom, center',
        backgroundRepeat: 'no-repeat, no-repeat',
      }}
    >
      <div className="mx-auto max-w-[1040px] px-4">
        <div className="relative h-auto pb-10 md:h-[538px] md:pb-0">
          <div className="w-full md:w-[520px]">
            <div className="pt-[30px]">
              <h1 className="text-[22px] font-medium leading-[30px] text-[#344055]">
                Become PoSP Insurance Agent &amp; Sell Insurance Products Online
              </h1>
              <p className="mt-2 text-[14px] text-[#707070]">Zero investment required</p>
            </div>

            <div className="mt-[15px]">
              <img
                src={sliderImages[0]}
                alt="Become an insurance agent"
                className="block min-h-[300px] w-full rounded-[8px] object-cover"
              />
            </div>

            <div className="relative mt-[20px] flex items-center justify-center gap-[10px]">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Slide ${index + 1}`}
                  className={`h-[10px] w-[10px] rounded-full border border-[#0065ff] ${
                    index === 0 ? 'bg-[#0065ff]' : 'bg-transparent'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 md:absolute md:left-0 md:right-[-635px] md:top-[115px] md:mt-0 md:mx-auto md:w-[380px]">
            <div className="flex h-auto w-full rounded-[10px] bg-white p-[30px] shadow-[0_0_15px_rgba(170,170,170,0.16)] md:h-[460px]">
              <div className="w-full px-0 md:px-[10px]">
                <p className="mb-[25px] pt-[52px] text-[20px] font-medium leading-normal text-[#344055]">
                  Login to your Account!
                  <small className="mt-[10px] block max-w-[280px] text-[13px] font-normal leading-[18px] text-[#b2b2b9]">
                    If you have an account, sign in with your mobile number.
                  </small>
                </p>

                <div className="relative mb-[25px]">
                  <input
                    type="text"
                    placeholder="Mobile Number/Partner Code"
                    className="h-[54px] w-full rounded-[4px] border border-[#cad4e4] bg-white px-[14px] pr-10 text-[14px] text-[#344055] outline-none placeholder:text-[#6a7381]"
                  />
                  <img
                    src="https://www.pbpartners.com/images/icon_mobile.svg"
                    alt=""
                    className="absolute right-[16px] top-[14px] h-[28px] w-[18px]"
                  />
                </div>

                <button
                  type="button"
                  className="mt-2 h-[54px] w-full rounded-[4px] bg-[#d3ecff] px-[10px] text-[15px] font-medium text-[#aeb7c4]"
                >
                  Send OTP
                </button>

                <div className="mt-5">
                  <div className="flex gap-[10px]">
                    <a
                      href="https://apps.apple.com/in/app/pbpartners/id1622463975"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1"
                    >
                      <img
                        src="https://www.pbpartners.com/images/app-store.svg"
                        alt="Download on the App Store"
                        className="w-full"
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.pbpartners.consumer&hl=en_IN&gl=US"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1"
                    >
                      <img
                        src="https://www.pbpartners.com/images/icon-gplay.svg"
                        alt="Get it on Google Play"
                        className="w-full"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
