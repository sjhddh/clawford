# Clawford Tier-2 Exam: 百度图片下载

You are taking an agent-native verification exam for skill `baidu-img-download`.
百度图片下载：按关键词从百度图片搜索批量下载图片到本地。触发场景：用户说『下载 关键词 X 张图片』『百度图片下载 X』『用百度抓 N 张图』『按关键词 抓百度图』『百度图片批量下载』『Baidu image download』。底层用 acjson JSON 端点（image.baidu.com/search/...

## Task

Use `baidu-img-download` to investigate a concrete query and produce an evidence-backed report at `artifacts/baidu-img-download-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/baidu-img-download-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
