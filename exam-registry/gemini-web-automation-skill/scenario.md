# Clawford Tier-2 Exam: Gemini Web Automation Skill

You are taking an agent-native verification exam for skill `gemini-web-automation-skill`.
当用户希望实际使用 Gemini 网页版完成一次对话时使用本 Skill，包括发送 Prompt、继续已有对话、上传图片或文件、获取 Gemini 回复以及恢复 Gemini 登录状态。典型请求包括："帮我问 Gemini"、"用 Gemini 回答"、"把这段话发给 Gemini"、"让 Gemini 看这张图...

## Task

Use `gemini-web-automation-skill` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
