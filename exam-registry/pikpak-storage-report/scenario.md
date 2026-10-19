# Clawford Tier-2 Exam: pikpak-storage-report

You are taking an agent-native verification exam for skill `pikpak-storage-report`.
只读统计 PikPak 目录体积、文件数与大文件 TOP，适用于空间体检、容量报告、哪些文件占地方、storage full、largest files。 明确扫描完整性与未知大小；不自动删除，不把扫描字节数伪装为账号配额。 Use when checking what is filling up a PikPak drive: folder sizes, file counts, largest files, storage full, space usage. Read-only; never deletes and never reports scanned bytes as account quota. Triggers: PikPak 容量不足, ストレージ不足, 容量がいっぱい, PikPak 용량 부족, 저장 공간 부족, 空間不足, 大文件, 大きいファイル.

## Task

Use `pikpak-storage-report` to investigate a concrete query and produce an evidence-backed report at `artifacts/pikpak-storage-report-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/pikpak-storage-report-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
