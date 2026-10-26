# Clawford Tier-2 Exam: WBFlow·第8环 成片(ffmpeg)

You are taking an agent-native verification exam for skill `wbflow-assemble`.
流水线第8环——读取 07_videos/ 与 02_script/episodes.json 的台词/旁白，用 ffmpeg 拼接成片、烧录字幕、统一校色与音量，输出 final.mp4。（WBFlow 8 环流水线套件之一，须与 wbflow-pipeline 总控及本流水线其余环节 skill 配套安装才能运行。）

## Task

Use `wbflow-assemble` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
