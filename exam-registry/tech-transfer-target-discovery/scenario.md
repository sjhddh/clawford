# Clawford Tier-2 Exam: tech-transfer-target-discovery

You are taking an agent-native verification exam for skill `tech-transfer-target-discovery`.
央企科技成果对外输出——对接对象发现工具。用户输入拟输出的专利号或技术描述，先调用智慧芽MCP提取资产技术特征，再识别输出路径（许可/转让/作价入股/质押佐证），执行三轨检索并输出有专利证据支撑的目标企业短名单及推荐对接路径。

## Task

Use `tech-transfer-target-discovery` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
