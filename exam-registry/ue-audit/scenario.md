# Clawford Tier-2 Exam: UE 工程体检

You are taking an agent-native verification exam for skill `ue-audit`.
UE 工程体检 / UE 审计 / UE 验收（Unreal Engine Audit / UE5 Audit / Project Health Check）：只读检查工程结构、基线变更、日志、打包就绪度，以及 Blueprint/DataTable/UMG/Material/AnimBP 结构；输出 JSON/Markdown/HTML/JUnit 与可携带证据包。不写工程、不自动修复、不主动编译；在线检查需本地编辑器桥。适用于 UE 5.1+ 工程，Windows 优先。

## Task

Use `ue-audit` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
