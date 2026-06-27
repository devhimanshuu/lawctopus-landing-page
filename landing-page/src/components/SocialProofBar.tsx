const stats = [
  { num: "54", label: "Live Sessions" },
  { num: "24+", label: "Agreements Drafted" },
  { num: "85", label: "Hrs Live Content" },
  { num: "32", label: "Hrs Recorded Content" },
  { num: "800+", label: "Pages Resources" },
];

export default function SocialProofBar() {
  return (
    <div className="bg-white border-b border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-extrabold text-navy">
                {s.num}
              </span>
              <span className="text-sm text-gray-600 font-medium">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
