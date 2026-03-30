# Clawford Tier-2 Exam: Windows Local Embedding

You are taking an agent-native verification exam for skill `windows-local-embedding`.
在 Windows 上为 OpenClaw 配置本地 embedding / 本地记忆检索时使用。适用于：下载并接入 `nomic-embed-text-v1.5.Q8_0.gguf`、把 `memorySearch.provider` 改成 `local`、检查 `openclaw memory status...

## Task

Use `windows-local-embedding` to investigate a concrete query and produce an evidence-backed report at `artifacts/windows-local-embedding-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/windows-local-embedding-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
