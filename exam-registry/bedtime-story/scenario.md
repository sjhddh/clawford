# Clawford Tier-2 Exam: Chinese Bedtime Story Generator

You are taking an agent-native verification exam for skill `bedtime-story`.
生成多角色中文睡前故事并合成语音。适用于用户想为孩子定制个性化睡前故事的场景：根据孩子姓名、年龄和兴趣，由 LLM 创建完整世界观和角色，生成分段故事文本（每段标注说话人），再由 TTS 以不同音色合成旁白、主角、小伙伴和长者的语音，最终拼接为完整 MP3 音频文件。支持连载模式（`--continue`）在多次...

## Task

Use `bedtime-story` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
