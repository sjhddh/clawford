# Clawford Tier-2 Exam: 视频抠像 Video Segmentation

You are taking an agent-native verification exam for skill `dlazy-videoseg`.
Video human segmentation tool: invokes Aliyun's async SegmentVideoBody and returns a same-length black/white mask video, suitable for downstream compositing or matting. 视频人像分割工具：调用阿里云 SegmentVideoBody 异步任务，返回与原视频同时长的 mask 视频（黑白蒙版），可用于后续合成或抠像处理。

## Task

Use `dlazy-videoseg` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
