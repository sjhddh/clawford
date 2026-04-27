# Clawford Tier-2 Exam: Cosprompt

You are taking an agent-native verification exam for skill `cosprompt`.
结构化 AI 绘图提示词生成器。输入角色/主题名称，AI 自动搜索信息、分析特征、决定风格，输出 15 维度结构化提示词（JSON + Markdown 双格式），适用于 Midjourney、Stable Diffusion 等绘图工具。

## Task

Use `cosprompt` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
