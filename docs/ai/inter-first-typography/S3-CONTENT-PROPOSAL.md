# S3 content proposal

Status: approved and applied on 2026-10-19; human authorized commit. See `PLAN.md` for implementation evidence.

Scope: English and Spanish copy for the resume, including the hero, About, experience, projects, metadata, UI labels, and an optional soft-skills review. Names, dates, companies, institutions, certificate titles, URLs, technologies, and section structure stay unchanged unless a technical name needs standard spelling.

Sources reviewed:

- Current copy: `src/content/cv/en.json`, `src/content/cv/es.json`, `src/i18n/ui.ts`, `src/components/sections/*`, `src/components/ToggleTheme.astro`, `src/components/KeyboardManager.astro`.
- Voice: `SYSTEM.md`, `CONTENT_MISSION.md`, `AGENT_PROTOCOL.md`, `knowledge/brand/voice.md`, `knowledge/brand/anti-patterns.md`, `knowledge/brand/phrases.md`, `knowledge/brand/ubiquitous-language.md`, `knowledge/references/taste-principles.md`, `knowledge/examples/canonical-posts.md`, `knowledge/examples/editorial-regression-suite.md`.
- The Content OS is a LinkedIn system. This proposal borrows its voice and anti-fluff rules, not its hooks, emojis, CTAs, or mobile-first line breaks.

How to read: each section shows the current text, the proposed text, the reason, and anything that needs confirmation. Em dashes appear only in quoted current copy. Every proposed paragraph was checked for new facts, metrics, or claims.

## 1. Hero label

Source: `src/content/cv/en.json:4`, `src/content/cv/es.json:4`.

**EN before**

> Full-Stack Developer with a Backend focus, specializing in web development and dedicated to creating impactful and functional digital experiences

**EN after**

> Full-stack developer with a backend focus. I build web products that work.

**ES before**

> Desarrollador Full-Stack con enfoque en Backend, especializado en desarrollo web y dedicado a crear experiencias digitales impactantes y funcionales

**ES after**

> Desarrollador full-stack con enfoque en backend. Construyo productos web que funcionan.

Why: removes the redundant "specializing in web development" and the generic "impactful and functional digital experiences." Keeps the backend focus. Two short sentences match the hero hierarchy and the direct voice.

Confirm: "Web products" is a safe umbrella. If you want to emphasize e-commerce, use "web products and e-commerce" / "productos web y e-commerce," but that adds scope.

## 2. About

### 2.1 First paragraph

Source: `src/content/cv/en.json:11`, `src/content/cv/es.json:11`.

**EN before**

> I'm a guy striving to make a mark in the web development world under the name INGCapaDev. I have experience in startup environments, where I've accelerated development and collaborating on client projects. My proactive problem-solving skills ensure optimal functionality, stunning design, and exceptional user experiences.

**EN after**

> I'm Alvaro, a full-stack developer building under the name INGCapaDev. I've worked in startup environments, shipping features and collaborating with clients on real products. I care about solving the right problem, keeping the code clean, and making the product feel simple.

**ES before**

> Soy un chico esforzándose por dejar huella en el mundo del desarrollo web bajo el nombre de INGCapaDev. Tengo experiencia en entornos de startups, donde he acelerado el desarrollo y colaborando en proyectos para clientes. Mis habilidades proactivas para resolver problemas aseguran una funcionalidad óptima, un diseño impresionante y experiencias de usuario excepcionales.

**ES after**

> Soy Alvaro, desarrollador full-stack y construyo bajo el nombre de INGCapaDev. He trabajado en entornos de startup, entregando features y colaborando con clientes en productos reales. Me importa resolver el problema correcto, mantener el código limpio y que el producto se sienta simple.

Why: fixes the grammar in "and collaborating," removes "guy striving to make a mark," and replaces "optimal functionality, stunning design, exceptional user experiences" with concrete values. "The right problem," "clean code," and "simple" are grounded in the brand vocabulary instead of marketing language.

Confirm: "Real products" is supported by the current "client projects." If you prefer, say "client projects" instead of "real products." "Features" is intentional developer Spanglish; use "funcionalidades" if you want neutral Spanish.

### 2.2 Second paragraph

Source: `src/content/cv/en.json:14`, `src/content/cv/es.json:14`.

**EN before**

> Fueled by my passion for productivity, I create custom tools to boost efficiency, often becoming my own client. I share my journey and insights on my personal blog, which you can find linked in the projects section, merging my love for web development with my commitment to self-improvement.

