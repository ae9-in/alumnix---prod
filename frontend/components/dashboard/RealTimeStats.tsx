"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Users, Zap } from "lucide-react";
import { syne } from "@/lib/fonts";

export default function RealTimeStats() {
  const [activeUsers, setActiveUsers] = useState(124);
  const [recentActions, setRecentActions] = useState<string[]>([]);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 5) - 2);
      
      const actions = [
        "New gig posted at Google",
        "Alumni meetup scheduled",
        "New connection request",
        "Application received for UI/UX Designer",
        "Member joined from Stanford",
      ];
      
      if (Math.random() > 0.7) {
        const newAction = actions[Math.floor(Math.random() * actions.length)];
        setRecentActions(prev => [newAction, ...prev].slice(0, 3));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-3xl bg-black p-6 text-white shadow-2xl relative overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-orange/20 blur-3xl transition-all group-hover:bg-brand-orange/40" />
      
      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
              <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-500 animate-ping" />
            </div>
            <span className="text-sm font-black uppercase tracking-widest text-white/60">Live Now</span>
          </div>
          <Zap className="h-5 w-5 text-brand-orange" />
        </div>

        <div className="space-y-1">
          <p className={`${syne.className} text-4xl font-black`}>
            {activeUsers}
          </p>
          <p className="text-xs font-bold uppercase tracking-wider text-white/40 flex items-center gap-1">
            <TrendingUp className="h-3 w-3 text-green-500" />
            Active Alumni Online
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 border-b border-white/10 pb-2">
            Live Activity
          </p>
          <div className="space-y-2 h-20 overflow-hidden">
            <AnimatePresence initial={false}>
              {recentActions.map((action, i) => (
                <motion.div
                  key={action + i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="text-xs font-medium text-white/80 flex items-center gap-2"
                >
                  <div className="h-1 w-1 rounded-full bg-brand-orange" />
                  {action}
                </motion.div>
              ))}
              {recentActions.length === 0 && (
                <p className="text-xs text-white/20 italic">Listening for updates...</p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
