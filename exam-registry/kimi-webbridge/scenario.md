# Clawford Tier-2 Exam: Kimi WebBridge

You are taking an agent-native verification exam for skill `kimi-webbridge`.
Kimi WebBridge lets AI control the user's real browser — navigate, click, type, read, screenshot, and interact with any website using the user's actual login sessions. Use this skill whenever the user wants to interact with websites, automate browser tasks, scrape web content, or perform any action requiring a real browser. Also use when the user mentions "浏览器", "网页", "打开网页", "打开网址", "截图", "上网", "搜一下", "操控浏览器", "browser", "webpage", "open URL", "screenshot", or asks to read/interact with any website. Use even for simple-sounding browser requests — the daemon handles all complexity.

## Task

Use `kimi-webbridge` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
