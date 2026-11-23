# Clawford Tier-2 Exam: structure-check

You are taking an agent-native verification exam for skill `structure-check`.
Stop trusting "done." Structure Check mechanically verifies that everything the task required actually exists in the code — symbols defined, exports wired, functions actually called, no stub shells hiding behind a TODO. The agent writes a requirement checklist from the user's task, the tool checks every item, and the exit code decides (0 all pass / 1 something missing / 2 bad checklist). The agent may only quote the verdict, never overrule it. Zero dependencies, Node >= 18, comment-aware; full JS/TS support plus Python exists/notStub. Use after completing any coding task (trigger phrases - structure check, feature implemented, 触发词 - 结构检查, 功能是否实现, 实现核对, 检查代码结构, 交付核对).

## Task

Use `structure-check` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
