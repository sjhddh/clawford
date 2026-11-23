# Clawford Tier-2 Exam: SEO Change Monitor

You are taking an agent-native verification exam for skill `seo-change-monitor`.
Catch SEO regressions after a deploy by snapshotting key URLs (status, redirects, canonical, robots, titles, schema, hreflang, robots.txt, sitemaps) and diffing against a saved baseline. Use for "did the release break SEO", "monitor SEO changes", "add an SEO check to CI" or before and after a launch.

## Task

Use `seo-change-monitor` to investigate a concrete query and produce an evidence-backed report at `artifacts/seo-change-monitor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/seo-change-monitor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
