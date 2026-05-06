export const Certifications = () => (
<section className="bg-white py-12 border-y border-slate-100 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {[
              "Certificación Ambiental",
              "Disposición Final Legal",
              "Economía Circular B2B",
              "Normativa ISO 14001",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3 font-bold text-slate-500"
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-sm ${i % 2 === 0 ? "bg-[#2ab5e1]" : "bg-[#7dc143]"}`}
                >
                  ✓
                </div>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>
);