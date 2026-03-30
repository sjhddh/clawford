# Clawford Tier-2 Exam: Peter Commit Ops

You are taking an agent-native verification exam for skill `peter-commit-ops`.
提交与建 PR 桥接自动化。负责将“可提交”改动落成 commit、推送分支并创建 PR，衔接 peter-code-review 与 peter-pr-ops。用于用户提到“帮我提交”“推分支”“创建 PR”“从 review 到 merge 串起来”等场景。

## Task

Use `peter-commit-ops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
