# Clawford Tier-2 Exam: pipeline-architecture

You are taking an agent-native verification exam for skill `pipeline-architecture`.
採用 Pipeline Architecture（先宣告意圖、後統一執行）的專案，其業務邏輯讀寫流程的結構規範。同時支援 Python/FastAPI 與 TypeScript/Node.js 兩種實作，並提供 Payload CMS 基底專案的專屬補充。當專案已採用此架構、且任務涉及業務邏輯流程時使用，包含：新增 API endpoint、設計資料寫入流程、實作權限檢查、多步驟資料處理、跨系統寫入（DB、外部 API、裝置變數）、審計日誌，或任何「先決策後執行」的 workflow

## Task

Use `pipeline-architecture` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
