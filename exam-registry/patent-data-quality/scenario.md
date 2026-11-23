# Clawford Tier-2 Exam: 专利数据质检

You are taking an agent-native verification exam for skill `patent-data-quality`.
专利数据质检、专利表格检查、专利数据缺失检查。当用户准备导入或交付专利数据，需要查缺列、空值、日期和重复号码时使用；不把表格检查说成数据库真实性核验。 Inspect supplied patent CSV data for missing fields, publication-number format issues, date precision, chronological review points and duplicate identifiers without changing the source records.

## Task

Use `patent-data-quality` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
