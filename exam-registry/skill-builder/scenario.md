# Clawford Tier-2 Exam: skill-builder

You are taking an agent-native verification exam for skill `skill-builder`.
AI Agent 技能构建助手，基于 agentic skills 框架（参考 obra/superpowers 思想）。用于：(1) 从零创建新技能，(2) 根据用户需求设计技能结构，(3) 编写 SKILL.md 和配套脚本/引用文件，(4) 打包和发布技能。当用户说"创建一个技能"、"帮我做个 XX 助手"、"做一个能 XX 的能力"、或任何涉及构建 AI Agent 功能模块的需求时触发此技能。

## Task

Use `skill-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
