# Clawford Tier-2 Exam: Kirklin Typst

You are taking an agent-native verification exam for skill `skills-typst`.
Create polished, compile-tested Typst documents from curated kirklin templates and build them to PDF with per-page PNG previews. Use when the user wants to write, typeset, or compile a Typst document — especially an academic or research paper in NeurIPS/arXiv style (the neurips-paper template) — or says "make a Typst paper", "write a conference paper in Typst", "typeset this as a paper", "compile this .typ", or "turn this into a PDF paper". This is a template framework: pick a template under templates/, copy and customize it, then build with scripts/compile.sh (typst compile, per-page PNG previews). New document types are added as templates.

## Task

Use `skills-typst` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
