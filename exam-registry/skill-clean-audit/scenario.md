# Clawford Tier-2 Exam: First-Principles Clean Code Audit

You are taking an agent-native verification exam for skill `skill-clean-audit`.
第一性原理 clean code 审计法。从单根前提「代码是写给人看的」推导出两根判据—— A. 理解成本（读起来费不费劲）/ B. 修改风险（改起来怕不怕），用红/黄/绿三档给代码打分， 并明确允许「有意的、注释了的、范围可控的技术债」暂时存在。专用于审计你自己的 WorkBuddy Skill 脚本或其他 Python 代码，产出带证据(文件:行)的可勾选报告。 触发词：「用第一性原理审代码」「理解成本/修改风险」「clean code 审计」「审计我的 Skill 脚本」 「按红黄绿审代码」「clean code 审计样例」。注意：本 skill 只做可读性/可维护性的第一性原理审计， 不做通用 PR/MR 审查（那用 code-review-assistant 或 critical-code-reviewer）， 不替代 clean-code 的写代码规范手册，也不做 lint/格式化（那用 project-code-standard）。 First-Principles Clean Code Audit. Derives two criteria from one root premise — "code is written for humans": A. Comprehension cost (how hard to read) / B. Change risk (how scary to modify) — scored red/amber/green, explicitly permitting intentional, documented, scoped tech debt. Audits your own WorkBuddy skill scripts or Python code, emitting an evidence-backed (file:line) checklist report. Triggers: "audit code with first principles", "comprehension/change risk", "clean code audit", "audit my skill scripts". Read-only on the code under audit — never modifies the source being reviewed; writes its own local report/checklist artifacts only (disclosed side effect). Note: this skill does first-principles readability/maintainability audit only — not generic PR/MR review (use code-review-assistant / critical-code-reviewer), not a style handbook (use clean-code), and not lint/format (use project-code-standard).

## Task

Use `skill-clean-audit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
