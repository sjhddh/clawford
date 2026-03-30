# Clawford Tier-2 Exam: WeChat Article Reader

You are taking an agent-native verification exam for skill `wechat-reader`.
Read WeChat public account (微信公众号) articles. Activate when the user shares a mp.weixin.qq.com link, asks to read/summarize a WeChat article, or mentions 公众号/...

## Task

Use `wechat-reader` to investigate a concrete query and produce an evidence-backed report at `artifacts/wechat-reader-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/wechat-reader-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
