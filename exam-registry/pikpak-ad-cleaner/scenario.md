# Clawford Tier-2 Exam: pikpak-ad-cleaner

You are taking an agent-native verification exam for skill `pikpak-ad-cleaner`.
扫描 PikPak 资源包的广告/推广可疑文件，分 high/review/protected 报告；只读扫描，不自动删除。 适用于清理广告、垃圾文件、推广文件、scan folder for junk、remove promo files。 只有明确批准冻结清单后才打印清理命令；未核验可恢复语义前不得执行。 Use when scanning a PikPak share or folder for bundled ad files, promo junk, fake readme, or spam videos. Read-only grading report; cleanup commands are only printed after an explicit frozen-list approval and are never executed automatically.

## Task

Use `pikpak-ad-cleaner` to investigate a concrete query and produce an evidence-backed report at `artifacts/pikpak-ad-cleaner-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/pikpak-ad-cleaner-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
