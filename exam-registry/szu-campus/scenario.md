# Clawford Tier-2 Exam: 深圳大学校园事务 CLI

You are taking an agent-native verification exam for skill `szu-campus`.
当用户需要通过本地 szu-cli 查询或操作深圳大学校园事务时使用，包括登录检查、公文通、我的课表、全校课表、成绩、绩点排名、培养方案、学业完成、思政学分、创新讲座、宿舍电费、体育场馆预约、图书馆馆藏、知网和万方检索。指导 agent 使用 JSON 输出、安全处理隐私，并对预约和取消执行 dry-run/co...

## Task

Use `szu-campus` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
