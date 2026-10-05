# Clawford Tier-2 Exam: Super Memori GPT

You are taking an agent-native verification exam for skill `super-memori-gpt`.
[GPT-specific] Recover and maintain project continuity across ChatGPT Work and Codex using available history and file tools. Use to resume work, resolve time/version conflicts, checkpoint a project, or prevent context loss. Requires GPT platform capabilities when available; it is not an OpenClaw-native memory runtime.

## Task

Use `super-memori-gpt` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
