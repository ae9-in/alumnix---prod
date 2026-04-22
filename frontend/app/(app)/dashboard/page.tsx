import { syne, nunito } from "@/lib/fonts";
import { prisma } from "@/lib/prisma";
import { Briefcase, Calendar, Users, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const RealTimeStats = dynamic(() => import("@/components/dashboard/RealTimeStats"), { 
  ssr: false,
  loading: () => <div className="h-64 rounded-[2.5rem] bg-slate-100 animate-pulse" />
});

export default async function DashboardPage() {
  // Parallel data fetching for speed
  const [gigCount, eventCount, userCount, recentGigs, nextEvent] = await Promise.all([
    prisma.gig.count(),
    prisma.event.count(),
    prisma.user.count(),
    prisma.gig.findMany({
      take: 4,
      orderBy: { createdAt: "desc" },
    }),
    prisma.event.findFirst({
      where: { startsAt: { gte: new Date() } },
      orderBy: { startsAt: "asc" },
    }),
  ]);

  const stats = [
    { name: "Active Gigs", value: gigCount, icon: Briefcase, color: "bg-brand-orange", href: "/gigs" },
    { name: "Upcoming Events", value: eventCount, icon: Calendar, color: "bg-brand-sky", href: "/events" },
    { name: "Network Size", value: userCount, icon: Users, color: "bg-brand-yellow", href: "/network" },
    { name: "Applications", value: 12, icon: TrendingUp, color: "bg-brand-navy", href: "/applications" },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className={`${syne.className} text-5xl font-black text-brand-dark tracking-tighter`}>
            Dashboard
          </h1>
          <p className={`${nunito.className} text-xl text-brand-muted max-w-xl`}>
            Welcome back to your professional alumni network. Stay updated with the latest opportunities.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-black uppercase tracking-widest text-brand-muted">System Operational</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Main Column */}
        <div className="lg:col-span-3 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Link 
                key={stat.name} 
                href={stat.href}
                className="group flex flex-col gap-4 rounded-[2rem] bg-white p-7 shadow-sm border border-transparent hover:border-brand-orange/20 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.color} text-white shadow-lg transition-transform group-hover:scale-110`}>
                  <stat.icon className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-muted">{stat.name}</p>
                  <p className={`${syne.className} text-4xl font-black text-brand-dark mt-1 tracking-tighter`}>{stat.value}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Newest Gigs */}
          <div className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <h2 className={`${syne.className} text-3xl font-black text-brand-dark tracking-tight`}>Featured Opportunities</h2>
              <Link href="/gigs" className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest text-brand-orange hover:gap-3 transition-all">
                View Gig Board <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {recentGigs.map((gig) => (
                <div key={gig.id} className="group relative flex flex-col gap-6 rounded-[2.5rem] bg-white p-8 shadow-sm transition-all hover:shadow-2xl border border-transparent hover:border-brand-orange/10 overflow-hidden">
                  {/* Decorative element */}
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand-surface group-hover:bg-brand-orange/5 transition-colors" />
                  
                  <div className="flex items-start justify-between relative z-10">
                    <div className="h-16 w-16 rounded-2xl bg-brand-surface flex items-center justify-center text-brand-orange text-xl font-black shadow-inner">
                      {gig.id.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="rounded-full bg-brand-orange/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-brand-orange">
                      {gig.type}
                    </span>
                  </div>

                  <div className="space-y-2 relative z-10">
                    <h3 className="text-xl font-black text-brand-dark group-hover:text-brand-orange transition-colors line-clamp-1">{gig.title}</h3>
                    <p className="text-sm font-bold text-brand-muted flex items-center gap-2">
                      <Briefcase className="h-3 w-3" /> {gig.company} · {gig.location}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-brand-surface relative z-10">
                    <div>
                      <p className="text-lg font-black text-brand-dark">₹{gig.salaryBand || "TBD"}</p>
                      <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest">Monthly Stipend</p>
                    </div>
                    <Link 
                      href={`/gigs`}
                      className="rounded-full bg-black px-6 py-3 text-xs font-black uppercase tracking-widest text-white hover:bg-brand-orange transition-all shadow-lg"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              ))}
              {recentGigs.length === 0 && (
                 <div className="col-span-full rounded-[2.5rem] bg-white/50 border-4 border-dashed border-brand-orange/5 p-16 text-center">
                    <Briefcase className="h-12 w-12 text-brand-muted/30 mx-auto mb-4" />
                    <p className="text-brand-muted font-black uppercase tracking-widest">No active gigs found</p>
                    <p className="text-sm text-brand-muted/60 mt-2">Check back soon for new opportunities</p>
                 </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <RealTimeStats />
          
          <div className="space-y-4">
            <h2 className={`${syne.className} text-2xl font-black text-brand-dark px-2 tracking-tight`}>Next Event</h2>
            {nextEvent ? (
              <div className="group relative rounded-[2.5rem] bg-brand-navy p-8 shadow-2xl text-white overflow-hidden">
                <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-white/5 blur-2xl group-hover:bg-white/10 transition-all" />
                
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Save the Date</p>
                <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight">{nextEvent.title}</h3>
                
                <div className="mt-6 flex items-center gap-3 text-white/80">
                  <Calendar className="h-5 w-5 text-brand-orange" />
                  <p className="text-sm font-bold">
                    {new Date(nextEvent.startsAt).toLocaleString("en-IN", {
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>

                <Link 
                  href={`/events`}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-4 text-xs font-black uppercase tracking-widest text-brand-navy hover:bg-brand-orange hover:text-white transition-all shadow-xl"
                >
                  Join Event <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <div className="rounded-[2.5rem] bg-brand-surface p-10 text-center border-2 border-dashed border-brand-muted/10">
                 <Calendar className="h-10 w-10 text-brand-muted/40 mx-auto mb-4" />
                 <p className="text-sm font-black uppercase tracking-widest text-brand-muted">Nothing Scheduled</p>
                 <Link href="/events" className="text-xs font-black text-brand-orange uppercase mt-4 block hover:underline">Request Meeting</Link>
              </div>
            )}
          </div>

          {/* Quick Tip */}
          <div className="rounded-[2rem] bg-brand-warm/50 p-6 border border-brand-orange/10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange">Pro Tip</p>
            <p className="mt-2 text-sm font-bold text-brand-dark/80 italic">
              "Complete your profile to get matched with high-paying gigs faster."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

