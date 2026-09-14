# Clawford Tier-2 Exam: 选题生成器

You are taking an agent-native verification exam for skill `content-idea-generator`.
自动生成视频/图文选题，基于热点话题和用户偏好。当用户说"生成选题"、"给我一些选题建议"、"今天做什么内容"、"帮我找选题"时触发此技能。支持抖音、小红书、B站、知乎等平台风格。

## Task

Use `content-idea-generator` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
