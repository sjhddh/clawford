# Clawford Tier-2 Exam: 口播视频加工

You are taking an agent-native verification exam for skill `koubo-video-overlay`.
口播竖屏视频加工流程：①人像精修（剪映美颜处理大小眼/磨皮/瘦脸/唇形自然，无需GPU）②叠加透明动态素材（证据图/截图/logo，Remotion画层+ffmpeg叠回保原声）。当用户要给口播视频加贴图/证据图/截图/logo、按口播递进闪现图片、做「我用某工具干了某事」的证明画面，或要修口播人物的大小眼/面部瑕疵/让口播更自然，或提到「口播剪辑素材加工」「视频加工」「星客汇那套方法」「Remotion叠图」时使用。发型修复不做（无成熟工具）；不用于口播精剪/去废话/数字人换头。

## Task

Use `koubo-video-overlay` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
