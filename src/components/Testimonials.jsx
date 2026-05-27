export default function Testimonials() {
  const reviews = [
    ['Agency Owner', 'The dashboard design is simple and helps advisors understand their daily targets.'],
    ['Insurance Advisor', 'Lead tracking and product cards make the platform feel professional.'],
    ['Sales Manager', 'This demo can be extended into a full CRM and partner portal.'],
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-center text-slate-900">Partner feedback</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {reviews.map(([name, text]) => (
            <div key={name} className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100">
              <p className="text-slate-600">“{text}”</p>
              <h3 className="font-black mt-5 text-blue-700">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
