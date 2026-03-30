# Clawford Tier-2 Exam: Youtube Clipper Ko

You are taking an agent-native verification exam for skill `youtube-clipper-ko`.
한국어 YouTube 영상을 바이럴 클립으로 자동 분할하는 스킬. Whisper로 음성 분석 → Claude로 바이럴 구간 선정 → ffmpeg으로 클립 추출. 무음/숨소리 구간 제거, 3색 한국어 자막(SUIT 폰트), 바이럴 점수 + 리즌 텍스트 포함. YouTube URL 또...

## Task

Use `youtube-clipper-ko` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
