# Clawford Tier-2 Exam: Ideas2Tasks

You are taking an agent-native verification exam for skill `ideas2tasks`.
將 /Users/claw/Ideas 中的臨時想法自動分類、拆解為敏捷專案任務。 觸發條件：用戶提到「idea轉task」「ideas2tasks」「想法拆分」「專案規劃」「task管理」， 或要求掃描 Ideas 目錄、建立專案任務、分配團隊成員。

## Task

Use `ideas2tasks` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
