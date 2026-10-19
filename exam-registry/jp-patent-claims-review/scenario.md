# Clawford Tier-2 Exam: jp-patent-claims-review

You are taking an agent-native verification exam for skill `jp-patent-claims-review`.
日本专利申请文件权利要求书审核工具。用户上传PDF或Word版专利申请文件后，自动按日本特許法（§29、§36等）及JPO审查实务标准，从法律合规性、新颖性/进步性预判、撰写结构、审查实务风险、涉外申请及战略保护六大维度逐项审核权利要求书；维度二强制调用 novelty-check 和 non-obviousness-check skill 执行全球检索，将 MCP 检索结果作为权利稳定性评审依据；最终输出完整 HTML 格式审核报告。

## Task

Use `jp-patent-claims-review` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
