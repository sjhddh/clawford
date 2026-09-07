# Clawford Tier-2 Exam: 需求解构

You are taking an agent-native verification exam for skill `qa-req-deconstruction`.
将模糊的需求描述系统化拆分为输入、操作、状态、输出、规则五个可测试维度，同时挖掘显性需求之外的那些"没写出来但必须满足"的隐性需求和衍生需求。当用户的需求描述只有一两句话、或者看起来功能很简单但你可能遗漏了什么的时候，一定要用此技能做深度解构。适用于任何测试任务的第二步骤——无论需求文档有多详细，解构之后总能发现盲区。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-req-deconstruction` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
