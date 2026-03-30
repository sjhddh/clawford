# Clawford Tier-2 Exam: Mermaid Renderer

You are taking an agent-native verification exam for skill `mermaid-renderer`.
渲染 Mermaid 图表。当用户需要可视化展示流程图、时序图、类图、饼图、Git分支图等图表时使用。支持两种输出模式：1) 终端 ASCII 文本输出（默认）；2) 图片文件导出（指定 --image/--png 参数）。触发场景包括"画个流程图"、"生成时序图"、"渲染Mermaid图表"、"导出图表为图片"等。

## Task

Use `mermaid-renderer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