**EN after**

> I build tools to remove friction from my own work, so I'm often my first user. I write about what I learn on my blog, which you can find in the projects section. That mix of building and writing is how I keep improving.

**ES before**

> Impulsado por mi pasión por la productividad, creo herramientas personalizadas para aumentar mi eficiencia, a menudo convirtiéndome en mi propio cliente. Comparto mi trayectoria y conocimientos en mi blog personal, el link se encuentra en la sección de proyectos, fusionando mi amor por el desarrollo web y mi compromiso con la superación personal.

**ES after**

> Creo herramientas para reducir fricción en mi propio trabajo, así que casi siempre soy mi primer usuario. Escribo lo que aprendo en mi blog, que puedes encontrar en la sección de proyectos. Esa mezcla de construir y escribir es cómo sigo mejorando.

Why: replaces "fueled by passion," "boost efficiency," and "merging my love" with the brand's "friction" language and a concrete habit. Keeps the custom tools, the blog, and the self-improvement idea.

Confirm: "Often my first user" is a softer version of "often becoming my own client." If it is always true, say "I'm my first user." If you want to keep the client framing, say "my own first client."

### 2.3 Third paragraph

Source: `src/content/cv/en.json:17`, `src/content/cv/es.json:17`.

**EN before**

> My goal is to simplify and enhance people's lives through digital innovation, cultivating and expanding the INGCapaDev brand, and creating a lasting impact on the web development community.

**EN after**

> Long term, I want INGCapaDev to be known for useful software and clear thinking. That matters more to me than shipping more features.

**ES before**

> Mi objetivo es simplificar y mejorar la vida de las personas a través de la innovación digital, cultivando y expandiendo la marca INGCapaDev, y creando un impacto duradero en la comunidad de desarrollo web.

**ES after**

> A largo plazo, quiero que INGCapaDev sea conocido por software útil y pensamiento claro. Eso me importa más que sacar más features.

Why: replaces the corporate mission with a grounded brand goal and a point of view. Keeps the long-term ambition without "digital innovation," "cultivating the brand," or "lasting impact."

Confirm: this drops the explicit community-impact line. If that matters, add one concrete sentence, for example "I also want to help other developers learn in public," but only if it is true. Otherwise the shorter version is stronger.

## 3. Experience

### 3.1 Voltz

Source: `src/content/cv/en.json:48`, `src/content/cv/es.json:49`.

**EN before**

> Development of a quoting and e-commerce tool for the sale of electrical materials, I collaborated on the design and implementation of various e-commerce views and interfaces. Additionally, I developed TypeScript scripts to manage our Firebase database at scale. I also designed APIs for comprehensive data collection analytics, implemented artificial intelligence features into a chatbot, and successfully redesigned the checkout process to significantly increase sales conversion rates.

**EN after**

> I work on a quoting and e-commerce tool for electrical materials. I helped design and build several storefront views, wrote TypeScript scripts to manage a large Firebase database, and built APIs for data collection and analytics. I also added AI features to a chatbot and redesigned the checkout flow, which helped increase conversion.

**ES before**

> Desarrollo de una herramienta de cotización y e-commerce para la venta de material electrico, colaboré en el diseño e implementación de varias vistas e interfaces del e-commerce. Además, desarrollé scripts en TypeScript para gestionar nuestra base de datos Firebase a gran escala. También diseñé APIs para análisis exhaustivos de recolección de datos, implementé características de inteligencia artificial en un chatbot y rediseñé con éxito el proceso de pago para aumentar significativamente las tasas de conversión de ventas.

**ES after**

> Trabajo en una herramienta de cotización y e-commerce para material eléctrico. Ayudé a diseñar y construir varias vistas e interfaces del e-commerce, escribí scripts en TypeScript para manejar una base de datos Firebase a gran escala y desarrollé APIs para recolectar y analizar datos. También agregué funciones de IA a un chatbot y rediseñé el proceso de pago para mejorar la conversión.

Why: breaks the run-on into short sentences, fixes the comma splice, and removes "comprehensive," "successfully," and "significantly." Keeps the quoting and e-commerce tool, electrical materials, views and interfaces, TypeScript and Firebase, analytics APIs, the AI chatbot, the checkout redesign, and the conversion outcome.

Confirm: "Helped increase conversion" is softer than "significantly increase sales conversion rates." If you have a real number, use it. If not, keep the softer claim. "Large Firebase database" and "a gran escala" match the current copy; soften them if the scale is smaller than that.

