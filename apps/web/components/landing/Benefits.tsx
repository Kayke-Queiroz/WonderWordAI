type Benefit = {
  emoji: string;
  title: string;
  desc: string;
  span?: boolean;
  comingSoon?: boolean;
};

const benefits: Benefit[] = [
  {
    emoji: "📸",
    title: "Scan & Read",
    desc: "Snap a photo of any worksheet and WonderWord turns it into an interactive reading session. When your child stumbles on a word, it becomes a quick, playful practice moment.",
    span: true,
  },
  {
    emoji: "🌍",
    title: "Themed Story Worlds",
    desc: "Pick a theme and watch WonderWord create a brand-new story just for your child — then explore it by reading along, typing it out to practice spelling, or listening to it narrated aloud.",
    span: true,
  },
  {
    emoji: "🔍",
    title: "Word Explorer",
    desc: "Type any word and get a simple, kid-friendly definition with a picture to match.",
  },
  {
    emoji: "🎨",
    title: "Word Vision",
    desc: "Watch any word come to life as a fun, colorful illustration made just for that word.",
  },
  {
    emoji: "📊",
    title: "Parent Dashboard",
    desc: "Biweekly progress reports without the \"How was school?\" struggle — see reading speed, accuracy, and focus areas at a glance, with printable practice activities.",
    span: true,
  },
  {
    emoji: "🎙️",
    title: "Read Aloud",
    desc: "Practice reading out loud anytime, even without a worksheet on hand.",
    comingSoon: true,
  },
  {
    emoji: "🎵",
    title: "Word Beats",
    desc: "Turn any word into a fun, catchy song.",
    comingSoon: true,
  },
];

export function Benefits() {
  return (
    <section className="px-6 sm:px-12 py-20">
      <h2 className="text-center text-[32px] font-serif text-[#a3352b] font-bold">
        Magic in Every Page
      </h2>

      <div className="mt-12 grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {benefits.map((b) => (
          <div
            key={b.title}
            className={`relative rounded-3xl p-7 min-h-[160px] ${b.comingSoon
              ? "bg-[#F2F2F2] opacity-80"
              : b.title === "Word Vision"
                ? "bg-[#CFF2E8]"
                : b.title === "Word Explorer"
                  ? "bg-[#FBF0C7]"
                  : "bg-[#F2F2F2]"
              } ${b.span ? "sm:col-span-2" : ""}`}
          >
            {b.comingSoon ? (
              <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-white">
                Coming soon
              </span>
            ) : null}
            <p className="text-2xl">{b.emoji}</p>
            <h3 className="mt-4 text-xl font-black text-[#1A1A2E]">
              {b.title}
            </h3>
            <p className="mt-2 text-sm leading-5 text-gray-600 max-w-sm">
              {b.desc}
            </p>
            {b.title === "Parent Dashboard" && (
              <div className="mt-4 bg-white rounded-xl p-4 shadow-sm w-full sm:w-44">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-gray-500">Weekly Goal</span>
                  <span className="font-black text-[#0F9C8E]">85%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-gray-100">
                  <div
                    className="h-2 rounded-full bg-[#0F9C8E]"
                    style={{ width: "85%" }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
