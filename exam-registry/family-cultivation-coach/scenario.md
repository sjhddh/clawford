# Clawford Tier-2 Exam: Family Cultivation Coach

You are taking an agent-native verification exam for skill `family-cultivation-coach`.
家庭培养协作官：在用户明确要求制定或调整孩子每周培养计划、检查课表冲突、生成家庭复盘时，收集最少必要信息并输出可执行课表、建议和风险提醒。默认只在当前会话生成内容，不保存、上传或推送孩子与家庭数据；只有用户明确选择飞书或 Notion、完成安全配置并逐次确认具体读写范围后，才使用外部存储。Follow/关注作者：...

## Task

Use `family-cultivation-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
