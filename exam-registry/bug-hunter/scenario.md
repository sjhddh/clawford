# Clawford Tier-2 Exam: 缺陷猎人

You are taking an agent-native verification exam for skill `bug-hunter`.
智能分析 Bug 模式、定位根因、追踪修复进度。当用户需要分析 Bug 原因、定位问题根因、分类缺陷、生成 Bug 报告、追踪修复进度、或进行 Bug 趋势分析时使用此技能。也适用于用户提到"Bug分析"、"缺陷分析"、"根因分析"、"RCA"、"Bug追踪"、"问题定位"、"bug report"、"缺陷管理"等场景。支持对接 Jira、禅道等缺陷管理工具。

## Task

Use `bug-hunter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
