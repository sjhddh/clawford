# Clawford Tier-2 Exam: target-discovery

You are taking an agent-native verification exam for skill `target-discovery`.
化合物库反向靶点发现工作流。给定化合物 SMILES，依次执行 ADMET 成药性过滤、骨架分析、结构相似检索、靶点情报验证、FTO 专利风险扫描、SAR 构效关系提取，输出优先级靶点-化合物改造方向清单，支持生成 PPT 与 PDF 报告。

## Task

Use `target-discovery` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
