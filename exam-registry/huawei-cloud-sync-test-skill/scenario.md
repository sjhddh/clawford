# Clawford Tier-2 Exam: huawei-cloud-sync-test-skill

You are taking an agent-native verification exam for skill `huawei-cloud-sync-test-skill`.
A test skill for the multi-repo sync pipeline. It documents the expected flow: GitCode master squash merge -> filtered github branch -> GitHub mirror, GitCode mirror (rewritten authors) and ClawHub publish. This skill has no scripts; it exists only to trigger and verify an end-to-end sync and is safe to remove.

## Task

Use `huawei-cloud-sync-test-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
