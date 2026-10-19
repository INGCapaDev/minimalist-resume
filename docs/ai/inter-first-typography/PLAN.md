# Inter-first typography

## Goal and scope

Align minimalist-resume with the Inter-first font roles used by my-blog and inspired by https://antfu.me/.
Repository: `C:\Users\ftaca\DevProjects\minimalist-resume`.
Implemented on `main` from `1a7cfa4`; pre-existing untracked `.atl/` is unrelated and preserved.
S1 preserves existing sizes, spacing, width, content, English/Spanish routes, themes, and print styling. The approved S2 extension changes screen typography and spacing only, preserving accepted print output. S3 proposes editorial changes without applying them. SEO behavior and broader redesign are out of scope.

## Relevant context

Original request:

> I had a session on my-blog project and a Plan to have the font system changed and fonts to the fontsource approach with Inter and other one, to follow https://antfu.me/ system font approach, explore that session, the project, the website and lets make a plan to do the same here on this one

Design selection:

> Yes go with Inter-first approach

Final plan approval and execution authorization:

> Yes start the implementation as well

Screen-only refinement:

> Lets apply this only on screen for now.

S2 approval and S3 addition:

> Yes append this slice, and another one, to review the content of the website and propose some changes to sound more natural, more like me, you can get tone and rules and inspiration from the ingcapadev-os-content project on my docs and remove em dashes or AI slop and words from the content

S2 project-layout adjustment, selected after read-only exploration and a visual prototype:

> go with the editorial project list approach [Image 1] take care of the font system and keep it consistent with what we discuss before

Further S2 adjustment:

> Printing is showing the old component make it consistent, and on source show the github icon.

Final S2 refinement and commit authorization:

> lets commit the changes but restore the pulse effect for the online indicator. Remove the aura series website redirection lets make it private without the online indicator. And make the tags differentiate a little more than the rest of text, maybe use a mono font and make the dot a little more evident

- Reference: `C:\my-blog\docs\ai\minimalist-blog\PLAN.md`, Agreed design; its global CSS and Tailwind configuration implement Inter Variable for ordinary text and DM Mono for code.
- This resume already imports Fontsource fonts in `src/layouts/Layout.astro`; body text uses JetBrains Mono and headings use Inter. `src/components/sections/Hero.astro` overrides its subtitle to JetBrains Mono.
- `src/components/KeyboardManager.astro` contains keyboard shortcut markup. `package.json` and `pnpm-lock.yaml` own dependencies.
- Apply global AGENTS, code-quality, and coding-conventions for implementation; writing-for-agents for this plan. Planning's plan-format and Capa's planned-execution reference own progress and execution procedures.
- S3 tone sources: `C:\Users\ftaca\Documents\ingcapadev-content-os\START_HERE.md` routes the content workflow; `SYSTEM.md` and `knowledge/brand/voice.md` define direct, human, practical, proof-based writing. Load its relevant anti-patterns and user-approved examples when executing S3. Adapt the voice to a bilingual resume, not LinkedIn hooks, emojis, or engagement formatting. Read external sources only; do not mutate that project.
- S3 content owners: `src/content/cv/en.json`, `src/content/cv/es.json`, and user-visible metadata/UI copy in `src/i18n/ui.ts` and component literals.

## Agreed design

- Keep Fontsource Inter Variable and make it the default for all ordinary content, including the hero subtitle, dates, and badges.
- Replace JetBrains Mono with Fontsource DM Mono, reserved for keyboard shortcuts and any code.
- Keep shared font ownership in the existing layout, with system fallbacks and Fontsource's default swap behavior.
- Preserve resume density and print rules rather than copying the blog's reading width and type scale.
- S2 refines that constraint for screens only: body/project descriptions 16px/28px; name 36px/40px; section headings 24px/32px; entry headings 20px/32px; secondary text 14px; badges at least 12px; 65ch reading width; normal letter spacing; consistent paragraph/section rhythm. Preserve existing print rules and computed print layout using screen-only overrides.
- S2 project adjustment: use a single-column editorial list within the reading column, with generous vertical spacing, faint dividers, static active indicators, inline muted highlights, and distinct localized Website/Source links aligned beside each title when space permits and wrapped below on narrow screens. Match the supplied image's composition, not its font rendering or rewritten copy: retain Inter and existing content; DM Mono remains reserved for technical text. Keep print's existing project grid, badges, icon links, and typography. Do not widen the whole site or apply the prototype's shorter descriptions.
- Latest S2 refinement supersedes project print preservation: share the editorial project layout, inline highlights, and visible action links between screen and print; retain compact print typography and all non-project print styling. Show the GitHub icon beside Source and remove the obsolete duplicate source icon beside the title. Keep individual printed project entries together when possible. Project pagination/geometry may now change intentionally.
- Final S2 refinement: restore the pulsing active indicator on screen and keep it static in print. Make Aura Series API private by removing its website URL and active indicator; project URLs become optional, and titles without a URL render as plain text with no action navigation. Differentiate project highlights with DM Mono and normal letter spacing, and replace the middle-dot separator with a more visible bullet. These changes do not alter the approved type scale.
- S3 will identify awkward phrasing, generic marketing/AI filler, em dashes, repetition, and unsupported claims. Propose concise natural English and Spanish replacements grounded in the user's actual work and voice. Preserve verified names, dates, links, technologies, and facts; flag unverified claims rather than inventing evidence. This slice authorizes a proposal, not publishing or applying editorial changes.

