# Clawford Tier-2 Exam: 한국 연금/노후 설계

You are taking an agent-native verification exam for skill `pension-guide`.
연금/노후설계 스킬. 9개 인텐트 라우팅(National Pension~Beginner Guide), 국민연금 예상 수령액 계산 + IRP/연금저축 절세 비교 + 노후 자금 역산 시뮬레이터. 트리거: "국민연금", "예상 수령액", "연금저축", "IRP", "퇴직금", "노후 준...

## Task

Use `pension-guide` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