### 3.2 Luthor Solutions

Source: `src/content/cv/en.json:57`, `src/content/cv/es.json:58`.

**EN before**

> Developed scalable APIs with NestJS, integrating Neo4J, SQL, Firebase, and SQLite databases. Created microservices for mailing, authentication, reporting, and storage using Firebase and Cloudflare R2. Implemented Google Analytics for data tracking across multiple websites. Designed dynamic, responsive landing pages with React, NextJS, and Tailwind CSS, and translated Figma designs into interactive websites. Built complex web applications using React, Vite, and Redux Toolkit for advanced state management and side effects.

**EN after**

> I built APIs with NestJS and connected them to Neo4j, SQL, Firebase, and SQLite. I also built microservices for email, authentication, reporting, and storage with Firebase and Cloudflare R2, set up Google Analytics across several sites, and turned Figma designs into responsive landing pages with React, Next.js, and Tailwind. I worked on larger React apps with Vite and Redux Toolkit for state and side effects.

**ES before**

> Desarrollé APIs escalables con NestJS, integrando las bases de datos Neo4J, SQL, Firebase y SQLite. Creé microservicios para correos, autenticación, informes y almacenamiento utilizando Firebase y Cloudflare R2. Implementé Google Analytics para el seguimiento de datos en múltiples sitios web. Diseñé landing pages dinámicas y responsivas  con React, NextJS y Tailwind CSS, y converti diseños de Figma en sitios web interactivos. Construí aplicaciones web complejas utilizando React, Vite y Redux Toolkit para la gestión avanzada de estado y efectos secundarios.

**ES after**

> Construí APIs con NestJS y las conecté con Neo4j, SQL, Firebase y SQLite. También creé microservicios para correo, autenticación, reportes y almacenamiento con Firebase y Cloudflare R2, implementé Google Analytics en varios sitios y convertí diseños de Figma en landing pages responsivas con React, Next.js y Tailwind. Trabajé en aplicaciones React más grandes con Vite y Redux Toolkit para manejar estado y efectos secundarios.

Why: removes "scalable," "complex," and "advanced" where they are unproven intensifiers, and uses natural verbs. Keeps the full stack and scope: NestJS, Neo4j, SQL, Firebase, SQLite, microservices, email, authentication, reporting, storage, Cloudflare R2, Google Analytics, React, Next.js, Tailwind, Figma, Vite, and Redux Toolkit.

Confirm: "Larger React apps" is a paraphrase of "complex web applications." If you want to keep "complex," use "more complex React apps." "State and side effects" is accurate; "advanced" adds nothing.

## 4. Projects

### 4.1 INGCapaDev AI Workflow

Source: `src/content/cv/en.json:158`, `src/content/cv/es.json:159`.

**EN before**

> Lightweight human-in-the-loop AI development workflow for OpenCode — collaborative planning, small tasks, focused evidence, and two-axis review, with its Astro landing.

**EN after**

> A lightweight, human-in-the-loop workflow for AI-assisted development in OpenCode. It focuses on collaborative planning, small tasks, clear evidence, and review from two angles, with an Astro landing page.

**ES before**

> Flujo de desarrollo IA ligero con "human in the loop" para OpenCode — planificación colaborativa, tareas pequeñas, evidencia enfocada y revisión en dos ejes, con su landing en Astro.

**ES after**

> Un flujo ligero con human in the loop para desarrollo asistido por IA en OpenCode. Se enfoca en planificación colaborativa, tareas pequeñas, evidencia clara y revisión desde dos ángulos, con su landing en Astro.

Why: removes the em dash, the internal "AI harness" phrasing from the description, and the unexplained "two-axis review." Keeps the human-in-the-loop workflow, OpenCode, planning, small tasks, evidence, review, and Astro landing.

Confirm: if "two-axis review" is the actual product term, keep it and add a short explanation, for example "review from two angles: plan and standards." The proposed wording is the plain-language version.

Tags: keep `OpenCode`, `AI harness`, `Astro`, and `AI Skills` if those are the terms you use. If "AI harness" feels too internal, use "AI workflow." If "AI Skills" refers to agent skills, "Agent skills" is clearer. Confirm the terms before changing them.

### 4.2 Aura Series API

Source: `src/content/cv/en.json:171-177`, `src/content/cv/es.json:172-178`.

**EN before**

> API for Aura Series, a social media platform for sharing and discovering new series, with search and recommendation features.