## Slices

### S1 — Inter-first resume typography

Status: complete

- Update font imports and roles, remove the subtitle's monospace override, and replace the dependency and pnpm lockfile entry together.
- Acceptance: ordinary text uses Inter, technical text uses DM Mono, and JetBrains Mono is no longer referenced. Existing layout dimensions, type sizes, content, routes, themes, and print rules remain unchanged.
- Verification: Astro diagnostics without a production build; inspect source and attributable diff; browser checks for local font loading, English/Spanish at mobile and desktop widths, theme switching, overflow, and print layout. Disclose unavailable proof and pre-existing diagnostic failures. No new tests or independent review requested.

Evidence:

- Inter Variable remains at its existing locked version, 5.0.18. Replaced JetBrains Mono with DM Mono 5.3.0 using pnpm 8.15.8; no unrelated lockfile updates. Only the currently needed normal 400 monospace face is imported.
- Shared layout owns the Inter default and a monospace custom property reused by technical elements and the command palette's font variable. The hero subtitle inherits Inter. The palette's library stylesheet overrides equal-specificity font-variable rules, so `html #hotkeypad` ensures the shared font wins independently of stylesheet order; runtime checks confirm its shortcut chips use DM Mono.
- `pnpm exec astro check` passes before and after implementation: 42 files, zero errors, warnings, or hints. Final `git diff --check` passes; Git emits only existing line-ending policy notices.
- Dev server: http://127.0.0.1:4330. Headless Edge checks at 390px and 1280px on `/` and `/es` confirm Inter for ordinary sampled text, DM Mono for keyboard shortcuts, both font families loaded, same-origin WOFF2 requests returning 200, no horizontal page overflow, and working light/dark toggles and local-storage state.
- Before/after snapshots confirm unchanged resume text, type sizes/weights/line-heights/letter spacing, container widths/padding, and section spacing rules. An initial whole-main content comparison included asynchronously injected command-palette markup; the corrected comparison isolates stable resume content, and all comparisons pass. No application change was needed for that probe issue.
- English desktop/mobile screenshots visually inspected. Both locales' A4 PDFs generated and inspected with expected print-only contact information and hidden site controls; Spanish output remains three pages compared with baseline. Existing print CSS is unchanged, but line wrapping/page breaks naturally differ with font metrics. Development PDFs include Astro's dev toolbar, so these are not production-print proof; no build was run.
- Attributable diff reconciled: layout, hero font override, dependency manifest/lockfile, and this plan only. No new repository tests, independent review, commit, push, or deployment. Browser probe/snapshots/screenshots/PDFs are outside the repository in `C:\Users\ftaca\AppData\Local\Temp\opencode\resume-font-*`.
- Human accepted S1: "approved make sure the spacing, font sizes and hierchy are aligned with the antfu.me website and conventions". The requested spacing/type-scale alignment expands the original font-only scope; its design is under read-only discussion before further implementation.

### S2 — Screen reading scale and hierarchy

Status: ready-for-review
Depends on: S1

