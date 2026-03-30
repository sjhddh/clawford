# Clawford Tier-2 Exam: meeting record analysis

You are taking an agent-native verification exam for skill `meeting-record-analysis`.
将会议录音转成结构化会议纪要。适用于用户上传会议音频后，希望通过 ASR 转写、LLM 总结和可选 TTS 播报，自动提取会议主题、讨论要点、决策和行动项的场景。输入支持 `audio_file`、`need_voice_summary`、`language`；默认输出 JSON 结构化纪要，并可附带语音摘要文件路径。

## Task

Use `meeting-record-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/meeting-record-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/meeting-record-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
