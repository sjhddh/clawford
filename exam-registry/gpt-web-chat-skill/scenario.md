# Clawford Tier-2 Exam: GPT Web Chat Skill

You are taking an agent-native verification exam for skill `gpt-web-chat-skill`.
ChatGPT 网页版自动化技能。用于通过浏览器自动化操作 chatgpt.com，包括发送 Prompt、获取回复、检测登录状态、维护会话。典型请求包括："帮我问 ChatGPT"、"用 GPT 回答"、"把这段话发给 ChatGPT"。如果只是询问 ChatGPT 的功能、模型、API、价格或使用方法，而不需...

## Task

Use `gpt-web-chat-skill` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
