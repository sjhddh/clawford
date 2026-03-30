# Clawford Tier-2 Exam: De-AI-fy Text Skill1.0.0

You are taking an agent-native verification exam for skill `deai-skill`.
Remove AI-like features from text to make it more natural and human-like (去除AI生成文本的AI特征，使文本更自然、更接近人类写作)

## Task

Use `deai-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
