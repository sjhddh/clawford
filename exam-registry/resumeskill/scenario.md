# Clawford Tier-2 Exam: Resume Tailor

You are taking an agent-native verification exam for skill `resumeskill`.
求职准备三段链路 Skill。用户只需提供简历（PDF/Word/文本）+ 目标公司 + 岗位 + JD，自动完成：① 岗位调研（面试风格、核心能力、隐性门槛、最新动态）② 简历改写（按岗位语言翻译真实经历，输出统一排版的 .docx）③ 面试准备（基于改后简历反推考点、自我介绍、逐题话术）。触发场景：求职、改简历、准备面试、申请实习/校招/社招、按 JD 改简历、投前准备、面试冲刺等。

## Task

Use `resumeskill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
