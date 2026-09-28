

const steps = [
  {
    number: "01",
    title: "Proposal",
    description: "Detailed proposal with timeline and cost.",
    color: "blue",
    innerGradient: "bg-gradient-to-br from-[#FFF4EB] via-[#FFFAF5] to-[#FFEFE2]",
    position: "right",
    rotate: "rotate-[2deg] md:rotate-[3deg]",
  },
  {
    number: "02",
    title: "Design Concept",
    description:
      "We will create a design that your customer will actually love, making your business stand out.",
    color: "purple",
    innerGradient: "bg-gradient-to-br from-[#F7F2FA] via-[#FAF6FC] to-[#F1EAFA]",
    position: "left",
    rotate: "-rotate-[2deg] md:-rotate-[4deg]",
  },
  {
    number: "03",
    title: "Testing & QA",
    description:
      "Rigorous automated and manual testing to ensure rock-solid quality and security.",
    color: "pink",
    innerGradient: "bg-gradient-to-br from-[#FFF0F5] via-[#FFF8FA] to-[#FFE4EE]",
    position: "right",
    rotate: "rotate-[2deg] md:rotate-[3deg]",
  },
  {
    number: "04",
    title: "Optimization",
    description:
      "Fine-tuning performance, SEO, and user experience for maximum speed and ROI.",
    color: "green",
    innerGradient: "bg-gradient-to-br from-[#F0FDF4] via-[#F8FEFA] to-[#DCFCE7]",
    position: "left",
    rotate: "-rotate-[2deg] md:-rotate-[3deg]",
  },
  {
    number: "05",
    title: "Development",
    description:
      "Senior Full-Stack Developers 🤯 will working on your project. available for any enquiry.",
    color: "blue",
    innerGradient: "bg-gradient-to-br from-[#FFF4EB] via-[#FFFAF5] to-[#FFEFE2]",
    position: "right",
    rotate: "rotate-[2deg] md:rotate-[4deg]",
  },
];

const pinStyles = {
  blue: {
    head: "from-[#3B82F6] via-[#2563EB] to-[#1D4ED8]",
    shadow: "shadow-[0_10px_20px_rgba(37,99,235,0.4)]",
    glow: "bg-blue-500/30",
    text: "text-[#2563EB]",
  },
  purple: {
    head: "from-[#A855F7] via-[#9333EA] to-[#7E22CE]",
    shadow: "shadow-[0_10px_20px_rgba(147,51,234,0.4)]",
    glow: "bg-purple-500/30",
    text: "text-[#9333EA]",
  },
  pink: {
    head: "from-[#EC4899] via-[#DB2777] to-[#BE185D]",
    shadow: "shadow-[0_10px_20px_rgba(219,39,119,0.4)]",
    glow: "bg-pink-500/30",
    text: "text-[#DB2777]",
  },
  green: {
    head: "from-[#10B981] via-[#059669] to-[#047857]",
    shadow: "shadow-[0_10px_20px_rgba(5,150,105,0.4)]",
    glow: "bg-emerald-500/30",
    text: "text-[#059669]",
  },
};

