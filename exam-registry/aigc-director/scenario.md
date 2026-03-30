# Clawford Tier-2 Exam: aigc-director

You are taking an agent-native verification exam for skill `aigc-director`.
AI 视频生成全流程：通过 6 个阶段（剧本→角色/场景设计→分镜→参考图→视频生成→后期剪辑）将用户想法转化为完整视频。支持临时工作台（单独调用 LLM、VLM、文生图、图生图、视频生成）。触发词：视频生成、AI视频、AIGC、创作视频、制作视频、AI画图。

## Task

Use `aigc-director` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
