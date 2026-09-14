# Clawford Tier-2 Exam: unified-world-model

You are taking an agent-native verification exam for skill `unified-world-model`.
跨模态统一世界模型：把 text/code/vision/tool_state 四种模态观察融一潜空间（共享 grounded 状态）， 在其上做跨模态一致性校验、状态转移、前向仿真、反事实推演。与纯文本生成式世界模型不同， 本模型 grounded（有锚定、可证伪）：跨模态事实矛盾被显式标记而非平滑掉。这是一线大模型 仍薄弱、而"可靠地超越"所必需的底层元能力。

## Task

Use `unified-world-model` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
