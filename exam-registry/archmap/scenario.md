# Clawford Tier-2 Exam: archmap

You are taking an agent-native verification exam for skill `archmap`.
架构测绘 Agent。零参调用自动分流（无基线→full 全量初始化，有基线→lite 极简增量），full/lite 显式词强制兜底；项目路径+需求文本做增量影响面分析；+sync 同步变更并重生成全套报告；+diff 产出行级差异影响面与测试选择（diff_impact.json）并留痕变更历史（时间+修改内容，复盘前固定卡点）。实现精准开发、节约tokens。

## Task

Use `archmap` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
