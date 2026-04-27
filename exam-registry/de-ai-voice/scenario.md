# Clawford Tier-2 Exam: de-ai-voice

You are taking an agent-native verification exam for skill `de-ai-voice`.
去除中文/英文/日文文本的“AI味”，以信息传递为核心先补齐事实/证据/取舍/边界，再按场景重写并清理模板化口癖与格式指纹；适用于文案、邮件、报告、PRD、社媒内容与学术写作的去AI味改写，以及识别并拦截假证据句式与虚构参考文献。

## Task

Use `de-ai-voice` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
