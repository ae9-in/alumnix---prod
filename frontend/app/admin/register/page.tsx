"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, Mail, User, ShieldAlert, Eye, EyeOff } from "lucide-react";
import { AuthShell } from "@/components/auth/AuthShell";

export default function AdminRegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    adminSecret: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/signup/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        router.push("/admin/login?success=admin-created");
      } else {
        const data = await res.json();
        setError(data.error || "Admin registration failed.");
      }
    } catch (err) {
      setError("Network sync error.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = "w-full bg-transparent text-xl font-black text-black placeholder:text-black/40 focus:outline-none";
  const groupClasses = "flex flex-col gap-4";
  const lineClasses = "flex items-center gap-4 border-b-2 border-black/10 pb-4 transition-all focus-within:border-black";
  const labelTextClasses = "text-xs font-black uppercase tracking-[0.3em] text-black";

  return (
    <AuthShell 
      title="Admin Registration" 
      subtitle="Provision a new administrative account."
    >
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="space-y-10">
          {/* Full Name */}
          <div className={groupClasses}>
            <span className={labelTextClasses}>Full name</span>
            <div className={lineClasses}>
              <User className="h-6 w-6 text-black/30" strokeWidth={3} />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Admin Name"
                className={inputClasses}
              />
            </div>
          </div>

          {/* Email */}
          <div className={groupClasses}>
            <span className={labelTextClasses}>Email</span>
            <div className={lineClasses}>
              <Mail className="h-6 w-6 text-black/30" strokeWidth={3} />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="admin@alumnix.com"
                className={inputClasses}
              />
            </div>
          </div>

          {/* Password */}
          <div className={groupClasses}>
            <span className={labelTextClasses}>Password</span>
            <div className={lineClasses}>
              <Lock className="h-6 w-6 text-black/30" strokeWidth={3} />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                className={inputClasses}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-black/30 hover:text-black"
              >
                {showPassword ? <EyeOff className="h-6 w-6" strokeWidth={3} /> : <Eye className="h-6 w-6" strokeWidth={3} />}
              </button>
            </div>
          </div>

          {/* Admin Secret */}
          <div className={groupClasses}>
            <span className={labelTextClasses}>Admin Secret Key</span>
            <div className={lineClasses}>
              <ShieldAlert className="h-6 w-6 text-black/30" strokeWidth={3} />
              <input
                type="password"
                required
                value={formData.adminSecret}
                onChange={(e) => setFormData({ ...formData, adminSecret: e.target.value })}
                placeholder="Enter root secret"
                className={inputClasses}
              />
            </div>
          </div>
        </div>

        {error && (
          <p className="text-md font-black text-red-900 bg-red-500/20 p-5 rounded-2xl border-2 border-red-500/30">
            {error}
          </p>
        )}

        <div className="flex flex-col gap-8 pt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading}
            className="group relative overflow-hidden rounded-2xl bg-black py-6 text-lg font-black uppercase tracking-[0.4em] text-white shadow-xl"
          >
             {isLoading ? "Provisioning..." : "Register Admin"}
          </motion.button>

          <Link 
            href="/admin/login" 
            className="text-center text-xs font-black uppercase tracking-[0.4em] text-black hover:text-brand-orange transition-colors"
          >
            BACK TO LOGIN
          </Link>
        </div>
      </form>
    </AuthShell>
  );
}
