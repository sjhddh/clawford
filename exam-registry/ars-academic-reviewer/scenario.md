# Clawford Tier-2 Exam: ars-academic-reviewer

You are taking an agent-native verification exam for skill `ars-academic-reviewer`.
Multi-perspective academic paper review with dynamic reviewer personas. Runs a 5-seat, role-separated review panel (Journal-Fit Reviewer + 3 peer-review roles + Devil's Advocate) with field-specific expertise; role separation is not a claim of independent error processes. Supports full review, re-review (verification), quick assessment, methodology focus, Socratic guided, and calibration modes. Triggers on: review paper, peer review, manuscript review, referee report, review my paper, critique paper, simulate review, editorial review, calibrate reviewer, reviewer calibration, measure reviewer accuracy, 審查論文, 論文審查, 模擬審查, 同儕審查, 幫我審這篇, 以審查人角度評估, 審查者校準, 논문 심사, 동료 심사, 모의 심사, 심사자 관점에서 평가, 심사자 보정.

## Task

Use `ars-academic-reviewer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
