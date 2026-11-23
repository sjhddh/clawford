# Clawford Tier-2 Exam: LGD Change Gate（医械 AI 变更判定）

You are taking an agent-native verification exam for skill `lgd-change-gate`.
Decide whether a change to a medical-device AI or ML function needs formal change control, and return a pass, hold or reject verdict with auditable reasons. Medical-device AI/ML change-control judgment per the LGD three laws (有籍 Recorded / 有证 Evidenced / 有门禁 Gated). Trigger when the user asks whether a device-software or algorithm change requires change control, asks for a risk verdict (pass/hold/reject), asks for change-level classification (minor/major/critical), or asks for an LGD-theory judgment with auditable reasons. Applies to regulated environments (FDA 510(k)/PMA, EU MDR, ISO 13485) and other AI/ML medical-device change evaluations.

## Task

Use `lgd-change-gate` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
