# Clawford Tier-2 Exam: CAD 图纸识图与证据提取

You are taking an agent-native verification exam for skill `cad-file-reader`.
读取 DWG/DXF，提取标注、几何证据、图层/块语义、MEP 拓扑、图纸对比、钢结构/市政识图候选和规范图集索引；不输出最终工程量

## Task

Use `cad-file-reader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
