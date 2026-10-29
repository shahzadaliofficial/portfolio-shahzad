import Head from "next/head";

const LINKEDIN = "https://www.linkedin.com/in/shahzadali786";
const GITHUB = "https://github.com/ShahzadAliOfficial";

const skillGroups = [
  { title: "Languages & Frontend", items: ["TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { title: "Backend", items: ["NestJS", "Node.js", "Prisma", "TypeORM"] },
  { title: "Data & Payments", items: ["PostgreSQL", "Stripe"] },
  { title: "DevOps & Cloud", items: ["Docker", "AWS", "CI/CD"] },
  { title: "AI & Agents", items: ["Claude Code", "MCP", "AI-agent automation"] },
];

const experience = [
  { role: "Junior Associate Full Stack Developer", org: "XtractSol Pvt Ltd, Lahore", period: "Jul 2025 — Present", note: "Resume title: Associate Full Stack Software Engineer." },
  { role: "MERN Stack Intern", org: "Merak Consultants", period: "Sep 2024 — Feb 2025", note: "" },
  { role: "MERN Stack Intern", org: "University of South Asia", period: "Mar 2025 — Jun 2025", note: "" },
];

const projects = [
  {
    name: "Global Real Estate Marketplace & Title Search Engine",
    tag: "AI Agents · Full-Stack",
    body: "AI-agent platform for US title searches: agents run county searches, gather chain-of-title, mortgage and lien records, and compile a title report. Built with NestJS, React, Claude-based agents and Playwright."
  },
  { name: "Taskify", tag: "Project", body: "Project listed by name. Details available on request." },
  { name: "Agent & Seller Onboarding Platform", tag: "Project", body: "Project listed by name. Details available on request." },
];

const certs = [
  { name: "Claude Certified Architect — Foundations", issuer: "Anthropic", links: [
    { label: "Credly", href: "https://www.credly.com/badges/06b1c3ea-e853-4474-9c07-e2384bf629cd/linked_in_profile" },
    { label: "Skilljar verification", href: "https://verify.skilljar.com/c/8sq3wcjpp8ft" },
  ]},
  { name: "Building with the Claude API", issuer: "Anthropic Academy · Apr 2026", links: [{ label: "Verification", href: "https://verify.skilljar.com/c/dfgp76kd8ch7" }] },
  { name: "Claude Code in Action", issuer: "Anthropic Academy · Apr 2026", links: [{ label: "Verification", href: "https://verify.skilljar.com/c/t2jiaxaggu3z" }] },
  { name: "Introduction to Agent Skills", issuer: "Anthropic Academy · Apr 2026", links: [{ label: "Verification", href: "https://verify.skilljar.com/c/kbgeznr5pwnq" }] },
  { name: "Introduction to Model Context Protocol (MCP)", issuer: "Anthropic Academy · Apr 2026", links: [{ label: "Verification", href: "https://verify.skilljar.com/c/zjfjzj2uzjqi" }] },
];

function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{kicker}</p>
      <h2 className="mt-2 text-3xl font-bold text-white">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
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

      <header className="sticky top-0 z-10 border-b border-line bg-ink/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-bold text-ink">SA</span>
            <span className="font-bold text-white">Shahzad Ali</span>
          </a>
          <div className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#certifications" className="hover:text-white">Certifications</a>
          </div>
          <a href="#contact" className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto max-w-5xl px-5 pb-16 pt-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Remote · Lahore, Pakistan</p>
          <h1 className="mt-4 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
            Shahzad Ali
          </h1>
          <p className="mt-3 text-2xl font-semibold text-slate-200">Full-Stack Developer &amp; AI Engineer</p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            I build full-stack web applications and AI-agent automation with TypeScript,
            NestJS, Next.js and PostgreSQL — from multi-tenant SaaS backends to agent
            workflows that search, gather and compile real data.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="rounded-full bg-accent px-5 py-3 font-semibold text-ink">LinkedIn</a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="rounded-full border border-line bg-card px-5 py-3 font-semibold text-white">GitHub</a>
            <a href="#projects" className="rounded-full border border-line px-5 py-3 font-semibold text-slate-200">View projects</a>
          </div>
        </section>

        <Section id="about" kicker="About" title="About">
          <div className="grid gap-6 md:grid-cols-2">
            <p className="leading-relaxed text-slate-300">
              Full-stack developer based in Lahore, Pakistan, working remotely. I hold a
              BS in Computer Science from the University of Management and Technology,
              Lahore (2020–2025), and work across the stack — from React and Next.js
              front ends to NestJS APIs, PostgreSQL data models, Docker, AWS and CI/CD.
            </p>
            <div className="rounded-2xl border border-line bg-card p-6">
              <h3 className="font-bold text-white">AI &amp; model training</h3>
              <p className="mt-2 leading-relaxed text-slate-300">
                Alongside agent-based development with Claude Code and MCP, I have trained
                models during university and for a client ASL application on an ASL dataset.
              </p>
            </div>
          </div>
        </Section>

        <Section id="skills" kicker="Skills" title="What I work with">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.title} className="rounded-2xl border border-line bg-card p-6">
                <h3 className="font-bold text-white">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="rounded-full bg-ink px-3 py-1 text-sm text-slate-200">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" kicker="Experience" title="Experience & education">
          <div className="space-y-4">
            {experience.map((e) => (
              <div key={e.role + e.org} className="rounded-2xl border border-line bg-card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">{e.role}</h3>
                  <span className="text-sm text-accent">{e.period}</span>
                </div>
                <p className="mt-1 text-slate-300">{e.org}</p>
                {e.note ? <p className="mt-2 text-sm text-slate-400">{e.note}</p> : null}
              </div>
            ))}
            <div className="rounded-2xl border border-line bg-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold text-white">BS Computer Science</h3>
                <span className="text-sm text-accent">2020 — 2025</span>
              </div>
              <p className="mt-1 text-slate-300">University of Management and Technology, Lahore</p>
            </div>
          </div>
        </Section>

        <Section id="projects" kicker="Projects" title="Selected projects">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.name} className="rounded-2xl border border-line bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">{p.tag}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{p.name}</h3>
                <p className="mt-3 leading-relaxed text-slate-300">{p.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="certifications" kicker="Certifications" title="Certifications">
          <div className="space-y-4">
            {certs.map((c) => (
              <div key={c.name} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-card p-6">
                <div>
                  <h3 className="font-bold text-white">{c.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">{c.issuer}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="rounded-full border border-line px-3 py-1 text-sm text-accent hover:text-white">{l.label} →</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" kicker="Contact" title="Let's talk">
          <p className="max-w-2xl leading-relaxed text-slate-300">
            The best way to reach me is through LinkedIn or GitHub.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="rounded-full bg-accent px-5 py-3 font-semibold text-ink">LinkedIn</a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="rounded-full border border-line bg-card px-5 py-3 font-semibold text-white">GitHub</a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-slate-400">
        © Shahzad Ali · Lahore, Pakistan · Remote
      </footer>
    </>
  );
}
