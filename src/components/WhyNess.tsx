import { useState } from "react"
import { 
  Shield, 
  Zap, 
  Brain, 
  Sparkles, 
  ArrowRight 
} from "lucide-react";
import React from "react"

const features = [
  {
    icon: Shield,
    title: "Safety by Design",
    shortDesc: "LFP chemistry with thermal protection",
    fullDesc:
      "Advanced BMS ensures highest safety standards with thermal runaway protection and fire-resistant design. Your family deserves the safest clean energy technology available.",
    benefit: "Zero fire incidents in 50,000+ installations • Peace of mind for generations",
    metric: "99.9%",
    metricLabel: "Safety Rating",
  },
  {
    icon: Zap,
    title: "Reliability That Lasts",
    shortDesc: "15 year+ design life with premium components",
    fullDesc:
      "Rigorous testing and premium components ensure consistent performance in Indian conditions with industry-leading longevity. Built to last generations, not just years.",
    benefit: "Tested in 45°C+ Indian summers • A system your children will inherit with pride",
    metric: "15+",
    metricLabel: "Year Warranty",
  },
  {
    icon: Brain,
    title: "Intelligence Built-In",
    shortDesc: "Smart energy management & monitoring",
    fullDesc:
      "ToD optimization, solar prioritization, and cloud-based monitoring provide intelligent energy management. Every optimization reduces your carbon footprint.",
    benefit: "Save up to 40% on bills • Eliminate tons of CO2 • Feel good about every kilowatt",
    metric: "40%",
    metricLabel: "Bill Reduction",
  },
  {
    icon: Sparkles,
    title: "Beautifully Simple",
    shortDesc: "Clean design with whisper-quiet operation",
    fullDesc:
      "Minimalist design complements modern homes with silent operation and seamless integration. Clean energy should look as beautiful as it feels.",
    benefit: "Quieter than a whisper at <35dB • Luxury aesthetics • Environmental consciousness made visible",
    metric: "<35dB",
    metricLabel: "Noise Level",
  },
]


const STEPS = [
  { key: "measure", label: "Measure", title: "Precision Testing" },
  { key: "grade", label: "Grade", title: "Quality Sorting" },
  { key: "group", label: "Group", title: "Perfect Matching" },
  { key: "assemble", label: "Assemble", title: "Expert Assembly" },
  { key: "qualify", label: "Qualify", title: "Final Validation" },
  { key: "digitalShield", label: "Digital Shield", title: "Smart Protection" },
  { key: "customer", label: "Customer", title: "Premium Experience" },
]

const MANUFACTURING_STORY = {
  home: {
    tagline: "Crafted for perfection. Built for life.",
    steps: [
      "Every cell undergoes precision measurement because your children deserve only the cleanest, safest energy.",
      "Cells are meticulously graded and sorted for perfect compatibility, creating systems that last generations.",
      "Matched cells are grouped into balanced teams that will serve your family with pride for decades.",
      "Expert assembly in temperature-controlled environments ensures each system becomes a family heirloom of clean energy.",
      "Rigorous validation testing guarantees only the finest systems reach your home, worthy of your environmental values.",
      "Advanced digital intelligence provides continuous monitoring, so you sleep peacefully knowing you're building a better tomorrow.",
      "Delivered as a complete premium experience that transforms how good it feels to make responsible choices.",
    ],
  },
}

