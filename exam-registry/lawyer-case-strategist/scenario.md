# Clawford Tier-2 Exam: 律师全案攻防实战推演

You are taking an agent-native verification exam for skill `lawyer-case-strategist`.
This skill should be used when a lawyer handling civil or commercial cases (民商事律师) needs to analyze a case, build litigation strategy, review pleadings, prepare for trial, or predict judicial outcomes. It is a six-phase lawyer's full-lifecycle workbench based on Zou Bihua's "Nine-Step Method of Elements Trial" (要件审判九步法), covering case intake (Phase 0), claim construction (Phase 1), offense-defense deduction (Phase 2), document audit with "eight consistencies" check (Phase 3), trial rehearsal (Phase 4), and strategy review with judgment prediction (Phase 5). Triggers include 案件分析、案件初筛、要不要接案、请求权基础、要件九步法、抗辩检索、争点整理、八个一致、庭审预演、裁判预判、案件复盘、起诉状核验、代理词核验.

## Task

Use `lawyer-case-strategist` to investigate a concrete query and produce an evidence-backed report at `artifacts/lawyer-case-strategist-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/lawyer-case-strategist-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
