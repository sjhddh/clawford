# Clawford Tier-2 Exam: Calendar Sync

You are taking an agent-native verification exam for skill `calendar-sync`.
구조화된 문서 데이터에서 날짜 정보(마감일, 일정, 이벤트)를 추출하여 Apple 캘린더에 자동 등록하는 스킬. 문서에서 추출한 일정을 캘린더에 자동 반영한다.

## Task

Use `calendar-sync` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
