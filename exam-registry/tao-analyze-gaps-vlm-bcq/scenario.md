# Clawford Tier-2 Exam: tao-analyze-gaps-vlm-bcq

You are taking an agent-native verification exam for skill `tao-analyze-gaps-vlm-bcq`.
Extract false-positive and false-negative gaps from VLM binary-classification-question (BCQ, yes/no) predictions. Use when the user asks to "analyze VLM BCQ gaps", "extract VLM false positives and false negatives", or identify failure cases from a predictions JSON for DEFT root-cause analysis on a binary-classification VLM workflow.

## Task

Use `tao-analyze-gaps-vlm-bcq` to investigate a concrete query and produce an evidence-backed report at `artifacts/tao-analyze-gaps-vlm-bcq-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tao-analyze-gaps-vlm-bcq-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
