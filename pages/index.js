import Head from "next/head";

const LINKEDIN = "https://www.linkedin.com/in/shahzadali786";
const GITHUB = "https://github.com/ShahzadAliOfficial";

const stackMarquee = ["TypeScript", "NestJS", "Next.js", "React", "PostgreSQL", "Prisma", "TypeORM", "Tailwind CSS", "Docker", "AWS", "Stripe", "CI/CD", "Claude Code", "MCP", "AI Agents"];

const skillGroups = [
  { title: "Frontend", items: ["TypeScript", "React", "Next.js", "Tailwind CSS"], tone: "from-emerald-400/20 to-cyan-400/10" },
  { title: "Backend & Data", items: ["NestJS", "Node.js", "PostgreSQL", "Prisma", "TypeORM", "Stripe"], tone: "from-cyan-400/20 to-emerald-400/10" },
  { title: "Platform", items: ["Docker", "AWS", "CI/CD"], tone: "from-emerald-400/15 to-teal-400/10" },
  { title: "AI & Agents", items: ["Claude Code", "MCP", "AI-agent automation"], tone: "from-cyan-400/15 to-emerald-400/20" },
];

const experience = [
  { role: "Junior Associate Full Stack Developer", org: "XtractSol Pvt Ltd, Lahore", period: "Jul 2025 — Present", note: "Resume title: Associate Full Stack Software Engineer." },
  { role: "MERN Stack Intern", org: "Merak Consultants", period: "Sep 2024 — Feb 2025", note: "" },
  { role: "MERN Stack Intern", org: "University of South Asia", period: "Mar 2025 — Jun 2025", note: "" },
  { role: "BS Computer Science", org: "University of Management and Technology, Lahore", period: "2020 — 2025", note: "" },
];

const certs = [
  { name: "Claude Certified Architect — Foundations", issuer: "Anthropic", featured: true, links: [
    { label: "Credly", href: "https://www.credly.com/badges/06b1c3ea-e853-4474-9c07-e2384bf629cd/linked_in_profile" },
    { label: "Skilljar", href: "https://verify.skilljar.com/c/8sq3wcjpp8ft" },
  ]},
  { name: "Building with the Claude API", issuer: "Anthropic Academy · Apr 2026", links: [{ label: "Verify →", href: "https://verify.skilljar.com/c/dfgp76kd8ch7" }] },
  { name: "Claude Code in Action", issuer: "Anthropic Academy · Apr 2026", links: [{ label: "Verify →", href: "https://verify.skilljar.com/c/t2jiaxaggu3z" }] },
  { name: "Introduction to Agent Skills", issuer: "Anthropic Academy · Apr 2026", links: [{ label: "Verify →", href: "https://verify.skilljar.com/c/kbgeznr5pwnq" }] },
  { name: "Introduction to MCP", issuer: "Anthropic Academy · Apr 2026", links: [{ label: "Verify →", href: "https://verify.skilljar.com/c/zjfjzj2uzjqi" }] },
];

const agentFlow = [
  { n: "01", t: "Search", d: "Agents run county searches" },
  { n: "02", t: "Gather", d: "Chain-of-title, mortgage & lien records" },
  { n: "03", t: "Compile", d: "A complete title report" },
];

