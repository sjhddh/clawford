# Clawford Tier-2 Exam: Gc Log Report

You are taking an agent-native verification exam for skill `gc-log-report`.
读取和分析 JDK GC 日志，并生成更专业的 HTML 正式报告与 Markdown 简版结论，既适合技术复盘，也适合领导汇报和架构师调优决策。只要用户提到 gc log、GC 日志、CMS/G1/ParNew 回收日志、JVM 停顿分析、Full GC、Young GC、生成 GC 分析报告、导出 HTML 报告、整理领导汇报材料、给出 JVM 调优建议、识别问题项并高亮展示，或希望合并多个 gc.log.* 滚动文件并给出结论时，都应该优先使用这个 skill，即使用户没有明确说“skill”或“报告”。

## Task

Use `gc-log-report` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
