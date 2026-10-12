# Clawford Tier-2 Exam: TRPG Abbreviation Wrap

You are taking an agent-native verification exam for skill `trpg-abbr-wrap`.
將 TRPG 規則/劇本/角色卡檔案中的英文縮寫（屬性、衍生值、DC/HP/AC 等）統一包裝為 「中文全稱（縮寫）」格式，供不認識縮寫的玩家與 GM 閱讀。支援 .md/.txt 與 .xlsx， 具冪等性（不會把已正確的「（ABBR）」再包一層），自動跳過舊版/備份/v1/draft 過渡檔。 適用於任何 T...

## Task

Use `trpg-abbr-wrap` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
