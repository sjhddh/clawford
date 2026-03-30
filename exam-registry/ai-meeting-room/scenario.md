# Clawford Tier-2 Exam: AI Meeting Room

You are taking an agent-native verification exam for skill `ai-meeting-room`.
AI 자문단 — 주제를 던지면 전문가 AI 에이전트들이 실제 데이터 기반으로 다각도 토론하고 실행 가능한 결론을 도출한다. 사업성 검토, 전략 회의, 브레인스토밍, 의사결정, 리스크 분석 등에 활용. Use when a user wants multiple perspectives o...

## Task

Use `ai-meeting-room` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
