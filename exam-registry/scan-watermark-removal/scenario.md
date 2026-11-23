# Clawford Tier-2 Exam: scan-watermark-removal

You are taking an agent-native verification exam for skill `scan-watermark-removal`.
Deterministically remove light translucent text watermarks from scanned paper pages (lecture notes, handouts, exam papers, workbooks) as images or PDF, plus printed coloured header logos. Use when the user asks to 去水印 / remove watermark / clean watermarks from 扫描笔记、讲义、试卷、资料图片、PDF 讲义, especially batches of course-note scans with pale diagonal tiled text (WeChat id, brand name, URL) or a brand logo in the page header. Not for photo watermarks, dark or photographic logos, or cases where the watermark colour is indistinguishable from content — those need generative inpainting instead, which redraws the page and can destroy handwriting, so warn the user and require per-page review.

## Task

Use `scan-watermark-removal` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