function Kicker({ children }) {
  return <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">{children}</p>;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Shahzad Ali — Full-Stack Developer &amp; AI Engineer</title>
        <meta name="description" content="Shahzad Ali, Full-Stack Developer and AI Engineer based in Lahore, Pakistan, working remotely. TypeScript, NestJS, Next.js, React, PostgreSQL and AI-agent automation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Shahzad Ali — Full-Stack Developer & AI Engineer" />
        <meta property="og:description" content="Full-stack development and AI-agent automation, from Lahore, Pakistan — remote." />
        <meta property="og:type" content="website" />
      </Head>

      <div className="mesh-bg" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />

      <header className="relative z-10 border-b border-white/10 bg-black/30 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-base font-black text-black shadow-[0_0_24px_rgba(16,185,129,0.5)]">SA</span>
            <span className="text-lg font-bold tracking-tight text-white">Shahzad<span className="text-emerald-300">.</span>Ali</span>
          </a>
          <div className="hidden gap-7 text-sm font-medium text-slate-300 md:flex">
            <a href="#work" className="transition hover:text-emerald-300">Work</a>
            <a href="#skills" className="transition hover:text-emerald-300">Stack</a>
            <a href="#journey" className="transition hover:text-emerald-300">Journey</a>
            <a href="#certs" className="transition hover:text-emerald-300">Certified</a>
          </div>
          <a href="#contact" className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-bold text-black transition hover:bg-emerald-300">Contact →</a>
        </nav>
      </header>

      <main id="top" className="relative z-10">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-5 pb-14 pt-16 sm:px-8 sm:pt-24">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300">● Remote · Lahore, Pakistan</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300">Full-Stack × AI Agents</span>
          </div>

          <h1 className="hero-title mt-8">
            <span className="block text-white">SHAHZAD</span>
            <span className="gradient-text block">ALI<span className="text-white">.</span></span>
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-semibold leading-snug text-slate-100 sm:text-3xl">
            Full-Stack Developer <span className="text-slate-500">&amp;</span>{" "}
            <span className="text-emerald-300">AI Engineer</span> — I build web apps
            that don&apos;t just display data, they go out and gather it.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            TypeScript, NestJS, Next.js and PostgreSQL on the product side;
            Claude-based agents, MCP and Playwright automation on the AI side.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="rounded-full bg-emerald-400 px-6 py-3 font-bold text-black shadow-[0_0_32px_rgba(16,185,129,0.35)] transition hover:bg-emerald-300">LinkedIn ↗</a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-bold text-white backdrop-blur transition hover:border-emerald-300/60">GitHub ↗</a>
            <a href="#work" className="rounded-full px-6 py-3 font-bold text-emerald-300 underline decoration-emerald-400/50 underline-offset-8 transition hover:text-emerald-200">See the agent work ↓</a>
          </div>

          {/* Agent highlight — the distinctive centrepiece */}
          <div className="agent-card mt-14">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">Featured · How an agent works here</p>
              <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-mono text-cyan-300">agent → county → report</span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {agentFlow.map((s) => (
                <div key={s.n} className="rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:border-emerald-400/50">
                  <p className="font-mono text-sm font-bold text-emerald-300">{s.n}</p>
                  <h3 className="mt-2 text-xl font-bold text-white">{s.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{s.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-500">NestJS · React · Claude-based agents · Playwright</p>
          </div>
        </section>

        {/* Marquee */}
        <div className="marquee-wrap border-y border-white/10 bg-black/40 py-4" aria-hidden="true">
          <div className="marquee">
            {[...stackMarquee, ...stackMarquee].map((s, i) => (
              <span key={i} className="mx-5 whitespace-nowrap text-sm font-bold uppercase tracking-widest text-slate-400">{s} <span className="text-emerald-400">✦</span></span>
            ))}
          </div>
        </div>

        {/* ABOUT + SKILLS */}
        <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Kicker>01 — The stack</Kicker>
          <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl">Built for products <span className="text-emerald-300">and agents.</span></h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="leading-relaxed text-slate-300">
                Full-stack developer based in Lahore, Pakistan, working remotely.
                BS in Computer Science from the University of Management and Technology,
                Lahore (2020–2025). I work across the stack — React and Next.js front ends,
                NestJS APIs, PostgreSQL models, Docker, AWS and CI/CD.
              </p>
              <div className="mt-6 rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-emerald-400/5 p-6">
                <h3 className="font-bold text-white">AI &amp; model training</h3>
                <p className="mt-2 leading-relaxed text-slate-300">
                  Alongside agent development with Claude Code and MCP, I have trained
                  models during university and for a client ASL application on an ASL dataset.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              {skillGroups.map((g) => (
                <div key={g.title} className={`rounded-3xl border border-white/10 bg-gradient-to-br ${g.tone} p-5 transition hover:border-emerald-400/40`}>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-200">{g.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span key={s} className="chip rounded-full border border-white/15 bg-black/40 px-3.5 py-1.5 text-sm font-medium text-slate-100">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="journey" className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <Kicker>02 — Journey</Kicker>
          <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">Where I&apos;ve worked.</h2>
          <div className="timeline mt-10 space-y-0">
            {experience.map((e) => (
              <div key={e.role + e.org} className="timeline-item">
                <span className="timeline-dot" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold text-white">{e.role}</h3>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">{e.period}</span>
                </div>
                <p className="mt-1 text-slate-300">{e.org}</p>
                {e.note ? <p className="mt-1 text-sm text-slate-500">{e.note}</p> : null}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Kicker>03 — Selected work</Kicker>
          <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">One agent system, <span className="text-emerald-300">front and centre.</span></h2>

          <article className="featured-project mt-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">Featured project · AI Agents · Full-Stack</p>
            <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">Global Real Estate Marketplace &amp; Title Search Engine</h3>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
              AI-agent platform for US title searches: agents run county searches, gather
              chain-of-title, mortgage and lien records, and compile a title report.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["NestJS", "React", "Claude-based agents", "Playwright"].map((t) => (
                <span key={t} className="rounded-full border border-emerald-400/30 bg-black/40 px-3.5 py-1.5 text-sm font-medium text-emerald-200">{t}</span>
              ))}
            </div>
          </article>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              { name: "Taskify", tag: "Project" },
              { name: "Agent & Seller Onboarding Platform", tag: "Project" },
            ].map((p) => (
              <article key={p.name} className="mini-project">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{p.tag}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{p.name}</h3>
                <p className="mt-2 text-sm text-slate-500">Details available on request.</p>
              </article>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certs" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
          <Kicker>04 — Certified</Kicker>
          <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">Verified, not just claimed.</h2>
          <div className="mt-10 space-y-4">
            {certs.map((c) => (
              <div key={c.name} className={c.featured ? "cert-featured" : "cert-row"}>
                <div>
                  <h3 className="text-lg font-bold text-white">{c.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">{c.issuer}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-black/30 px-4 py-1.5 text-sm font-semibold text-emerald-300 transition hover:border-emerald-300 hover:text-white">{l.label}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-white/10 bg-black/40">
          <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">Contact</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl">Let&apos;s build something that <span className="gradient-text">actually works.</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">The best way to reach me is through LinkedIn or GitHub.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="rounded-full bg-emerald-400 px-7 py-3.5 font-bold text-black transition hover:bg-emerald-300">LinkedIn ↗</a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-bold text-white transition hover:border-emerald-300/60">GitHub ↗</a>
            </div>
          </div>
          <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">© Shahzad Ali · Lahore, Pakistan · Remote</footer>
        </section>
      </main>
    </>
  );
}
