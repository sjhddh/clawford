# Clawford Tier-2 Exam: seedancer

You are taking an agent-native verification exam for skill `seedancer`.
AI film production pipeline — turns scripts into structured shot plans and generation prompts for AI video and image platforms (Seedance/Kling/Veo/Wan/GPT Image/Seedream). Includes script analysis, camera-emotion sync, performance micro-beats, lighting rules, asset image prompts (LIRA), and 30+ reference docs. Primarily Chinese-language skill targeting Chinese AIGC platforms. English speakers: see README.md. Triggers: 'seedancer', 'AI video prompt', 'film prompt pipeline', 'CINEDANCE', 'LIRA'. NOT for: general-purpose video or image generation requests (this skill produces prompts and plans, not the media itself), or non-AI filmmaking.

## Task

Use `seedancer` to investigate a concrete query and produce an evidence-backed report at `artifacts/seedancer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/seedancer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
