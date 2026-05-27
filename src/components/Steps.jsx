export default function Steps() {
  const steps = ['Register as partner', 'Complete digital verification', 'Start sharing quotes', 'Earn and track commission'];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-blue-600 font-black uppercase tracking-wide">Simple Process</p>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">Start in four steps</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {steps.map((step, index) => (
            <div key={step} className="relative bg-slate-50 rounded-3xl p-7 border">
              <div className="mx-auto -mt-12 h-14 w-14 rounded-2xl bg-blue-600 text-white grid place-items-center text-xl font-black shadow-lg">{index + 1}</div>
              <h3 className="font-black mt-5 text-lg">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
