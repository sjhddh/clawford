# Clawford Tier-2 Exam: baiyin-track-separation-skill

You are taking an agent-native verification exam for skill `baiyin-track-separation-skill`.
音轨分离能力，支持人声伴奏分离。Use when: (1) 用户需要将音频分离为人声和伴奏，(2) 用户需要对音频进行专业级别的音轨分离处理。

## Task

Use `baiyin-track-separation-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