**EN after**

> Private API for Aura Series, a social platform for sharing and discovering series. It covers search, recommendations, authentication, and email for a large user base.

**ES before**

> API para Aura Series, una plataforma de redes sociales para compartir y descubrir nuevas series, con funciones de búsqueda y recomendación.

**ES after**

> API privada para Aura Series, una plataforma social para compartir y descubrir series. Cubre búsqueda, recomendaciones, autenticación y correo para una base grande de usuarios.

Why: explains why the project has no link, removes the vague "with search and recommendation features," and turns the highlights into a natural sentence. Keeps the API, series sharing and discovery, search, recommendations, authentication, email, and user base.

Confirm: "Large user base" and "base grande de usuarios" are softer than "Massive." If you have a real number, use it. If not, keep "large," or say "a growing user base" / "una base de usuarios en crecimiento." Since the project is private, decide whether you want to mention user scale at all.

Tags: change "Massive user base" to "Large user base" / "Base grande de usuarios" (or a real number). Change "Mailing" to "Email" / "Correo." Use "NestJS & Neo4j."

### 4.3 Personal Blog

Source: `src/content/cv/en.json:182-188`, `src/content/cv/es.json:183-189`.

**EN before**

> My personal blog where I share my experiences and knowledge about web development, productivity and other interesting topics.

**EN after**

> My personal blog about web development, productivity, and whatever I'm learning. It's available in English and Spanish, built with Astro, and scores 100/100 on Lighthouse.

**ES before**

> Mi blog personal donde comparto mis experiencias y conocimientos sobre desarrollo web, productividad y otros temas interesantes.

**ES after**

> Mi blog personal sobre desarrollo web, productividad y lo que voy aprendiendo. Está disponible en inglés y español, hecho con Astro, y tiene 100/100 en Lighthouse.

Why: replaces "experiences and knowledge" and "other interesting topics" with natural language. Makes the bilingual and Astro facts concrete. Keeps the blog, web development, productivity, learning, and Lighthouse.

Confirm: "Scores 100/100 on Lighthouse" must be current. If it was a past result, say "scored 100/100" or "Lighthouse 100/100 at launch." "Available in English and Spanish" assumes the blog has both languages; if it has more, say "multilingual." "PWA" is in the tags; if it is no longer a PWA, remove it.

Tags: propose `English & Spanish`, `SEO`, `Lighthouse 100/100`, `PWA`, `Astro` in English and `Inglés y español`, `SEO`, `Lighthouse 100/100`, `PWA`, `Astro` in Spanish. "SEO optimized" and "PWA Ready" are badge-speak; the shorter labels say the same thing. Confirm the Lighthouse score and PWA status.

### 4.4 JB Baseball Game

Source: `src/content/cv/en.json:196-202`, `src/content/cv/es.json:197-203`.

**EN before**

> A baseball game simulator, which allow you to mark all the plays available in a baseball game and save a record of the players' plays.

**EN after**

> A baseball game simulator for scoring plays and keeping a record of what each player does. It's designed for fullscreen play, with sound effects and state management for a full game.

**ES before**

> Un simulador de juego de béisbol que te permite marcar todas las jugadas disponibles en un juego de béisbol y guardar un registro de las jugadas de los jugadores.

**ES after**

> Un simulador de béisbol para marcar jugadas y llevar un registro de lo que hace cada jugador. Está pensado para jugar en pantalla completa, con efectos de sonido y gestión de estado para un juego completo.

Why: fixes "which allow" and "players' plays," removes "fullscreen oriented" and "complex," and keeps scoring, records, fullscreen play, sound, and state management.

Confirm: "Scoring plays" is the natural description. If the simulator does more than scoring, say "simulating plays and keeping a record." The current copy says "mark all the plays available," so "scoring plays" is close.

Tags: propose `Fullscreen`, `Sound effects`, `State management`, `React`, `Redux Toolkit` in English and `Pantalla completa`, `Efectos de sonido`, `Gestión de estado`, `React`, `Redux Toolkit` in Spanish. Drops "oriented" and "complex" without losing the stack.

## 5. Metadata and UI copy

### 5.1 Page description

Source: `src/i18n/ui.ts:11-12`, `src/i18n/ui.ts:47-48`.

**EN before**

> Explore Alvaro's professional experience, projects, and education through this clean, minimalistic, and print-ready web resume. Discover a comprehensive overview of skills, accomplishments, and expertise in web development. Whether you're looking to collaborate on a project or learn more about Alvaro's career journey, you'll find detailed information and easy navigation throughout the site.

