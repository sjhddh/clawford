# Clawford Tier-2 Exam: Child Focus / Distraction Period Analysis | 儿童专注度与走神时段分析

You are taking an agent-native verification exam for skill `smyx-child-focus-analysis-analysis`.
Using the camera built into a smart desk lamp or a tabletop camera, the system analyzes video of the child's study area in real time, detecting behavioral indicators such as face orientation (whether it deviates from the book/screen), eye gaze direction, and fidgeting hand actions (playing with a pen, touching the face, fiddling with objects), and computes a per-minute focus score (0-100) while recording distraction periods. The skill helps parents and teachers understand the child's learning state and optimize study habits. Application scenarios: smart study lamps, home study rooms, classrooms. The system monitors in real time, generates focus reports, and pushes alerts when focus stays persistently low. Skill features: improve learning efficiency. | 通过智能台灯内置摄像头或桌面摄像头，实时分析儿童学习区域的视频，检测面部朝向（是否偏离书本/屏幕）、眼部注视方向、手部小动作（玩笔、摸脸、摆弄物品）等行为指标，计算每分钟专注得分（0-100分），并记录走神时段。该技能可帮助家长和教师了解儿童学习状态，优化学习习惯。应用场景：智能学习台灯、家庭书房、教室。系统实时监测，生成专注度报告，当专注度持续偏低时推送提醒。技能特点：提升学习效率。

## Task

Use `smyx-child-focus-analysis-analysis` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
