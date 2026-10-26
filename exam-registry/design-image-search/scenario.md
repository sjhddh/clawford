# Clawford Tier-2 Exam: 外观专利以图搜图

You are taking an agent-native verification exam for skill `design-image-search`.
外观专利检索-以图搜图：拍一张产品照片，查外观相近的外观设计专利。当用户说「这个产品外观有没有专利」「拍照查外观专利」「以图搜图查专利」「这款外观撞不撞」「上架前查外观侵权风险」「看看有没有一样的外观设计」，或直接发来一张产品图片问专利时使用。先免费识别产品和外观分类，确认后检索（成功 ¥1），按外观相似度排出中国外观专利（可加美国、韩国、日本、台湾），附附图和逐件判断。 Design patent search by image. Send a product photo and find visually similar design patents. Identifies the product and Locarno class for free, then searches (¥1 per success), ranking Chinese design patents by visual similarity with drawings, optionally US, KR, JP and TW.

## Task

Use `design-image-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/design-image-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/design-image-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
