import { useEffect, useState } from 'react';

const sliderImages = [
  {
    src: 'https://static.pbcdn.in/pbpartners-cdn/images/Become-Agent-copy.webp',
    alt: 'Become an insurance agent',
  },
  {
    src: 'https://static.pbcdn.in/pbpartners-cdn/images/Who-can-join-us-copy.webp',
    alt: 'Who can join PBPartners',
  },
  {
    src: 'https://static.pbcdn.in/pbpartners-cdn/images/Why-You-Should-Join-Us--copy.webp',
    alt: 'Why you should join PBPartners',
  },
];

const initialFormState = {
  loginIdentifier: '',
  mobileNumber: '',
};

export default function Hero({ authMode = 'login', onAuthModeChange }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [formState, setFormState] = useState(initialFormState);
  const [formNotice, setFormNotice] = useState(null);

  const isRegisterMode = authMode === 'register';
  const heroDesktopHeightClass = isRegisterMode ? 'md:min-h-[720px]' : 'md:h-[538px]';
  const loginValue = formState.loginIdentifier.trim();
  const registerValue = formState.mobileNumber.trim();
  const canSendOtp = /^\d{10}$/.test(loginValue) || /^[a-zA-Z0-9]{6,}$/.test(loginValue);
  const canRegister = /^\d{10}$/.test(registerValue);

  function updateField(fieldName, value) {
    setFormState((current) => ({
      ...current,
      [fieldName]: value,
    }));
    setFormNotice(null);
  }

  function handlePrimaryAction() {
    if (isRegisterMode) {
      if (!canRegister) {
        setFormNotice({
          type: 'error',
          message: 'Please enter a valid 10-digit mobile number.',
        });
        return;
      }

      setFormNotice({
        type: 'success',
        message: `Registration request received for ${registerValue}.`,
      });
      return;
    }

    if (!canSendOtp) {
      setFormNotice({
        type: 'error',
        message: 'Please enter a valid mobile number or partner code.',
      });
      return;
    }

    setFormNotice({
      type: 'success',
      message: `OTP sent successfully to ${loginValue}.`,
    });
  }

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % sliderImages.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setFormState(initialFormState);
    setFormNotice(null);
  }, [authMode]);

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
        <div className={`relative h-auto pb-10 md:pb-0 ${heroDesktopHeightClass}`}>
          <div className="w-full md:w-[520px]">
            <div className="pt-[30px]">
              <h1 className="text-[22px] font-medium leading-[30px] text-[#344055]">
                Become PoSP Insurance Agent &amp; Sell Insurance Products Online
              </h1>
              <p className="mt-2 text-[14px] text-[#707070]">Zero investment required</p>
            </div>

            <div className="mt-[15px]">
              <div className="relative min-h-[300px] overflow-hidden rounded-[8px]">
                {sliderImages.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                      index === activeSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative mt-[20px] flex items-center justify-center gap-[10px]">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Slide ${index + 1}`}
                  aria-pressed={index === activeSlide}
                  onClick={() => setActiveSlide(index)}
                  className={`h-[10px] w-[10px] rounded-full border border-[#0065ff] ${
                    index === activeSlide ? 'bg-[#0065ff]' : 'bg-transparent'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 md:absolute md:left-0 md:right-[-635px] md:top-[115px] md:mt-0 md:mx-auto md:w-[380px]">
            <div className="flex h-auto w-full rounded-[10px] bg-white p-[30px] shadow-[0_0_15px_rgba(170,170,170,0.16)] md:min-h-[460px]">
              <div className="w-full px-0 md:px-[10px]">
                <p className="mb-[25px] pt-[52px] text-[20px] font-medium leading-normal text-[#344055]">
                  {isRegisterMode ? 'Register as a PBPartners Advisor!' : 'Login to your Account!'}
                  <small className="mt-[10px] block max-w-[280px] text-[13px] font-normal leading-[18px] text-[#b2b2b9]">
                    {isRegisterMode
                      ? 'Create your account to start your insurance advisor journey.'
                      : 'If you have an account, sign in with your mobile number.'}
                  </small>
                </p>

                {isRegisterMode ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={formState.mobileNumber}
                      onChange={(event) => updateField('mobileNumber', event.target.value)}
                      placeholder="Mobile Number"
                      className="h-[48px] w-full rounded-[4px] border border-[#cad4e4] bg-white px-[14px] text-[14px] text-[#344055] outline-none placeholder:text-[#6a7381]"
                    />
                  </div>
                ) : (
                  <div className="relative mb-[25px]">
                    <input
                      type="text"
                      value={formState.loginIdentifier}
                      onChange={(event) => updateField('loginIdentifier', event.target.value)}
                      placeholder="Mobile Number/Partner Code"
                      className="h-[54px] w-full rounded-[4px] border border-[#cad4e4] bg-white px-[14px] pr-10 text-[14px] text-[#344055] outline-none placeholder:text-[#6a7381]"
                    />
                    <img
                      src="https://www.pbpartners.com/images/icon_mobile.svg"
                      alt=""
                      className="absolute right-[16px] top-[14px] h-[28px] w-[18px]"
                    />
                  </div>
                )}

                <button
                  type="button"
                  onClick={handlePrimaryAction}
                  disabled={isRegisterMode ? !canRegister : !canSendOtp}
                  className={`mt-2 h-[54px] w-full rounded-[4px] px-[10px] text-[15px] font-medium transition ${
                    isRegisterMode
                      ? canRegister
                        ? 'bg-[#1663f6] text-white'
                        : 'bg-[#d3ecff] text-[#aeb7c4]'
                      : canSendOtp
                        ? 'bg-[#1663f6] text-white'
                        : 'bg-[#d3ecff] text-[#aeb7c4]'
                  }`}
                >
                  {isRegisterMode ? 'Register Now' : 'Send OTP'}
                </button>

                {formNotice ? (
                  <p
                    className={`mt-3 text-[13px] ${
                      formNotice.type === 'success' ? 'text-[#1f7a36]' : 'text-[#d43d3d]'
                    }`}
                  >
                    {formNotice.message}
                  </p>
                ) : null}

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