function LuxuryStepIndicator({ step, index, isActive, onClick }: { step: any, index: number, isActive: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative focus:outline-none hover:scale-105 active:scale-95 transition-transform duration-300"
    >
      <div
        className={`
          w-20 h-20 rounded-2xl border backdrop-blur-xl
          flex items-center justify-center relative overflow-hidden
          transition-all duration-700 ease-out
          ${
            isActive
              ? "bg-card/95 border-border shadow-lg -translate-y-0.5"
              : "bg-card/60 border-border/40 hover:bg-card/80"
          }
        `}
      >
        <StepIcon name={step.key} active={isActive} />

        {isActive && <div className="absolute bottom-2 w-1 h-1 rounded-full bg-primary animate-pulse" />}
      </div>

      <div className="mt-3 text-center">
        <div
          className={`text-sm font-medium transition-colors duration-300 ${
            isActive ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          {step.label}
        </div>
      </div>
    </button>
  )
}

function StepIcon({ name, active, color }: { name: string, active: boolean, color?: string }) {
  const strokeWidth = 1.5

  const iconProps = {
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  }

  switch (name) {
    case "measure":
      return (
        <svg {...iconProps}>
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
          <circle cx="11" cy="11" r="3" />
        </svg>
      )
    case "grade":
      return (
        <svg {...iconProps}>
          <path d="M3 6h18" />
          <path d="M3 12h18" />
          <path d="M3 18h18" />
          <circle cx="9" cy="6" r="1" />
          <circle cx="15" cy="12" r="1" />
          <circle cx="12" cy="18" r="1" />
        </svg>
      )
    case "group":
      return (
        <svg {...iconProps}>
          <circle cx="9" cy="12" r="3" />
          <circle cx="15" cy="12" r="3" />
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        </svg>
      )
    case "assemble":
      return (
        <svg {...iconProps}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      )
    case "qualify":
      return (
        <svg {...iconProps}>
          <path d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      )
    case "digitalShield":
      return (
        <svg {...iconProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="1" />
        </svg>
      )
    case "customer":
      return (
        <svg {...iconProps}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    default:
      return null
  }
}

function LuxuryProgressRail({ activeStep, totalSteps, onStepChange }: { activeStep: number, totalSteps: number, onStepChange: (step: number) => void }) {
  const progress = activeStep / (totalSteps - 1)

  return (
    <div className="relative mt-12 mb-8">
        <div
          className="h-1 bg-muted rounded-full overflow-hidden cursor-pointer"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const x = e.clientX - rect.left
          const newStep = Math.round((x / rect.width) * (totalSteps - 1))
          onStepChange(newStep)
        }}
      >
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-800 ease-out"
          style={{ width: `${Math.max(8, progress * 100)}%` }}
        />
      </div>

      {/* Step markers */}
      <div className="absolute top-0 left-0 right-0 flex justify-between">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`w-1 h-1 rounded-full transition-all duration-300 ${
              i <= activeStep ? "bg-primary scale-150" : "bg-muted"
            } ${i === activeStep ? "scale-150" : ""}`}
          />
        ))}
      </div>
    </div>
  )
}

function LuxuryManufacturingShowcase() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  React.useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isPlaying])

  const currentStep = STEPS[activeStep]
  const currentStory = MANUFACTURING_STORY.home.steps[activeStep]

  return (
    <div className="mt-40">
      <div className="text-center mb-32">
        <h3 className="text-5xl lg:text-6xl font-extralight text-foreground mb-8 tracking-tight leading-tight">
          Crafting Tomorrow's <span className="text-primary font-light">Clean Legacy</span>
        </h3>
        <p className="text-xl text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
          Seven steps to perfection. Every detail crafted so your children inherit a cleaner world.
        </p>
      </div>

      <div className="flex justify-center items-center gap-12 mb-20">
        {STEPS.map((step, index) => (
          <button
            key={step.key}
            onClick={() => {
              setActiveStep(index)
              setIsPlaying(false)
            }}
            className="group relative focus:outline-none hover:scale-105 active:scale-95 transition-transform duration-500"
          >
            <div
              className={`
                w-24 h-24 rounded-full border-2 backdrop-blur-xl
                flex items-center justify-center relative overflow-hidden
                transition-all duration-500 ease-out
                ${
                  index === activeStep
                    ? "bg-primary border-primary shadow-lg scale-110"
                    : "bg-card/80 border-border hover:bg-card/90"
                }
              `}
            >
              <StepIcon
                name={step.key}
                active={index === activeStep}
                color={index === activeStep ? "white" : "hsl(var(--muted-foreground))"}
              />
            </div>

            <div className="mt-6 text-center">
              <div
                className={`text-sm font-medium transition-colors duration-300 ${
                  index === activeStep ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {step.label}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-16">
        <div className="flex gap-2">
          {STEPS.map((_, index) => (
            <div
              key={index}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === activeStep ? "w-8 bg-primary" : "w-2 bg-muted"
            }`}
            />
          ))}
        </div>
      </div>

      <div
        key={activeStep}
        className="text-center max-w-4xl mx-auto opacity-0 translate-y-8 animate-fade-in-up"
      >
        <h4 className="text-4xl font-light text-foreground mb-8 tracking-tight">{currentStep.title}</h4>

        <p className="text-xl text-muted-foreground font-light leading-relaxed mb-16 max-w-2xl mx-auto">
          {currentStory}
        </p>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="inline-flex items-center gap-3 px-6 py-3 bg-card/60 hover:bg-card/80 rounded-full text-muted-foreground text-sm font-medium transition-all duration-300 border border-border/20"
        >
          {isPlaying ? "Pause" : "Continue"}
        </button>
      </div>
    </div>
  )
}

function getStepImportance(stepIndex: number): string {
  const importance = [
    "Without precise measurement, batteries would be unreliable and potentially dangerous. We test every single cell.",
    "Mismatched cells cause premature failure. Our grading ensures only compatible cells work together.",
    "Perfect grouping means balanced performance and maximum lifespan for your investment.",
    "Expert assembly in controlled conditions prevents defects that could appear years later.",
    "Final validation catches any issues before they reach your home, ensuring zero surprises.",
    "Digital intelligence provides 24/7 monitoring and protection, like having an engineer on-site.",
    "Every system is delivered as a complete premium experience, not just a product.",
  ]
  return importance[stepIndex] || ""
}

export function WhyNess() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  return (
    <div className="container mx-auto max-w-6xl px-6">
      <div className="text-center mb-24">
        <h2 className="text-5xl lg:text-6xl font-light text-balance mb-8 tracking-tight text-foreground">
          Why your children will <span className="font-medium text-primary">thank you</span>?
        </h2>
        <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed font-light">
          Four pillars of excellence that transform clean energy into the ultimate luxury, 
          creating a legacy your family can be proud of for generations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`group relative bg-card/95 backdrop-blur-xl border border-border/40 rounded-3xl p-8 cursor-pointer transition-all duration-700 hover:-translate-y-1 hover:shadow-lg ${
              selectedCard === index
                ? "shadow-xl scale-[1.02] border-border/70"
                : ""
            }`}
            onClick={() => setSelectedCard(selectedCard === index ? null : index)}
          >
            <div className="w-16 h-16 rounded-2xl bg-muted/30 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-all duration-500">
              <feature.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
            </div>

            <h3 className="text-2xl font-medium text-foreground mb-4 tracking-tight">{feature.title}</h3>

            <p className="text-muted-foreground leading-relaxed mb-8 font-light">{feature.shortDesc}</p>

            <div className="mb-8">
              <div className="text-4xl font-light text-primary mb-2 tracking-tight">{feature.metric}</div>
              <div className="text-sm text-muted-foreground/80 font-medium uppercase tracking-wide">
                {feature.metricLabel}
              </div>
            </div>

            <div className="text-sm text-muted-foreground mb-8 font-medium">{feature.benefit}</div>

            {selectedCard === index && (
              <div className="border-t border-border/30 pt-8 mt-8 animate-fade-in">
                <p className="text-muted-foreground leading-relaxed mb-6 font-light">{feature.fullDesc}</p>
                <button className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            <div className="absolute bottom-6 right-6">
              <div
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  selectedCard === index
                    ? "bg-primary scale-150"
                    : "bg-muted group-hover:bg-primary"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      <LuxuryManufacturingShowcase />
    </div>
  )
}