# Clawford Tier-2 Exam: 한국 자동차/보험 가이드

You are taking an agent-native verification exam for skill `car-insurance`.
자동차/보험 정보 스킬. 10개 인텐트 라우팅(Car Tax Calc~Beginner Guide), 지방세법 기반 자동차세 계산 + 보험개발원 공시 + 중고차 시세 Flash+Deep-Dive 2겹 리포트. 트리거: "자동차세", "차세금", "중고차", "자동차 보험", "보험료...

## Task

Use `car-insurance` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
