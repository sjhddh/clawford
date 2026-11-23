# Clawford Tier-2 Exam: 专利清单去重

You are taking an agent-native verification exam for skill `patent-list-dedupe`.
专利清单去重、专利表格合并。当用户上传多份CSV或专利号清单，要合并重复文献并保留来源、核对冲突时使用；按完整公开号去重，不推断同族。 Merge patent CSV lists by complete publication number while preserving every source row, A/B publication versions, conflicting fields and unresolved identifiers; do not infer patent families.

## Task

Use `patent-list-dedupe` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
