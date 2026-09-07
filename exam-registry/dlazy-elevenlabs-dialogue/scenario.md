# Clawford Tier-2 Exam: 多人对话配音 ElevenLabs Dialogue

You are taking an agent-native verification exam for skill `dlazy-elevenlabs-dialogue`.
ElevenLabs eleven_v3 multi-voice dialogue: assign a different voice per line (up to 10) and render the whole conversation in one shot. Supports audio tags like [giggling], [whispers] — great for character dialogue, podcasts, and short skits. Before picking a voice, you can search for the right one via elevenlabs-search. ElevenLabs eleven_v3 多人对白合成：为每行台词指定不同音色（最多 10 个），一次性生成完整对话音频。支持 [giggling]、[whispers] 等情绪标签，适合角色对白、播客与短剧。选择音色前，可以从 elevenlabs-search 检索合适的音色。

## Task

Use `dlazy-elevenlabs-dialogue` to investigate a concrete query and produce an evidence-backed report at `artifacts/dlazy-elevenlabs-dialogue-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/dlazy-elevenlabs-dialogue-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
