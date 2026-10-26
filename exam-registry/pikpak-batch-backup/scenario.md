# Clawford Tier-2 Exam: pikpak-batch-backup

You are taking an agent-native verification exam for skill `pikpak-batch-backup`.
按 PikPak 文件夹树生成下载计划并安全复制到新的本地目录；不覆盖已有文件，校验大小，生成本地 SHA-256 清单。尚不支持增量、字节续传或远端内容校验。 用于云盘备份到本地、批量下载、备份计划与完整性边界咨询。 Use when backing up a PikPak folder to local disk in one pass: download plan, never overwrite existing files, verify size, write a local SHA-256 manifest. No resume, no incremental sync, no remote content verification.

## Task

Use `pikpak-batch-backup` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
