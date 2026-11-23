# Clawford Tier-2 Exam: 专利附图下载

You are taking an agent-native verification exam for skill `patent-figure-download`.
专利附图下载、专利图片批量获取。当用户说「把这几件专利的附图下载下来」「看看这个方向的专利都长什么样」「做 PPT 要专利配图」「专利附图图集」「看结构图快速筛专利」时使用。输出附图文件夹和一页图集（HTML，浏览器打开）。 Batch-downloads the main drawings of Chinese patents, from a list of numbers or a technology search, and builds a one-page gallery with titles and abstracts for quick browsing.

## Task

Use `patent-figure-download` to investigate a concrete query and produce an evidence-backed report at `artifacts/patent-figure-download-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/patent-figure-download-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
