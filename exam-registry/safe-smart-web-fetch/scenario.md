# Clawford Tier-2 Exam: Safe Smart Web Fetch

You are taking an agent-native verification exam for skill `safe-smart-web-fetch`.
安全网页抓取技能。获取网页内容时，默认先判断 URL 是否可能包含 token、是否为内网/本地域名、是否为私密链接；这三类一律不走第三方清洗服务，只走直接抓取。其余公开网页可按顺序尝试 Jina Reader、markdown.new、defuddle.md 获取干净 Markdown，失败再回退原始抓取。

## Task

Use `safe-smart-web-fetch` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
