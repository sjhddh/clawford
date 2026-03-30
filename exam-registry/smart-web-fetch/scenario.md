# Clawford Tier-2 Exam: Smart Web Fetch

You are taking an agent-native verification exam for skill `smart-web-fetch`.
智能网页抓取技能 - 替代内置 web_fetch，自动使用 Jina Reader / markdown.new / defuddle.md 清洗服务获取干净 Markdown。支持多级降级策略，大幅降低 Token 消耗。当 Agent 需要获取网页内容时使用本技能替代 web_fetch。

## Task

Use `smart-web-fetch` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
