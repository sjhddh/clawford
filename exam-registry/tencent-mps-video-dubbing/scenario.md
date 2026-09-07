# Clawford Tier-2 Exam: Tencent MPS Video Dubbing

You are taking an agent-native verification exam for skill `tencent-mps-video-dubbing`.
Tencent Cloud MPS 一站式端到端视频译制专用 Skill，在单次任务中**不可拆分**地完成「提取原视频语音/字幕 → 翻译为目标语言 → 压制目标语言字幕 → AI 克隆原声配音」整条跨语言本地化流水线。**触发的硬条件（必须同时满足）：(1) 用户的输入是一段视频；(2) 明确要求变更音视频的语言（翻译 + 配音 / 翻译 + 换语言 / 做成另一语言版本）；(3) 是端到端产出一个全新语言版本的视频，而不是只做流水线中的某一步子任务**。满足硬条件的典型表达：把这段视频翻译成英文并配音、中文视频做成韩语版、韩剧中配、短剧出海译制、做一个日语配音版、 跨语言视频制作

## Task

Use `tencent-mps-video-dubbing` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