function PushPin({ color = "blue" }) {
  const style = pinStyles[color];

  return (
    <div className="absolute -top-[18px] left-1/2 z-30 -translate-x-1/2">
      {/* Soft colored blur under pin base */}
      <div
        className={`absolute left-1/2 top-4 h-8 w-12 -translate-x-1/2 rounded-full ${style.glow} blur-md`}
      />

      {/* Circular 3D pushpin head */}
      <div
        className={`
          relative flex h-11 w-11 items-center justify-center
          rounded-full bg-gradient-to-b ${style.head}
          ${style.shadow}
        `}
      >
        {/* Top glossy ring highlight */}
        <div className="absolute top-1 h-4 w-7 rounded-full bg-white/35 blur-[0.5px]" />

        {/* Inner depressed pin center */}
        <div className="relative flex h-6 w-6 items-center justify-center rounded-full border border-black/10 bg-gradient-to-b from-black/10 to-transparent shadow-inner">
          <div className="h-3 w-3 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}

function PaperCard({ step }) {
  const style = pinStyles[step.color];

  return (
    <div
      className={`
        relative w-full max-w-[320px] sm:max-w-[370px]
        ${step.rotate}
        transition-transform duration-300 ease-out
        hover:rotate-0 hover:-translate-y-2
      `}
    >
      {/* Outer Paper Frame */}
      <div
        className="
          relative overflow-visible
          rounded-[28px] sm:rounded-[32px]
          bg-white
          p-2.5 sm:p-3
          shadow-[0_20px_45px_rgba(0,0,0,0.08)]
        "
      >
        <PushPin color={step.color} />

        {/* Inner Tinted Gradient Card */}
        <div
          className={`
            rounded-[20px] sm:rounded-[24px]
            ${step.innerGradient}
            px-5 py-6 sm:px-7 sm:pb-8 sm:pt-7
          `}
        >
          {/* Number */}
          <div
            className={`
              mb-1.5 sm:mb-2
              font-sans
              text-[20px] sm:text-[22px]
              font-bold
              italic
              ${style.text}
            `}
          >
            {step.number}
          </div>

          {/* Title */}
          <h3 className="mb-1.5 sm:mb-2 text-[18px] sm:text-[20px] font-bold tracking-tight text-slate-900">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-[14px] sm:text-[15px] leading-[1.5] text-slate-600 font-normal">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PinnedProcess() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white px-4 sm:px-6 py-16 sm:py-24">
      {/* 4-Side Blurry Type Background Over Pure White */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Soft Ambient Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-slate-100/60 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-blue-50/40 blur-[150px]" />

        {/* Top Vignette Blur */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent backdrop-blur-[8px]" />

        {/* Bottom Vignette Blur */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent backdrop-blur-[8px]" />

        {/* Left Vignette Blur */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent backdrop-blur-[8px]" />

        {/* Right Vignette Blur */}
        <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent backdrop-blur-[8px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-14 sm:mb-20 text-center">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Our Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            From idea to reality
          </h2>
        </div>

        {/* Timeline Path Container */}
        <div className="relative">
          {/* Mobile Curved Connecting Path */}
          <svg
            className="pointer-events-none absolute inset-0 z-0 block sm:hidden h-full w-full"
            viewBox="0 0 400 1600"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="
                M 260 80
                C 120 100, 100 240, 130 360
                C 160 480, 280 520, 260 680
                C 240 820, 100 880, 130 1020
                C 160 1160, 280 1200, 260 1340
                C 240 1440, 180 1500, 120 1520
              "
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
          </svg>

          {/* Desktop/Tablet Curved Connecting Path */}
          <svg
            className="pointer-events-none absolute inset-0 z-0 hidden sm:block h-full w-full"
            viewBox="0 0 1000 1900"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="
                M 650 100
                C 450 120, 350 220, 320 350
                C 300 480, 620 540, 650 700
                C 680 860, 340 920, 320 1080
                C 300 1240, 620 1300, 650 1480
                C 620 1600, 420 1660, 280 1680
              "
              stroke="#CBD5E1"
              strokeWidth="2.5"
              strokeDasharray="7 7"
              strokeLinecap="round"
            />
          </svg>

          {/* 5 Step Cards */}
          <div className="relative z-10 space-y-12 sm:space-y-20 md:space-y-28">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`
                  flex
                  ${
                    step.position === "right"
                      ? "justify-end sm:pr-8 md:pr-12"
                      : "justify-start sm:pl-8 md:pl-12"
                  }
                `}
              >
                <PaperCard step={step} />
              </div>
            ))}

            {/* Bottom Callout Text after Step 05 */}
            <div className="flex justify-start pt-4 sm:pt-6 pl-2 sm:pl-8">
              <div className="max-w-[260px] sm:max-w-[300px] -rotate-[3deg] text-left">
                <p className="text-lg sm:text-xl font-medium leading-tight text-slate-800 md:text-2xl">
                  Your <span className="text-red-500 font-semibold">all in one</span>
                  <br />
                  Software Development Partner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}