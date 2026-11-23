# Clawford Tier-2 Exam: ppt-ai-flavor-remover

You are taking an agent-native verification exam for skill `ppt-ai-flavor-remover`.
去除 PPT/文档中的 AI 味，按解决方案架构师提交客户正式材料的标准重写。覆盖语气、标题、句式、事实边界、版式统一、备注结构和交付前自检。Use when user says 去除AI味 / 去AI味 / 太AI了 / PPT文风 / 商务材料文风 / rewrite PPT tone / de-AI-ify.

## Task

Use `ppt-ai-flavor-remover` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
