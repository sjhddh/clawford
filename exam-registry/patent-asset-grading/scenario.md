# Clawford Tier-2 Exam: patent-asset-grading

You are taking an agent-native verification exam for skill `patent-asset-grading`.
专利资产分级评审工具。用户批量输入专利申请号/公开号/公告号，自动调用智慧芽MCP获取专利数据，依据IPC分类自动识别所属行业，按行业差异化权重方案对技术关联性、权利要求强度、市场覆盖度、剩余保护期、被引用/交叉价值五个维度逐项打分，最终输出含等级（S/A/B/C/D）、各维度分值及评分依据的Word或Excel评审结果清单。

## Task

Use `patent-asset-grading` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
