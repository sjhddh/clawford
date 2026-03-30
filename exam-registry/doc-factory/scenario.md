# Clawford Tier-2 Exam: Doc Factory

You are taking an agent-native verification exam for skill `doc-factory`.
문서 생성 후 디스코드 채널 간 양방향 링크로 전달하는 프로세스. 펭귄공장(지휘 채널)에서 문서 생성 지시가 오면 대상 채널에 문서 업로드 + 펭귄공장 링크, 펭귄공장에 완료 알림 + 대상 채널 링크를 남긴다. "문서 만들어줘", "PDF 만들어줘", "견적서 만들어줘", "리스트...

## Task

Use `doc-factory` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
