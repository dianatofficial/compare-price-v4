import React, { useState } from "react";
import { QUIZ_QUESTIONS, PLANS } from "../data";
import { ProductTier, PlanDetail } from "../types";
import { ArrowLeft, RotateCcw, HelpCircle, Trophy, Sparkles, Check } from "lucide-react";

interface PlanRecommenderProps {
  onSelectPlan: (plan: PlanDetail) => void;
  onHighlightPlan: (id: string | null) => void;
}

export const PlanRecommender: React.FC<PlanRecommenderProps> = React.memo(({
  onSelectPlan,
  onHighlightPlan,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [recommendation, setRecommendation] = useState<PlanDetail | null>(null);

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate final results
      const scores = {
        [ProductTier.STARTER]: 0,
        [ProductTier.PRO]: 0,
        [ProductTier.ULTRA]: 0
      };

      newAnswers.forEach((ansOpt, qIndex) => {
        const option = QUIZ_QUESTIONS[qIndex].options[ansOpt];
        Object.keys(option.points).forEach((tier) => {
          scores[tier as ProductTier] += option.points[tier as ProductTier] || 0;
        });
      });

      // Find highest score
      let bestTier = ProductTier.PRO; // Default
      let maxScore = -1;

      Object.keys(scores).forEach((tier) => {
        if (scores[tier as ProductTier] > maxScore) {
          maxScore = scores[tier as ProductTier];
          bestTier = tier as ProductTier;
        }
      });

      const matchedPlan = PLANS.find(p => p.id === bestTier) || PLANS[1];
      setRecommendation(matchedPlan);
      onHighlightPlan(matchedPlan.id);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setRecommendation(null);
    onHighlightPlan(null);
  };

  const activeQuestion = QUIZ_QUESTIONS[currentStep];

  return (
    <div id="plan-quiz-container" className="w-full rounded-2xl border border-white/5 p-3 sm:p-4 bg-[#090909]/80 relative overflow-hidden shadow-xl">
      
      {/* Background radial accent glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-[#bef264]/10 blur-3xl pointer-events-none" />

      {/* Title Header */}
      <div className="flex items-center justify-between gap-2 mb-3 bg-neutral-950/20 p-2 rounded-xl border border-white/5 select-none">
        <div className="flex items-center gap-1.5 min-w-0">
          <HelpCircle className="w-4 h-4 text-[#bef264] shrink-0" />
          <h4 className="text-[10.5px] sm:text-[11.5px] font-black text-white truncate">مشاوره و سنجش هوشمندِ نیاز شما</h4>
        </div>
        
        {recommendation ? (
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-[10px] font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer bg-white/5 px-2 py-0.5 rounded-md border border-white/5 shrink-0"
          >
            <span>مجدد</span>
            <RotateCcw className="w-2.5 h-2.5" />
          </button>
        ) : (
          <span className="text-[9px] text-neutral-400 font-bold bg-neutral-900 px-2 py-0.5 rounded border border-white/5 shrink-0">
            {currentStep + 1} / {QUIZ_QUESTIONS.length}
          </span>
        )}
      </div>

      {/* Recommendations result or active question */}
      {!recommendation ? (
        <div className="flex flex-col gap-3">
          {/* Active Question Title */}
          <div className="px-0.5">
            <h5 className="text-[11px] sm:text-xs font-bold text-neutral-200 leading-relaxed">
              {activeQuestion.text}
            </h5>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-1.5">
            {activeQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className="w-full text-right p-2.5 rounded-xl bg-neutral-950/40 border border-white/5 hover:border-[#bef264]/30 hover:bg-neutral-900/60 transition-all duration-300 text-[10.5px] text-neutral-300 hover:text-white font-medium flex items-center justify-between gap-3 group active:scale-[0.99] cursor-pointer"
              >
                <span>{option.text}</span>
                <span className="w-4.5 h-4.5 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-neutral-600 font-bold group-hover:border-[#bef264] group-hover:text-[#bef264] transition-colors text-[9px]">
                  {idx + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-full bg-neutral-900 h-1 rounded-full mt-1.5 overflow-hidden">
            <div 
              className="bg-[#bef264] h-full transition-all duration-500 ease-out shadow-[0_0_8px_rgba(190,242,100,0.6)]"
              style={{ width: `${((currentStep) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-stretch gap-3 p-2.5 bg-neutral-950/50 rounded-xl border border-white/5">
          <div className="flex items-start gap-2.5">
            <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5" 
                 style={{ backgroundColor: `${recommendation.accentColor}15`, border: `1.5px solid ${recommendation.accentColor}30` }}>
              <Trophy className="w-4.5 h-4.5" style={{ color: recommendation.accentColor }} />
            </div>
 
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[8.5px] bg-white/5 text-neutral-300 px-1.5 py-0.5 rounded">پلن بیاب سنج</span>
                <span className="text-amber-400 text-[8.5px] font-bold flex items-center gap-0.5 shrink-0">
                  <Sparkles className="w-2.5 h-2.5 fill-current" />
                  تطابق ۱۰۰٪
                </span>
              </div>
              <h5 className="text-[11.5px] font-black text-white mt-1">
                نسخه پیشنهادی ربات: <span style={{ color: recommendation.accentColor }}>{recommendation.name}</span>
              </h5>
              <p className="text-[10px] text-neutral-400 mt-1 leading-normal">
                این گزینه حاوی تمام ویژگی‌های مدنظر شما (مانند {recommendation.id === ProductTier.STARTER ? "بررسی روزانه/هفتگی" : recommendation.id === ProductTier.PRO ? "تحلیل چارت دقیقه و جهت‌گیری" : "مولتی‌سورسی، ابزارهای وایت‌لیبل و تحلیل همزمان چارت"}) است.
              </p>
            </div>
          </div>

          <div className="flex gap-1.5 w-full items-center justify-end">
            <button
              onClick={() => onSelectPlan(recommendation)}
              className="flex-1 py-1 px-3 rounded-lg text-[10px] font-black tracking-tight transition-all duration-300 text-center cursor-pointer flex items-center justify-center gap-1 active:translate-y-0.5 shadow-md"
              style={{ backgroundColor: recommendation.accentColor, color: recommendation.id === "ULTRA" ? "white" : "#030303" }}
            >
              <span>خرید فوری پلن {recommendation.name}</span>
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </button>
            
            <button
              onClick={handleReset}
              className="p-1 px-1.2 rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white transition-colors cursor-pointer flex items-center justify-center shrink-0"
              title="آزمون مجدد"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
         </div>
       )}
     </div>
   );
});

PlanRecommender.displayName = "PlanRecommender";
