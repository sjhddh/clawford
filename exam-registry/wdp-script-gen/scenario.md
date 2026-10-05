# Clawford Tier-2 Exam: 脚本编写器（支持断点继续执行）

You are taking an agent-native verification exam for skill `wdp-script-gen`.
长时/批量脚本开发与任务跟踪：目标规划、TODO、逐任务验证标记、进度可见、断点续跑、并发受控、失败日志可见。生成的批处理脚本会嵌入可恢复机制（checkpoint 断点续跑、失败日志、并发限流、错误重试、信号处理）并读写工作目录文件。检测到「处理大量文件/长任务」时启用；发现已有 work/state.json 时先报进度再续跑。

## Task

Use `wdp-script-gen` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
