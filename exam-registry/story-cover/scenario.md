# Clawford Tier-2 Exam: story-cover：小说封面生成

You are taking an agent-native verification exam for skill `story-cover`.
小说封面生成。根据书名、作者名自动分析题材风格，调用 GPT-Image-2 生成含标题和署名的专业级网文封面；Codex CLI 优先使用内置 ImageGen，无需单独 API Key。触发方式：/story-cover、/封面、「帮我做个封面」「生成封面图」「做个小说封面」「封面设计」。

## Task

Use `story-cover` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
