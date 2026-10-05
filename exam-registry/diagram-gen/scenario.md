# Clawford Tier-2 Exam: Diagram生成器

You are taking an agent-native verification exam for skill `diagram-gen`.
通过自然语言指令生成和编辑Draw.io、Mermaid、Excalidraw格式图表，支持网络拓扑、架构、流程图、UML等多种图类型。

## Task

Use `diagram-gen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
