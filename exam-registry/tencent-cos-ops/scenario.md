# Clawford Tier-2 Exam: Tencent COS Ops

You are taking an agent-native verification exam for skill `tencent-cos-ops`.
Runs scripts/cos_ops.py against one env-configured Tencent COS_BUCKET. Use only when the user explicitly requests tencent-cos-ops or names that bucket and object key.

## Task

Use `tencent-cos-ops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
