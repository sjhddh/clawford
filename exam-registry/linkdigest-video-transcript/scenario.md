# Clawford Tier-2 Exam: 抖音/小红书视频文案提取（口播逐字稿 + 画面文字）

You are taking an agent-native verification exam for skill `linkdigest-video-transcript`.
抖音/小红书视频文案提取：口播逐字稿、画面上的字（带大致时间）、要点和互动数据。用户发来抖音、小红书视频笔记、TikTok、YouTube 或 X 的视频链接或分享文案，要提取文案、视频转文字、扒口播、提取字幕或画面文字时使用。长视频会排队，脚本自动轮询取结果。通过 LinkDigest API 读取，不用下载视频，不需要平台账号或 Cookie。需要 LINKDIGEST_API_KEY；每条 1 积分，另加每开始的 1 分钟 1 积分（1 分钟视频共 2 积分，约 ¥0.29）。不支持 B站。

## Task

Use `linkdigest-video-transcript` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
