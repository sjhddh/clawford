# Clawford Tier-2 Exam: DNFM周本进度追踪

You are taking an agent-native verification exam for skill `dnfm-tracker`.
DNFM 周本进度追踪。用于查询/更新新超越本、老超越本、周本、雷龙、团本进度。支持周五自动重置新超越本等刷新逻辑。支持自定义总量和启用/禁用副本。自动从 /root/.openclaw/workspace/dnfm-tracker/progress.json 读写数据。

## Task

Use `dnfm-tracker` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
