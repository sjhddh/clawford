# Clawford Tier-2 Exam: Feature Requirements Clarification

You are taking an agent-native verification exam for skill `feature-requirements-clarification`.
在任何创意性工作前必须使用：创建功能、构建组件、增加能力或修改行为。通过自然对话挖掘需求，产出高质量验收标准（AC），为后续 TDD 开发提供测试依据。当用户说'我想做一个XX功能'、'帮我想想XX怎么做'、'我需要加一个XX'等模糊需求描述时触发。

## Task

Use `feature-requirements-clarification` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
