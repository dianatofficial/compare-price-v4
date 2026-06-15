import React from "react";
import { PlanDetail, ProductTier } from "../types";
import { Sparkles, Check, Zap, Flame } from "lucide-react";

interface PlanCardProps {
  plan: PlanDetail;
  isYearly: boolean;
  onSelect: (plan: PlanDetail) => void;
  isFocused: boolean;
  onHover: (id: string | null) => void;
  highlightedPlanId: string | null;
}

export const PlanCard: React.FC<PlanCardProps> = React.memo(({
  plan,
  isYearly,
  onSelect,
  isFocused,
  onHover,
  highlightedPlanId,
}) => {
  const isAnyHighlighted = highlightedPlanId !== null;
  const isDimmed = isAnyHighlighted && highlightedPlanId !== plan.id;

  // Extract variables based on Plan
  const price = isYearly ? plan.priceYearly : plan.priceMonthly;
  const period = isYearly ? "سالانه" : "ماهانه";

  const monthlyEquivalent = plan.priceYearlyMonthlyEquivalent;

  // Extremely compact mobile tagline to replace long descriptions
  const getMobileTagline = () => {
    switch (plan.id) {
      case "STARTER":
        return "تحلیل پایه روزانه و هفتگی";
      case "PRO":
        return "سیگنال لحظه‌ای و جهت‌دار";
      case "ULTRA":
        return "قدرت پردازش مولتی‌چارت";
      default:
        return plan.description;
    }
  };

  // Icons based on tier
  const getIcon = () => {
    switch (plan.id) {
      case "STARTER":
        return <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />;
      case "PRO":
        return <Zap className="w-3.5 h-3.5 text-[#bef264]" />;
      case "ULTRA":
        return <Flame className="w-3.5 h-3.5 text-[#f43f5e] animate-bounce" style={{ animationDuration: "2s" }} />;
      default:
        return null;
    }
  };

  return (
    <div
      id={`plan-card-${plan.id.toLowerCase()}`}
      onMouseEnter={() => onHover(plan.id)}
      onMouseLeave={() => onHover(null)}
      className={`relative rounded-xl p-1.5 sm:p-2.5 transition-all duration-300 ease-out flex flex-col justify-between h-full group min-w-0 flex-1 select-none border-t border-x scale-100
        ${isFocused ? "z-10" : ""}
        ${isDimmed ? "opacity-90" : "opacity-100"}
        ${plan.id === "PRO" && !isFocused ? "animate-pulse-pro-card" : ""}
      `}
      style={{
        background: `linear-gradient(135deg, #090909 0%, #141414 100%)`,
        borderBottomWidth: "3px",
        borderColor: isFocused 
          ? (plan.id === "STARTER" ? "#ffffff" : plan.id === "PRO" ? "#bef264" : "#f43f5e")
          : (plan.id === "PRO" 
              ? undefined 
              : (plan.id === "STARTER" ? "#222222" : "rgba(244, 63, 94, 0.2)")),
        boxShadow: isFocused 
          ? `0 12px 24px -10px rgba(0,0,0,1), inset 0 1px 2px rgba(255,255,255,0.15), 0 0 12px rgba(${plan.id === "STARTER" ? "255,255,255" : plan.id === "PRO" ? "190,242,100" : "244,63,94"},0.2)`
          : (plan.id === "PRO"
              ? undefined
              : `0 8px 24px -10px rgba(0,0,0,0.95), inset 0 1px 1px rgba(255,255,255,0.05)`),
      }}
    >
      {/* Mini popular badge overlay inside card header */}
      {plan.recommeded && (
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[7.5px] font-black bg-[#bef264] text-neutral-950 flex items-center gap-0.5 shadow-[0_4px_10px_rgba(190,242,100,0.4)] border border-[#bef264]/80 select-none animate-pulse">
          محبوب
        </span>
      )}

      {/* Header Info */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className={`text-[8px] font-black px-1.2 py-0.5 rounded bg-white/5 border border-white/15 ${plan.accentTextColor} shadow-sm`}>
            {plan.badge}
          </span>
          <div className="p-0.5 rounded bg-neutral-900 border border-white/10 shrink-0 shadow-sm">
            {getIcon()}
          </div>
        </div>

        <div className="text-right">
          <h3 className="text-[11px] sm:text-xs font-black text-white tracking-tight flex items-center gap-0.5 select-none">
            <span>{plan.name}</span>
          </h3>
          <p className="text-[7px] sm:text-[7.5px] text-neutral-400 font-bold mt-0.5 leading-tight min-h-[14px]">
            {getMobileTagline()}
          </p>
        </div>

        {/* Pricing Shaded Box (High contrast 3D container) */}
        <div 
          className="p-1 rounded-xl border border-white/5 bg-[#040404] relative overflow-hidden flex flex-col items-center justify-center text-center shadow-[inset_0_2px_8px_rgba(0,0,0,0.95)]"
        >
          {/* Discount Tag */}
          {isYearly && (
            <div className="absolute top-0 right-0 left-0 text-center bg-emerald-500/20 border-b border-emerald-500/10 text-emerald-400 text-[6px] py-0.5 font-black uppercase tracking-wider">
              {plan.priceDiscount} تخفیف
            </div>
          )}

          <div className={`flex flex-col items-center justify-center ${isYearly ? "pt-2.5" : "pt-0.5"}`}>
            <span className={`text-[10.5px] sm:text-[11.5px] font-black tracking-tight ${plan.accentTextColor} filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]`}>
              {price}
            </span>
            <span className="text-[7px] text-neutral-500 font-bold mt-0.5">تومان / {period}</span>
          </div>

          {isYearly && (
            <div className="text-[7px] text-neutral-300 mt-1.2 w-full border-t border-white/5 pt-1.2 flex flex-col items-center justify-center gap-0.5 font-black">
              <span className="text-neutral-500 text-[6.5px]" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}>ماهی حدوداً:</span>
              <span className="text-white text-[8.5px] font-black" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.9)" }}>
                {monthlyEquivalent} <span className="text-[6px] text-neutral-400 font-semibold font-sans">تومان</span>
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Modern clicky 3D Button container */}
      <div className="mt-1.5">
        <button
          id={`btn-cta-${plan.id.toLowerCase()}`}
          onClick={() => onSelect(plan)}
          className={`w-full py-1 px-1 rounded-lg font-black text-[8.5px] tracking-wide transition-all active:translate-y-0.5 active:shadow-none cursor-pointer flex items-center justify-center gap-0.5 border-b-[2px] border-b-black/40
            ${plan.btnBgColor} ${plan.btnTextColor} shadow-[0_3px_8px_rgba(0,0,0,0.5)]`}
          style={{
            textShadow: plan.id === "ULTRA" ? "0 1px 2px rgba(0,0,0,0.5)" : "none",
          }}
        >
          <span>انتخاب</span>
          <Check className="w-2.2 h-2.2 stroke-[4]" />
        </button>
      </div>
    </div>
  );
});

PlanCard.displayName = "PlanCard";
