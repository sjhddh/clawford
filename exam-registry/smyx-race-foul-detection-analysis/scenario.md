# Clawford Tier-2 Exam: Pet Race Foul Detection (False Start / Lane Crossing) | 宠物赛跑/竞赛作弊识别（起跑/窜道）

You are taking an agent-native verification exam for skill `smyx-race-foul-detection-analysis`.
Triggers when a user provides a pet racing track start/finish video URL or file for analysis; uses HD cameras at the starting line and finish line to analyze race video in real time, detecting each pet's (greyhounds, racehorses, etc.) start time, finish order, and lane assignment, automatically determining false starts (start before the signal) or lane crossing (deviating from own lane into an adjacent lane) fouls and outputting judgment results. Assists referee decisions and improves race fairness. Application: pet racing (greyhound, horse, obstacle course), pet sports events, professional track training. Does NOT provide race advice — only returns objective video-based judgment results. | 当用户提供宠物赛道起点/终点视频URL或文件时，触发本技能进行竞赛犯规检测分析；通过架设在赛道起点和终点线的高清摄像头，实时分析比赛视频，检测每只宠物（赛犬、赛马等）的起跑时间、通过终点线的顺序以及所在道次，自动判定是否存在抢跑（起跑时间早于发令信号）或窜道（偏离自身赛道进入邻道）等犯规行为，并输出判定结果。辅助裁判决策，提高赛事公平性。应用场景：宠物竞速比赛（灵缇赛跑、赛马、宠物障碍赛）、宠物运动会、专业赛道训练。仅输出基于视频的客观判定结果，不提供赛事建议。

## Task

Use `smyx-race-foul-detection-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-race-foul-detection-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-race-foul-detection-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
