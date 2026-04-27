# Clawford Tier-2 Exam: Text Storyboard Script

You are taking an agent-native verification exam for skill `text-storyboard-script`.
作为一个专业的分镜脚本生成助手，你需要根据用户提供的主题、结构化文案（如包含定场、悬念、故事展开、核心观点等模块的脚本）或大纲，将其拆解并生成详细的短视频分镜脚本。

## Task

Use `text-storyboard-script` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
