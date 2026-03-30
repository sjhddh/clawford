# Clawford Tier-2 Exam: Model Deploy Skill

You are taking an agent-native verification exam for skill `model-deploy`.
Use this skill when users request to deploy LLMs (Qwen, DeepSeek, etc.) on specified GPU servers and start the model service. This skill can Download models...

## Task

Use `model-deploy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
