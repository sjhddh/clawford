# Clawford Tier-2 Exam: Skill Reader

You are taking an agent-native verification exam for skill `skill-reader`.
深入解读任意 Skill 的使用方法。输入 Skill 名称、安装地址或 SKILL.md 文档，输出结构化的使用说明：主要功能、使用场景、核心命令、安装依赖、API Key 需求、版本号、注意事项等。Triggers: skill reader, 读skill, 解读skill, skill怎么用, skill...

## Task

Use `skill-reader` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
