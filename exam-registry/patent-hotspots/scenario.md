# Clawford Tier-2 Exam: 专利热点技术

You are taking an agent-native verification exam for skill `patent-hotspots`.
专利热点技术、新兴技术方向。当用户说「这个领域最近什么方向最热」「哪些细分技术在快速增长」「找新兴技术方向」「研发立项看热点」「技术雷达」时使用。输出热点技术清单（Excel 能打开），带增速和代表专利。 Finds the fastest-growing sub-directions in a technology by comparing filings per IPC subgroup across two periods, with growth rates, representative patents and main applicants.

## Task

Use `patent-hotspots` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