- Apply the agreed screen type scale and spacing through existing owners, including editorial projects shared with print and a GitHub icon beside Source. Non-project print styling remains at the accepted S1 baseline.
- Acceptance: both languages show the agreed screen hierarchy with readable descriptions and badges, 65ch maximum screen section width, and no horizontal overflow at mobile/desktop sizes. Projects are editorial rows in both media, with pulsing active indicators on screen, distinct localized Website/Source actions, and preserved destinations. Aura Series API is private, unlinked, and inactive. Highlights use the technical monospace role and a visible bullet separator. Remaining content, fonts, themes, and non-project print rules stay unchanged; project print geometry may change.
- Verification: preserve actual dirty baselines outside the repository. Inspect both locales' screen type scale, project layout/actions, active indicators, monospace highlights, overflow, themes, and print-media/A4 output; check unchanged non-project print styles and remaining content/font ownership. Run Astro diagnostics and diff checks without a build or new tests. Earlier exact whole-document print-preservation evidence applies only to superseded candidates.

Evidence:

- Captured the actual accepted dirty S1 source/index baseline in `C:\Users\ftaca\AppData\Local\Temp\opencode\resume-s2-source-baseline.json`; S1 changes and unrelated `.atl/` remain preserved. S2 source delta is CSS in eight existing Astro owners plus a final newline in Certificates. Content JSON, markup, scripts, dependencies, and font imports match the accepted S1 baseline.
- All new application declarations are inside `@media screen`. Existing styles remain the print baseline. Implemented agreed sizes/line heights, 65ch section width (650px computed with the installed Inter), 48px section separation, 24px below section headings, and 20px between About paragraphs. Removed the screen project grid's negative inline margin to align cards with the reading column. Existing skill badges already exceed 12px; project badges now use 12px.
- Headless Edge on `/` and `/es` at 390px, 768px, and 1280px confirms exact target name/section/entry/body sizes and line heights, 14px dates, badges at least 12px, normal letter spacing, and no horizontal page overflow. Content/link comparisons and light/dark toggle/local-storage checks pass. English desktop and Spanish mobile screenshots visually inspected; artifacts are in the approved temporary folder under `resume-s2-*`.
- Before/after print-media snapshots at all six locale/viewport combinations have identical computed typography, spacing, colors, visibility, and element geometry. A4 output remains three pages in each language. A first probe expected raw `65ch` rather than resolved CSS pixels; corrected that assertion. Another captured transitioning icon links immediately after theme/media changes; waiting for the existing 0.2s CSS transitions to settle yields exact matches without application changes.
- Final `pnpm exec astro check`: 42 files, zero errors/warnings/hints. `git diff --check` passes with only line-ending policy notices. An initial structural probe detected Certificates' new final newline; normalizing only trailing whitespace confirms no non-style source delta. No build, new repository tests, independent review, commit, push, or deployment. Unchanged S1 font-loading evidence is reused; this slice does not alter fonts.
- Dev PDFs retain the already-disclosed Astro-toolbar artifact; browser print snapshots establish preservation, not production-build print proof. S3 has not been executed. Human acceptance of S2 is pending.
- Human requested more project breathing room, then selected the editorial list and supplied an image. The earlier grid candidate is superseded; its unchanged non-project typography evidence remains useful. Recheck project layout, localized actions, preserved copy/links, and print preservation after this adjustment.

Editorial-adjustment evidence:

- Captured the pre-adjustment project component, UI dictionary, plan, and actual Git index outside the repository in `resume-editorial-source-baseline.json`. Changed only the project component, six new bilingual dictionary entries, and this plan. Existing accepted S1 and earlier S2 work remain preserved.
- Screen projects now form full-width single-column rows, with 32px on each side of faint dividers, no card borders/padding, static active dots, and 14px inline highlights separated by middle dots. Titles remain Inter 20px/32px, descriptions Inter 16px/28px, and project actions Inter 14px/20px. Metadata uses the existing primary text color for readable contrast. No custom font, mono styling, or prototype copy was introduced.
- Website/Source action labels and navigation landmarks are localized. Website actions exist for all four projects; Source appears only for the three projects with actual repository URLs. External action links have project-specific titles and `noopener noreferrer`. Desktop title/actions share a row; narrow screens wrap them without clipping. Existing title/icon links remain for print; screen-only actions are hidden there.
- Updated Edge checks pass for both locales at 390px, 768px, and 1280px: four single-column rows with consistent widths, at least 64px between article content, correct action labels/destinations/counts, Inter titles, 14px unboxed metadata, unchanged descriptions/highlights, no page overflow, and working themes. English desktop and Spanish mobile screenshots visually inspected. Existing overall screen type-scale assertions still pass.
- Normalized print comparisons exclude only the newly introduced structural wrapper and hidden action navigation; every pre-existing element retains identical computed styles and geometry at all six locale/viewport combinations. New actions compute to `display: none` in print. A4 PDFs remain three pages in both languages. Earlier production-print caveat remains applicable.
- `pnpm exec astro check` passes with zero errors/warnings/hints; `git diff --check` passes. Content JSON and font dependencies are byte-identical to accepted S1. No build, new repository tests, independent review, commit, push, or S3 execution. Revised S2 awaits human acceptance.

