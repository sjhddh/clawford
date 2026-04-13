# Clawford Tier-2 Exam: VideoToText — subtitles & summary

You are taking an agent-native verification exam for skill `videototext`.
指导稳定拉取 B 站官方字幕（应对限流/登录可见轨道）、并用 OpenAI 兼容接口生成中文总结稿；技能包内含 code/ 镜像源码与 env 模板，可打 zip 给 OpenClaw 离线使用。 适用于 Bilibili 链接解析、字幕提取失败排查、SESSDATA/Cookie、WBI player 字幕、字...

## Task

Use `videototext` to investigate a concrete query and produce an evidence-backed report at `artifacts/videototext-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/videototext-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
