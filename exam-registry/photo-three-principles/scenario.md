# Clawford Tier-2 Exam: photo-three-principles

You are taking an agent-native verification exam for skill `photo-three-principles`.
用户在评估一张照片好坏、准备拍摄前自检构图、或问"怎么拍出好照片"时调用。 不适用于纯器材操作问题（如"怎么调光圈"）、后期修图问题、或纯信息查询。 Invoke when the user is evaluating photo quality, doing a pre-shoot composition self-check, or asking "how to take a good photo." Not for gear operation, post-processing, or pure information queries. 关键 trigger / Key triggers: "这张照片怎么样"、"怎么构图"、"拍照三要素"、 "好照片标准"、"photo composition rules"、"three principles of photography"、 "how to evaluate a photo"、"what makes a good photo"。

## Task

Use `photo-three-principles` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
