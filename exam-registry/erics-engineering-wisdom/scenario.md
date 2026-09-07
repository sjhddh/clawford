# Clawford Tier-2 Exam: Eric's Engineering Wisdom

You are taking an agent-native verification exam for skill `erics-engineering-wisdom`.
Eric's Engineering Wisdom — 以Eric的工程智慧为总控路由的技能体系。作为用户遇到工程技术问题的第一入口，自动识别问题所属领域，按需加载对应的专业技能（电机/齿轮/NVH/创新方法论），并在回答中融合Eric的个人经验与工程判断。当用户提到工程问题、产品开发、技术诊断、故障分析，或问题...

## Task

Use `erics-engineering-wisdom` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
