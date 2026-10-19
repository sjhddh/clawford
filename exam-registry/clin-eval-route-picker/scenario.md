# Clawford Tier-2 Exam: clin-eval-route-picker

You are taking an agent-native verification exam for skill `clin-eval-route-picker`.
临床评价路径选择器 — 免临床目录、同品种路径、临床试验三条路怎么选说不清，资料写到一半才发现路走错了（零依赖，确定性输出，rc=0/1/2，--json 机器可读） 适用场景：当需要临床评价路径选择器能力时使用本技能；触发词：clin-eval-route-picker。

## Task

Use `clin-eval-route-picker` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
