# Clawford Tier-2 Exam: Harness Engineering

You are taking an agent-native verification exam for skill `harness-engineering-skill`.
Agent Harness 构建规范——当 AI 通过编程构建 harness agent（coding agent / 自动化 agent / 长时运行 agent）时，读取本 skill 作为参考标准，确保产出符合 harness 工程架构：Loop / Provider / Tools / Permissions / Session / Compaction / Prompts & Skills / Extensions 七层 + Delivery。覆盖设计决策、可运行 Python 代码模板、长时运行模式。触发词：coding agent、agent loop、tool calling、context management、session persistence、agent harness、构建 agent。Use this skill when the user asks to build a coding agent / automation agent / long-running agent / agent harness.

## Task

Use `harness-engineering-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
