# Clawford Tier-2 Exam: Content Analyzer

You are taking an agent-native verification exam for skill `content-analyzer`.
Analyze Xiaohongshu (小红书) notes and Douyin (抖音) videos. TRIGGER when message contains any URL matching xiaohongshu.com, xhslink.com, douyin.com, v.douyin.com...

## Task

Use `content-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/content-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/content-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
