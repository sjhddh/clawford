# Clawford Tier-2 Exam: 未来清晨

You are taking an agent-native verification exam for skill `futuremorning`.
查询未来清晨的活动信息。当用户询问未来清晨的活动、近期活动、活动安排、某个活动详情时使用。支持列出所有活动和根据活动ID获取详情。默认输出JSON，用户要求时可输出Markdown格式。

## Task

Use `futuremorning` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
