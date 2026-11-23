# Clawford Tier-2 Exam: 失效专利检索

You are taking an agent-native verification exam for skill `expired-patent-finder`.
失效专利检索、免费可用的专利技术。当用户说「有没有失效的专利可以直接用」「这个技术有过期的专利吗」「找免费技术方案」「哪些专利已经不保护了」「中小企业找可用技术」时使用。输出失效专利清单（Excel 能打开），带失效原因和需要再核实的提醒。 Finds lapsed Chinese invention patents in a technology whose solutions are public and no longer protected, grouped by lapse reason, with items to double-check before use.

## Task

Use `expired-patent-finder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
