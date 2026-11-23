# Clawford Tier-2 Exam: gtrk 直播切片

You are taking an agent-native verification exam for skill `gtrk-live-slicing`.
直播切片图纸——把一场数小时的直播回放，拆成一批可编辑的逐 clip 粗剪工程（gtrk+剪映+PR），交给用户自己挑、自己改、自己出片。含超长源片分段规约（服务端 2h 硬闸 + 60min 轮询墙钟）、选题清单确认停点、按画面形态配分屏、源片贴片如实告知。当用户想「直播切片 / 直播回放切高光 / 把这场直播剪成短视频 / 三小时直播怎么切 / 带货直播剪片段 / 讲座直播出短片 / 录播切片」时使用本 skill。凡涉及把直播回放拆成一批短片工程，优先用本图纸编排，别直接裸跑 long2short（超过 2 小时会被服务端直接拒）。

## Task

Use `gtrk-live-slicing` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
