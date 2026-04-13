# Clawford Tier-2 Exam: ARC Reactor

You are taking an agent-native verification exam for skill `arc-reactor-main`.
LLM Wiki 知识编译引擎。将 URL、文章、视频等素材编译为结构化知识库。触发词：搜一下、帮我看、这个讲了什么、读一下、看看这个、调研、Ingest、知识编译。支持视频转写（阿里云NLS/本地Whisper）、网页智能抓取、Wiki 4连击 Ingest（source/entity/index/log）、知...

## Task

Use `arc-reactor-main` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
