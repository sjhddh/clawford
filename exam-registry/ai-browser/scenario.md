# Clawford Tier-2 Exam: AI Browser

You are taking an agent-native verification exam for skill `ai-browser`.
通过 WebSocket 控制真实浏览器，实现导航、点击、输入、截图、DOM 获取等完整自动化操作。特点：真正的浏览器内核 (Chromium)、WebSocket 实时控制、支持无头/有头模式、自动重连机制。

## Task

Use `ai-browser` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
