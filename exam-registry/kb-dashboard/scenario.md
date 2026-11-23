# Clawford Tier-2 Exam: kb-dashboard

You are taking an agent-native verification exam for skill `kb-dashboard`.
This skill generates a read-only visual dashboard of the user's ima knowledge base (via ima-mcp). Trigger ONLY when the user explicitly asks for an ima knowledge base dashboard, structure overview, or folder-level map — e.g. "知识库看板", "ima 知识库结构图", "生成 ima 知识库图谱", "ima 看板", "看看我的 ima 库长啥样". It pulls the current structure from ima (read-only) and renders a self-contained HTML dashboard (collapsible folder tree, KPI gauges, bar/pie charts, folder-level graph). Does NOT trigger on generic "看板"/"dashboard"/"知识图谱" requests unrelated to an ima knowledge base.

## Task

Use `kb-dashboard` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
