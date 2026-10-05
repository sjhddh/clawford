# Clawford Tier-2 Exam: genspark-ralph-loop

You are taking an agent-native verification exam for skill `genspark-ralph-loop`.
Genspark Claw에서 PRD의 개발 작업을 하나씩 구현하고 검증하며 결과를 파일에 기록해 반복하거나 재개한다. Ralph loop, 작업 목록 반복 실행, 중단된 개발 작업 재개 요청에 사용한다.

## Task

Use `genspark-ralph-loop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
