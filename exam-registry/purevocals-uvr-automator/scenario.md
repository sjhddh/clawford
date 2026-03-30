# Clawford Tier-2 Exam: purevocals-uvr-automator

You are taking an agent-native verification exam for skill `purevocals-uvr-automator`.
批量从音频文件（.mp3/.wav/.flac 等）中提取超干净干声（Vocals Only）。 支持 VR Architecture、Window Size 320、Aggression 10、WAV 输出。 自动检测 GPU（有则 CUDA 加速，无则 CPU），自动管理虚拟环境，完美保持原文件夹结构。

## Task

Use `purevocals-uvr-automator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
