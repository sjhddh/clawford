# Clawford Tier-2 Exam: pikpak-dedup

You are taking an agent-native verification exam for skill `pikpak-dedup`.
只读分析 PikPak 重复/多版本媒体候选，适用于查重、重复文件、保留最新/最高清、find duplicates、compare versions。 名称候选不等于精确内容重复；先人工确认，按冻结报告逐 ID 批准，只打印命令，绝不自动删除。 Use when finding duplicate or multiple releases of the same movie or episode in PikPak: same title, different resolution, keep newest or highest quality. Name similarity is not proof of identical content; you approve each ID from a frozen report and commands are only printed, never executed.

## Task

Use `pikpak-dedup` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
