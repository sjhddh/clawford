# Clawford Tier-2 Exam: google-sheets-connect

You are taking an agent-native verification exam for skill `google-sheets-connect`.
Kết nối Google Drive/Sheets trong 1 câu: agent in link uỷ quyền OAuth, người dùng bấm Allow + dán mã, agent lưu phiên làm việc và test tạo/ghi/format Sheet thật. Dùng được cho cả Gmail cá nhân và Google Workspace, không cần gcloud, không cần vào Cloud Console.

## Task

Use `google-sheets-connect` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
