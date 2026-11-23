# Clawford Tier-2 Exam: 外观设计检索

You are taking an agent-native verification exam for skill `design-patent-search`.
外观设计检索、外观专利查询。当用户说「这个产品外观有没有人申请过」「查一下保温杯的外观设计专利」「新品设计前看看同类外观」「这个造型会不会侵权」「外观专利对比」时使用。输出外观设计对比清单（Excel 能打开）和代表图片。 Searches Chinese design patents for a product by name and Locarno class, downloads representative images, and lists them for side-by-side comparison before launching a new design.

## Task

Use `design-patent-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/design-patent-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/design-patent-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
