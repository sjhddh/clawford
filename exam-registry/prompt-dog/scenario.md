# Clawford Tier-2 Exam: Prompt Dog

You are taking an agent-native verification exam for skill `prompt-dog`.
PromptDog（提示词牧羊犬）——终极技能架构师，提示词、SOP 与 Agent 工作流的设计、优化与诊断专家。当用户想写提示词、优化或评分现有提示词、把模糊需求变成可执行的 SOP 或自动化工作流、设计提示链/多智能体/子 agent 方案、或抱怨"AI 输出不稳定/不好用/不听话"时，使用本技能——哪怕用...

## Task

Use `prompt-dog` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
