# Clawford Tier-2 Exam: SJTU Canvas 课程助手

You are taking an agent-native verification exam for skill `sjtu-canvas`.
SJTU Canvas LMS 课程助手。管理上海交通大学 Canvas (oc.sjtu.edu.cn) 课程数据。 也适用于其他基于 Canvas LMS 的高校，修改 base_url 即可。 触发场景: (1) 查看/下载课程文件(PPT/PDF)、批量下载课件 (2) 查看作业列表、DDL、提交状态、提...

## Task

Use `sjtu-canvas` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
