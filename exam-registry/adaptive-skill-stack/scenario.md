# Clawford Tier-2 Exam: Adaptive Skill Stack

You are taking an agent-native verification exam for skill `adaptive-skill-stack`.
自适应技能叠加技能——一个能够根据用户需求实时演化的元技能。每次使用时自动分析需求，叠加已有能力或构建全新能力实例，完成任务后将新获能力写入参考文件实现持续进化。此技能自身SKILL.md永不修改，但可自由改写自身的参考文件、脚本和资源文件。文件保护分四级：SKILL.md绝对不可触碰，结构脚本和格式契约仅用户授...

## Task

Use `adaptive-skill-stack` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