**EN after**

> The resume of Alvaro Capaceta, a full-stack developer focused on backend. Startup experience, e-commerce, APIs, AI workflows, selected projects, and education.

**ES before**

> Explora la experiencia profesional, los proyectos y la educación de Álvaro a través de este currículum web minimalista y listo para imprimir. Descubre una visión completa de sus habilidades, logros y experiencia en desarrollo web. Ya sea que busques colaborar en un proyecto o aprender más sobre la trayectoria profesional de Álvaro, encontrarás información detallada y una navegación sencilla en todo el sitio.

**ES after**

> Currículum de Álvaro Capaceta, desarrollador full-stack con enfoque en backend. Experiencia en startups, e-commerce, APIs, flujos de trabajo con IA, proyectos seleccionados y educación.

Why: replaces the long second-person sales pitch with a direct summary. Keeps the name, role, backend focus, startup experience, e-commerce, APIs, AI workflows, projects, and education. It reads like a person wrote it and still carries the search terms.

Confirm: the Spanish version uses "Álvaro" while the shared name field uses "Alvaro." Decide which spelling is canonical and apply it consistently. If the name is legally "Alvaro," use "Alvaro" in Spanish too.

### 5.2 Spanish UI typos

- `src/i18n/ui.ts:64`: "Ver el codigo fuente de" becomes "Ver el código fuente de."
- `src/i18n/ui.ts:71`: "Escribe un comando o busqueda:" becomes "Escribe un comando o búsqueda:."

These are clear corrections, not style preferences.

### 5.3 Link labels and accessibility copy

- `certificates.link` in English: "See the certificate of" becomes "View certificate for." The Spanish "Ver el certificado de" is fine.
- `themeToggle` in `src/components/ToggleTheme.astro:1` uses the hardcoded English aria-label "Theme Toggle" on both locales. Use the existing `commands.toggleTheme` translation ("Toggle theme" / "Cambiar tema") or a dedicated key. This is accessibility copy, not visible text.
- Optional: the hero link titles are wordy. Current English: "Send an email to Alvaro Capaceta Magallanes at the following address: ingcapadev@gmail.com." A shorter accessible label is "Email Alvaro Capaceta Magallanes at ingcapadev@gmail.com." Spanish: "Envía un correo a Alvaro Capaceta Magallanes a ingcapadev@gmail.com." The same pattern applies to phone and social links. This needs a small markup change, so treat it as lower priority.

### 5.4 Labels that are already fine

- `title`: "Resume of" / "Currículum de."
- `section.about`, `section.experience`, `section.education`, `section.projects`, `section.certifications`, `section.skills`, `section.softSkills`.
- `currentDateString`: "Current" / "Actual."
- `remoteString`: "Remote" / "Remoto."
- `projects.link`, `projects.links`, `projects.website`, `projects.source`.
- `commands.print`, `commands.language`, `commands.footer.*`, `changeLanguage`.
- The print footer message, "See the web version at:" / "Ver la versión web en:."

## 6. Optional soft-skills review

Source: `src/content/cv/en.json:128-153`, `src/content/cv/es.json:129-154`.

The technical skills are specific and useful. The soft-skills list is the most generic part of the resume. "Growth mindset," "Innovation," and "Time management" could belong to anyone. If you want this section to sound like you, use fewer labels that you can defend with evidence.

Possible set, only if true:

- EN: `Debugging`, `Technical writing`, `Code review`, `Collaboration`, `Prioritization`.
- ES: `Debugging`, `Escritura técnica`, `Revisión de código`, `Colaboración`, `Priorización`.

Why: these are concrete behaviors. Technical writing is supported by the blog. Code review and collaboration are supported by team work. Debugging and prioritization are common developer behaviors, but confirm them.

If you do not have evidence for a label, keep the current list. A generic list is weaker, but an invented one is worse.

## 7. Technical naming and consistency

- Use "Neo4j," not "Neo4J." This affects the Luthor summary, the Aura tags, and the skills list.
- Use "Next.js," not "NextJS." This affects the Luthor summary.
- Use "full-stack" and "backend" lowercase in running prose. Keep "Full-Stack" only if a heading or job title requires it.
- Use "e-commerce" consistently, with the hyphen.
- Use "checkout" in English and "proceso de pago" in Spanish.
- Use "email" in English and "correo" in Spanish.
- Use "Mazatlán" in Spanish and either "Mazatlan" or "Mazatlán" in English, but choose one. The current location field has no accent.
- Decide between "Alvaro" and "Álvaro" and apply it consistently across the name field, Spanish prose, and metadata.

