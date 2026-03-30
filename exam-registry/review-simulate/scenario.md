# Clawford Tier-2 Exam: review simulate

You are taking an agent-native verification exam for skill `review-simulate`.
进行中文求职语音模拟面试。适用于用户想围绕目标岗位进行多轮中文面试练习，并通过 ASR 识别回答、由 LLM 决定追问或换题、由 TTS 播报面试官问题，最终输出结构化评估报告、改进建议和示例优化回答的场景。支持 `target_role`、`interviewer_style`、`min_rounds`、`ma...

## Task

Use `review-simulate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
