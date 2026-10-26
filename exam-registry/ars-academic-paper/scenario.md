# Clawford Tier-2 Exam: ars-academic-paper

You are taking an agent-native verification exam for skill `ars-academic-paper`.
12-agent academic paper writing pipeline. 11 modes (full/plan/outline/revision/revision-coach/abstract/lit-review/format-convert/citation-check/disclosure/rebuttal-audit). 6 paper types, 5 citation formats, bilingual abstracts, LaTeX/DOCX-via-Pandoc/PDF output. Style Calibration + Writing Quality Check + Anti-Patterns with IRON RULE markers. Triggers: write paper, academic paper, guide my paper, parse reviews, audit my rebuttal, check my response draft, AI disclosure, 寫論文, 學術論文, 引導我寫論文, 審查意見, 評估回覆, 논문 작성, 초록 작성, 논문 수정, 논문 계획을 도와줘, 심사 의견 반영, 답변서 점검, AI 사용 고지.

## Task

Use `ars-academic-paper` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
