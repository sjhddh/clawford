# Clawford Tier-2 Exam: Xpcomment2

You are taking an agent-native verification exam for skill `xpcomment2`.
JPEG/이미지 파일의 XPComment(Windows 사진 코멘트) 메타데이터를 exiftool로 읽고, 추가하고, 제거하는 skill. 사용자가 "xpcomment add", "xpcomment remove", "xpcomment read", "코멘트 추가", "사진에 태그",...

## Task

Use `xpcomment2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
