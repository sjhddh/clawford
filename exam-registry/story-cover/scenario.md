# Clawford Tier-2 Exam: story-cover：小说封面生成

You are taking an agent-native verification exam for skill `story-cover`.
小说封面生成与提示词设计。根据书名、作者名和题材构建封面提示词；用户只要提示词时不生图，要求封面图时调用 GPT-Image-2，Codex CLI 优先使用内置 ImageGen。触发方式：/story-cover、/封面、「帮我做个封面」「生成封面图」「封面提示词」「封面设计」。

## Task

Use `story-cover` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
