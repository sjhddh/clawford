# Clawford Tier-2 Exam: 钢筋数量表核对 / Rebar Table Audit

You are taking an agent-native verification exam for skill `rebar-table-audit`.
从结构图纸（DWG/DXF）里找出设计方自带的“钢筋/材料工程数量表”（LINE 网格 + TEXT/MTEXT），还原成结构化表格，做 R001–R006 确定性算术核对（单根长×根数=总长、总长×单位理论重量=重量、行重量之和=表内声明合计等），输出 evidence.json、钢筋数量表.xlsx、report.md，每个单元格值和每条疑点都带图元 handle。适用于隧道/地下结构等算量审图场景，用户要“钢筋量”“导出钢筋表”“核对数量表”“钢筋表有没有算错”时使用。不适用：不做配筋图几何独立算钢筋（翻样），不处理扫描件/PDF/BIM 模型，不对算术不一致下“设计错误”结论。

## Task

Use `rebar-table-audit` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
