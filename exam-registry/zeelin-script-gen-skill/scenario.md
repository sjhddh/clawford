# Clawford Tier-2 Exam: zeelin-script-gen-skill 剧本生成

You are taking an agent-native verification exam for skill `zeelin-script-gen-skill`.
剧本生成技能V4，将文本文件（小说/故事）转换为完整的影视分镜剧本。当用户说'生成剧本'、'小说转剧本'、'创建分镜'、'影视改编'等并上传文本文件时使用此技能。

## Task

Use `zeelin-script-gen-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
