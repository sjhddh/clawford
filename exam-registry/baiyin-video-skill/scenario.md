# Clawford Tier-2 Exam: baiyin-video-skill

You are taking an agent-native verification exam for skill `baiyin-video-skill`.
通过百音开放平台生成 AI 视频。当用户想生成视频、图片转视频、查询视频任务状态时使用，即使未明确说"百音"但上下文涉及视频生成能力也应触发。

## Task

Use `baiyin-video-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
