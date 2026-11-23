# Clawford Tier-2 Exam: md-link-audit

You are taking an agent-native verification exam for skill `md-link-audit`.
Markdown 链接体检器 — README 里链接一堆 404、改了路径没人发现，CI 上还老因为外网检查超时误报（零依赖，确定性输出，rc=0/1/2，--json 机器可读）。

## Task

Use `md-link-audit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
