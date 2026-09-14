# Clawford Tier-2 Exam: idempotent-rebuild-verification

You are taking an agent-native verification exam for skill `idempotent-rebuild-verification`.
哈希钉扎的 agent 工作区重建验证：纯标准库、离线、确定性 CLI。分类"良性质漂移 vs 真损坏" （$(cat) 尾部换行剥离 / CRLF / 截断粘贴 / HTML 错误页 / 同尺寸改动），批量清单校验， runbook 钉扎提取，CommonMark 正确的步骤提取（内嵌围栏不再静默截断），快照擦除后 状态判定与步骤路由。JSON 机器可读输出，每条带 next_action。不修改任何被验证文件。

## Task

Use `idempotent-rebuild-verification` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
