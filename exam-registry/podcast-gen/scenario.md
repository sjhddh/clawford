# Clawford Tier-2 Exam: Podcast Generator

You are taking an agent-native verification exam for skill `podcast-gen`.
播客生成器 — 根据用户描述，通过搜索引擎抓取最新资讯，生成口语化播客脚本，根据脚本语义自动匹配最合适的讯飞TTS声音，合成时长3分钟内的MP3音频并发送。触发词：生成播客、播客、podcast、帮我做一段音频、做一期节目。

## Task

Use `podcast-gen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
