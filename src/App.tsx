/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from "react";
import { PLANS } from "./data";
import { PlanDetail } from "./types";
import { PlanCard } from "./components/PlanCard";
import { ComparisonTable } from "./components/ComparisonTable";
import { CheckoutModal } from "./components/CheckoutModal";
import { PlanRecommender } from "./components/PlanRecommender";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Info, 
  ArrowRightLeft 
} from "lucide-react";

export default function App() {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [highlightedPlanId, setHighlightedPlanId] = useState<string | null>(null);
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState<PlanDetail | null>(null);

  const handleHoverPlan = useCallback((id: string | null) => {
    setHighlightedPlanId(id);
  }, []);

  const handleSelectPlanForCheckout = useCallback((plan: PlanDetail) => {
    setSelectedPlanForCheckout(plan);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-slate-100 flex flex-col items-center justify-start selection:bg-[#bef264]/20 selection:text-[#bef264] antialiased font-sans w-full sm:py-8 sm:px-4 relative overflow-x-hidden">
      
      {/* Visual Ambient Background Orbs: Fully Clipped inside a safe pointer-events container with GPU caching */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 gpu-layer">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#bef264]/5 rounded-full blur-[120px] gpu-layer" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#f43f5e]/5 rounded-full blur-[110px] gpu-layer" />
      </div>

      {/* Main Core Content Wrapper: Adaptive Edge-to-Edge on Mobile, Styled Device Card on Desktop */}
      <div 
        className="w-full sm:max-w-[428px] rounded-none sm:rounded-[36px] bg-[#060606] sm:border sm:border-white/5 desktop-device-shadow overflow-hidden flex flex-col relative z-10 min-h-screen sm:min-h-0"
      >
        {/* Decorative Phone Camera Mesh Indicator: Visible ONLY on Desktop Preview */}
        <div className="hidden sm:flex w-16 h-3.5 bg-neutral-900 rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-50 items-center justify-center border-x border-b border-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-950 border border-white/5" />
        </div>

        {/* Content Container */}
        <div className="flex flex-col gap-4 pt-6 sm:pt-9 px-3.5 sm:px-4 pb-6">
          
          {/* A. Dynamic Promo & Title Banner */}
          <div className="flex flex-col items-center text-center mt-2.5 select-none text-white">
            <div className="inline-flex items-center gap-1.2 px-2.5 py-0.5 rounded-full bg-neutral-950 border border-white/10 mb-2 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              <Sparkles className="w-3 h-3 text-[#bef264] animate-pulse" />
              <span className="text-[9px] font-black text-[#bef264] tracking-wider uppercase">تحلیل هوشمند و تخصصی بازارهای مالی</span>
            </div>
            
            <h2 className="text-xl font-black text-white tracking-tight leading-relaxed drop-shadow-sm">
              مقایسه ربات‌های تحلیل تخصصی
            </h2>
          </div>

          {/* B. Billing Cycle Toggler (Monthly / Yearly) */}
          <div className="flex flex-col items-center justify-center gap-2 select-none bg-neutral-950/85 p-2.5 border border-white/5 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.03)]">
            <div className="flex items-center gap-1.5 p-1 bg-neutral-900/95 rounded-xl border border-white/5 w-full">
              <button
                id="billing-monthly-btn"
                onClick={() => setIsYearly(false)}
                className={`flex-1 py-1.5 text-[11px] font-black rounded-lg transition-all duration-300 cursor-pointer text-center tracking-tight active:scale-98 relative overflow-hidden
                  ${!isYearly 
                    ? "bg-[#0ea5e9] text-white shadow-[0_4px_16px_rgba(14,165,233,0.45)] border-b-2 border-[#0284c7]" 
                    : "bg-neutral-950 text-sky-400 border border-sky-500/30 hover:border-sky-400/60 shadow-[0_0_12px_rgba(14,165,233,0.12)] hover:shadow-[0_0_18px_rgba(14,165,233,0.25)] animate-pulse-glow"
                  }`}
              >
                پرداخت ماهانــه
              </button>
              
              <button
                id="billing-yearly-btn"
                onClick={() => setIsYearly(true)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-black rounded-lg transition-all duration-300 cursor-pointer text-center tracking-tight active:scale-98
                  ${isYearly 
                    ? "bg-[#bef264] text-neutral-950 shadow-[0_4px_18px_rgba(190,242,100,0.5)] border-b-2 border-[#84cc16]" 
                    : "bg-neutral-950 text-[#bef264] border border-[#bef264]/30 hover:border-[#bef264]/60 shadow-[0_0_12px_rgba(190,242,100,0.12)] hover:shadow-[0_0_18px_rgba(190,242,100,0.25)] animate-pulse-yearly-glow"
                  }`}
              >
                <span>پرداخت سالانــه</span>
                <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-md shadow-sm transition-all duration-300
                  ${isYearly ? "bg-neutral-950 text-[#bef264]" : "bg-neutral-850 text-neutral-405"}`}>
                  ۴۵٪ تخفیف
                </span>
              </button>
            </div>
            
            <span className="text-[9px] text-neutral-400 font-bold flex items-center gap-1 px-1">
              <Info className="w-3 h-3 text-[#bef264] shrink-0" />
              فعال‌سازی هوشمند اشتراک بلافاصله پس از سفارش
            </span>
          </div>

          {/* D. Main Segment Area directly rendered */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col gap-4 w-full"
            >
              {/* Plan Cards Grid in one row side-by-side (Separated 3D Section) */}
              <div className="p-2.5 rounded-2xl bg-[#090909]/80 border border-white/5 shadow-[0_15px_30px_rgba(0,0,0,0.95),_inset_0_1px_1px_rgba(255,255,255,0.03)] flex flex-col gap-2.5 select-none hover:border-white/10 transition-colors duration-300">
                <div className="flex items-center justify-between border-r-2 border-[#bef264] pr-1.5">
                  <h4 className="text-[11px] font-black text-white">انتخاب پلن و خرید مستقیم</h4>
                  <span className="text-[8.5px] text-neutral-400">۳ سطح عملکردی</span>
                </div>

                <div className="grid grid-cols-3 gap-1.2 w-full">
                  {PLANS.map((plan) => (
                    <PlanCard
                      key={plan.id}
                      plan={plan}
                      isYearly={isYearly}
                      onSelect={handleSelectPlanForCheckout}
                      isFocused={highlightedPlanId === plan.id}
                      onHover={handleHoverPlan}
                      highlightedPlanId={highlightedPlanId}
                    />
                  ))}
                </div>
              </div>

              {/* Detailed Comparison Table (Separated 3D Section) */}
              <div className="p-2.5 rounded-2xl bg-[#090909]/80 border border-white/5 shadow-[0_15px_30px_rgba(0,0,0,0.95),_inset_0_1px_1px_rgba(255,255,255,0.03)] flex flex-col gap-2.5 hover:border-white/10 transition-colors duration-300">
                <div className="flex items-center justify-between border-r-2 border-[#f43f5e] pr-1.5 select-none">
                  <h4 className="text-[11px] font-black text-white">جدول تخصصی مقایسه دسترسی‌ها</h4>
                  <span className="text-[8.5px] text-neutral-400">تفکیک امکانات سطوح رباتیک</span>
                </div>
                
                <ComparisonTable 
                  onSelectPlan={handleSelectPlanForCheckout}
                  highlightedPlanId={highlightedPlanId}
                  onHoverPlan={handleHoverPlan}
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* 4. Checkout Simulation Modal overlay */}
      {selectedPlanForCheckout && (
        <CheckoutModal 
          plan={selectedPlanForCheckout}
          isYearly={isYearly}
          onClose={() => setSelectedPlanForCheckout(null)}
        />
      )}
    </div>
  );
}