Print-consistency and Source-icon adjustment:

- User explicitly superseded the prior project print-preservation constraint. Captured the actual pre-adjustment component and Git index as `resume-print-editorial-baseline.json`; retained the prior browser snapshots as `resume-before-print-consistency.json` in the approved temporary folder.
- Removed the obsolete card/grid/badge styles and duplicate title-side source link. One shared editorial layout now serves both media, with visible localized Website/Source actions and a decorative GitHub icon beside the Source label. Inter remains inherited; the existing GitHub component is reused. No content, translations, font imports, or dependencies changed in this adjustment.
- Screen scale remains 20px/32px titles, 16px/28px descriptions, and 14px/20px metadata/actions. Print uses compact 16px/24px titles, 13.6px/20.4px descriptions, and 12px/18px metadata/actions, with 24px divider spacing and `break-inside: avoid` on entries. Non-project print rules remain unchanged.
- Edge checks pass in both locales at 390/768/1280px for screen hierarchy, overflow, themes, shared print editorial rows, visible print actions, exactly three Source icons, and compact print sizes. Every non-project print element retains its prior computed styles. A4 PDFs still have three pages per locale; English PDF visually inspected and shows the editorial list and GitHub icons. Dev-toolbar caveat remains; no build performed.
- Astro diagnostics: zero errors/warnings/hints across 42 files. `git diff --check` passes. Reconciled component readback with the selected design; no independent review, commit, or S3 execution. Revised S2 awaits acceptance.

Pulse, private-project, and highlight refinement:

- Captured the pre-refinement project component, schema, both content files, UI dictionary, plan, and Git index in `resume-pulse-tags-baseline.json` outside the repository. Kept all previously staged changes intact.
- Restored the pulse animation on the active project indicator and disabled it only for print. Aura Series API now has no website URL, no repository link, no action navigation, and `isActive: false` in both locales; its title renders as plain text because the project schema now allows an omitted URL. The other three projects retain their active indicators and six localized Website/Source actions.
- Project highlights now use DM Mono at the existing 14px/20px screen and 12px/18px print scales, with normal letter spacing and a `•` separator in the muted text color. The overall type scale, fonts, remaining content, themes, and non-project print rules are unchanged.
- Edge checks pass in both locales at 390/768/1280px for three pulsing active indicators, the private Aura row, six action links, three GitHub icons, DM Mono highlights with `•` separators, consistent row geometry, no horizontal overflow, and light/dark themes. Print checks pass for shared editorial rows, visible actions, static indicators, compact typography, and unchanged non-project computed styles. A4 output remains three pages per locale.
- Light-theme desktop and print-media projects screenshots visually inspected in the approved temporary folder; both show the private unlinked Aura row, mono highlights, bullets, and visible print actions. Dev PDF caveat remains.
- `pnpm exec astro check` reports zero errors/warnings/hints across 42 files; `git diff --check` passes. No build, new repository tests, independent review, or S3 execution. The human explicitly authorized committing the completed S2 changes; the unrelated pre-existing `.atl/` directory is excluded. S2 remains ready for acceptance.

### S3 — Natural bilingual content proposal

Status: pending

- Review the website's English/Spanish copy against the external Content OS tone sources. Produce a focused, section-by-section before/after proposal with brief reasons; include natural replacements for em dashes and generic or inflated language.
- Acceptance: suggestions sound direct, human, practical, and like the user's grounded developer voice; both languages preserve equivalent meaning and all factual details. Flag claims needing confirmation. Keep resume-appropriate structure rather than copying LinkedIn presentation rules. No live copy changes or external-project writes.
- Verification: trace each recommendation to current source text and relevant voice guidance; check proposed copy for remaining em dashes, filler, unsupported additions, and English/Spanish inconsistencies. Deliver the proposal in this plan's folder, referenced here without duplicating progress.
- Execution follows acceptance of the current slice; no parallel or grouped execution is authorized.

## Current progress

- Current slice: S2.
- Next action: obtain human acceptance of revised S2 before starting S3. The authorized commit includes the completed S2 source and plan changes.
