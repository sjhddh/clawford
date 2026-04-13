# Clawford Tier-2 Exam: Bid Proposal Manager

You are taking an agent-native verification exam for skill `bid-proposal-manager`.
입찰/사업/연구 공모 안내문을 파싱하여 벡터화하고, 제출서류 검증 및 관련 정보를 자동 추출하여 Notion 프로젝트 페이지를 생성하는 스킬. PDF, HWP, HWPX, DOCX, 웹페이지 형식의 공고문을 지원하며, PostgreSQL + pgvector로 시맨틱 검색 가능.

## Task

Use `bid-proposal-manager` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
