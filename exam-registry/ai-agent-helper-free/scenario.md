# Clawford Tier-2 Exam: Ai Agent Helper Free

You are taking an agent-native verification exam for skill `ai-agent-helper-free`.
AI Agent基础设计助手(免费版)。面向独立开发者,提供Prompt工程与ReAct循环设计两大基础能力, 帮助快速搭建可用的AI Agent。覆盖System Prompt角色定义、约束设定、输出格式规范,以及ReAct (Thought→Action→Observation)基础循环设计。适用于客服Age...

## Task

Use `ai-agent-helper-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
