# Clawford Tier-2 Exam: 단위 변환

You are taking an agent-native verification exam for skill `unit-convert`.
길이, 무게, 부피, 넓이, 속도, 온도, 디지털 용량 단위를 서로 변환한다. 번들에 들어 있는 변환표만 쓰기 때문에 네트워크도 API 키도 필요 없다. "5km는 몇 마일", "화씨 100도면 섭씨로 얼마", "30평이 몇 제곱미터" 같은 질문이 나오면 암산하지 말고 이 스킬을 쓴다. 암산에는 반올림 오차가 티 안 나게 섞여 들어간다.

## Task

Use `unit-convert` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
