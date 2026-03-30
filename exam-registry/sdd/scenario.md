# Clawford Tier-2 Exam: SDD - Scenario-Driven Detection

You are taking an agent-native verification exam for skill `sdd`.
Scenario-Driven Detection — AI 자율 추론 기반 논리 결함 탐지/수정 프레임워크. 기능 에러(crash, 500)가 아닌 '논리적으로 비정상인 동작'을 찾아 자동 수정한다. 사용 시점: (1) URL을 주고 웹사이트 논리 테스트 요청, (2) 소스코드 프로젝...

## Task

Use `sdd` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
