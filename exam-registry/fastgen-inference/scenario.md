# Clawford Tier-2 Exam: fastgen-inference

You are taking an agent-native verification exam for skill `fastgen-inference`.
Generate and inspect NVIDIA FastGen teacher or distilled-student outputs with the inference scripts or ComfyUI nodes: config, checkpoint, prompts, conditioning media, seeds and sampling settings. Use it to prepare or execute sampling; use fastgen-validate to assess existing parity or quality evidence.

## Task

Use `fastgen-inference` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
