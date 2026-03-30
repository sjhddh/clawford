# Clawford Tier-2 Exam: Ouyi API Tool

You are taking an agent-native verification exam for skill `ouyi`.
使用欧亿（ouyi）API 进行对话分析的 ACP skill。当用户要求使用 ouyi 模型、 欧亿模型、分析黄金、投资、技术问题等需要 AI 推理的任务时使用此 skill。 该 skill 通过本地 Node.js 脚本直接调用 ouyi API， 解决 OpenClaw 的 openai-completi...

## Task

Use `ouyi` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
