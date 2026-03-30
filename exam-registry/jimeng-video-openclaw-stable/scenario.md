# Clawford Tier-2 Exam: Jimeng Video Stable

You are taking an agent-native verification exam for skill `jimeng-video-openclaw-stable`.
在 Jimeng（即梦）里稳定执行“视频生成→等待完成→下载本地”流程。用于需要生成视频、查找最新视频、下载 mp4 的场景。内置前置健康检查、状态机执行、长等待轮询与防抖规则，降低卡住和误操作概率。

## Task

Use `jimeng-video-openclaw-stable` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
