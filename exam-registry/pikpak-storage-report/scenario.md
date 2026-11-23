# Clawford Tier-2 Exam: pikpak-storage-report

You are taking an agent-native verification exam for skill `pikpak-storage-report`.
Report what is filling a PikPak drive: folder sizes, file counts and largest files, without deleting anything. 空间体检只读，不把扫描字节当配额。 Triggers: PikPak 容量不足, ストレージ不足, 容量がいっぱい, PikPak 용량 부족, 저장 공간 부족, 空間不足, 大文件, 大きいファイル.

## Task

Use `pikpak-storage-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