## 8. Factual checks before applying

| Claim | Where | Action |
|---|---|---|
| Massive user base | Aura description and tag | Confirm a number or soften to "large" / "growing." Decide whether a private project should disclose scale. |
| 100/100 Lighthouse score | Personal Blog description and tag | Verify it is current. If not, date it or remove the number. |
| Significantly increase sales conversion rates | Voltz summary | Confirm a metric or keep "helped increase conversion." |
| Accelerated development | About paragraph 1 | The proposed copy drops it. If it is important, say what it means, for example "shipped faster with smaller releases." |
| AI features in a chatbot | Voltz summary | Specify the feature if possible, for example "AI-assisted responses" or "chatbot automation." |
| Often my own client | About paragraph 2 | Confirm. The proposal uses "often my first user." |
| Multilanguage / bilingual | Personal Blog | Confirm the blog is English and Spanish. If it has more languages, say "multilingual." |
| PWA Ready | Personal Blog tag | Confirm it is still a PWA. |
| Two-axis review | AI Workflow | Confirm the term. If it is internal, explain it or use "review from two angles." |
| AI harness | AI Workflow tag | Confirm it is the term you want in public copy. |
| Real products | About paragraph 1 | Confirm it reflects your client work. Otherwise use "client projects." |

No new metrics, clients, stories, or results are introduced in the proposed copy.

## 9. What stays unchanged

- Names, dates, companies, institutions, certificate titles, URLs, and technologies.
- Section order and resume structure.
- Technical skills, except for standard spelling such as Neo4j and Next.js.
- The bilingual split and the existing English/Spanish routes.
- The print structure.
- No LinkedIn hooks, emojis, CTAs, hashtags, or engagement formatting.

## 10. Verification

Source trace:

- Hero: `en.json:4`, `es.json:4`.
- About: `en.json:11-17`, `es.json:11-17`.
- Voltz: `en.json:48`, `es.json:49`.
- Luthor: `en.json:57`, `es.json:58`.
- AI Workflow: `en.json:158`, `es.json:159`.
- Aura: `en.json:171-177`, `es.json:172-178`.
- Personal Blog: `en.json:182-188`, `es.json:183-189`.
- JB Baseball Game: `en.json:196-202`, `es.json:197-203`.
- Metadata: `ui.ts:11-12`, `ui.ts:47-48`.
- UI typos and labels: `ui.ts:64`, `ui.ts:71`, `ToggleTheme.astro:1`.
- Soft skills: `en.json:128-153`, `es.json:129-154`.

Voice trace:

- Direct, human, reflective, practical: `SYSTEM.md` writing identity and style.
- Technical without being dense, no marketing team, no guru, no AI motivational tone: `voice.md`.
- No generic LinkedIn language, fake authority, corporate thought-leader voice, over-polished AI writing, or empty motivation: `anti-patterns.md`.
- Use `criterio`, `proof of work`, `fricción`, and `human in the loop` where they fit: `ubiquitous-language.md`.
- Specificity, cut the warm-up, protect strong lines, do not over-polish: `taste-principles.md`.
- Borrow mechanisms from canonical work, not exact phrases: `canonical-posts.md`, `phrases.md`.

Checks performed:

- Every "before" quote matches the current file text.
- Proposed copy contains no em dashes. Em dashes appear only in quoted current copy.
- Proposed copy removes the identified filler and inflated language: "impactful," "functional experiences," "striving to make a mark," "optimal," "stunning," "exceptional," "fueled by passion," "boost efficiency," "merging my love," "lasting impact," "comprehensive," "significantly," "successfully," "scalable," "complex," "advanced," "massive," "dynamic," "interactive," "other interesting topics," "fullscreen oriented," "PWA Ready," "SEO optimized," and "multilanguage."
- English and Spanish paragraphs carry the same meaning and the same level of detail.
- No new facts, metrics, clients, stories, or results were added.
- Technical names, dates, companies, institutions, certificate titles, and URLs are preserved, with standard spelling proposed for Neo4j and Next.js.
- The proposal phase made no live content or UI changes. The approved copy was applied in a separate authorized step; see `PLAN.md` for implementation evidence.

Next step: none. No push or deployment is authorized. Further edits require separate authorization.
