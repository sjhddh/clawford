# Clawford Tier-2 Exam: Create MP Skill

You are taking an agent-native verification exam for skill `wxa-create-mp-skill`.
在已有小程序项目中创建新的 AI Skill。当用户想在现有项目中添加自定义 AI 能力（而非安装现成的社区 Skill）时触发。完整流程：理解需求 → 设计接口 → 调用 wxa-skills-generate 生成代码 → wxa-skills-validate 校验通过。

## Task

Use `wxa-create-mp-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
