# Clawford Tier-2 Exam: 校准作业指导书技能

You are taking an agent-native verification exam for skill `skill-calibration-sop-generator`.
辅助生成计量校准作业指导书；根据设备信息自动推荐适用标准、补充校准参数与环境要求，输出符合规范的指导书文档；当用户需要创建校准作业指导书、检定规程文档或计量技术文件时使用

## Task

Use `skill-calibration-sop-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
