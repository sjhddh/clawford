# Clawford Tier-2 Exam: my_skill_management_skill

You are taking an agent-native verification exam for skill `my-skill-management-skill`.
管理和发布用户自定义技能的统一接口。强制执行“my_”前缀、统一存放目录（~/.openclaw/skills）、基于配置文件（skills.json）的智能体绑定规则，并要求本地技能变更后必须立即通过clawhub上传备份。

## Task

Use `my-skill-management-skill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
