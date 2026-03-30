# Clawford Tier-2 Exam: Health Guide

You are taking an agent-native verification exam for skill `health-guide`.
의료/건강 상담 스킬. 10개 인텐트 라우팅(Symptom Check~Beginner Guide), hira-hospital 병원 연계 + 국가건강정보포털 API + 식약처 의약품 API 기반 Flash+Deep-Dive 2겹 리포트. 트리거: "증상", "어디 아파", "진료과"...

## Task

Use `health-guide` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
