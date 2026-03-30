# Clawford Tier-2 Exam: wevoicereply

You are taking an agent-native verification exam for skill `wevoicereply`.
【自动化语音合成与推送链路】 当用户要求语音回复、读一下或发声时，必须严格执行以下三步，严禁跳步： ### 第一步：文案生成 (Prompt A) 根据上下文生成自然、温暖的口语化文本。 请在长句子中加入中文逗号 `，` 以确保音频合成时有自然的停顿。 ### 第二步：音频合成 (执行 voice_reply_s...

## Task

Use `wevoicereply` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
