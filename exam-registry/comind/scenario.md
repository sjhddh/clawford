# Clawford Tier-2 Exam: Comind

You are taking an agent-native verification exam for skill `comind`.
CoMind 人机协作平台 AI 成员操作手册。定义任务执行、Markdown 同步、对话协作、状态面板等全部工作流程。当 AI 成员接收到 CoMind 平台的任务推送、对话请求、定时调度或巡检指令时，应使用此 Skill 执行标准化操作。

## Task

Use `comind` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
