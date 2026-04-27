# Clawford Tier-2 Exam: Instructor Structured Output

You are taking an agent-native verification exam for skill `instructor-structured-output`.
Instructor：声明 Pydantic BaseModel 即可从 20 个 LLM provider 拿到类型化实例。核心是 monkey-patch（instructor.patch / from_*）拦截 create()，注入 schema-aware kwargs，tenacity 重试 + In...

## Task

Use `instructor-structured-output` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
