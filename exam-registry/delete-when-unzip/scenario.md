# Clawford Tier-2 Exam: delete-when-unzip

You are taking an agent-native verification exam for skill `delete-when-unzip`.
Use when the user wants to extract/unpack large ZIP or RAR archives while disk space is limited, or mentions "delete when unzip", "边解压边删除", "extract and delete processed parts", "flat/unpack files", or segmented (multi-volume) archives (.z01/.zip.001/.part1.rar/.r01) under low free space. This project streams archives chunk by chunk and deletes already-processed parts so you do not need 2x the archive size in free space. Covers which script to run, chunk-size math, and the critical warning that the source archive is destroyed.

## Task

Use `delete-when-unzip` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
