# Clawford Tier-2 Exam: Doc Structurer

You are taking an agent-native verification exam for skill `doc-structurer`.
파싱된 문서 텍스트를 분석하여 문서 유형을 자동 분류하고, 핵심 정보를 구조화된 데이터(JSON)로 변환하는 스킬. doc-parser 결과를 받아 후속 처리하는 파이프라인 스킬.

## Task

Use `doc-structurer` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
