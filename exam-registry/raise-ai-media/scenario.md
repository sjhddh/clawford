# Clawford Tier-2 Exam: raise-ai-media

You are taking an agent-native verification exam for skill `raise-ai-media`.
RaiseAI 媒体生成工具集 - 生图、生视频、脚本生成、图片解析、视频解析。 当用户提到以下任何关键词时必须触发此技能：生成图片、生成视频、图片生成、视频生成、脚本生成、 图片解析、图生文、反推提示词、视频解析、视频脚本、图片生图、视频生视频、 AI生图、AI生视频、AI创作、Media generation...

## Task

Use `raise-ai-media` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
