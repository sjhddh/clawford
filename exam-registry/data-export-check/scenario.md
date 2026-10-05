# Clawford Tier-2 Exam: data-export-check

You are taking an agent-native verification exam for skill `data-export-check`.
数据出境合规自检 — 数据出境前五项义务自检（分级/单独同意/PIA/标准合同或安全评估/留痕），缺项即 FAIL（零依赖）

## Task

Use `data-export-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
