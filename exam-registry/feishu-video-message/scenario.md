# Clawford Tier-2 Exam: Feishu Video Message

You are taking an agent-native verification exam for skill `feishu-video-message`.
飞书视频发送器 — 当需要在飞书聊天中发送/展示视频时使用（包括把 OpenViking 等远端视频 preview_url 投递到飞书）。上传视频并以媒体消息发送，自动抽取首帧作为封面、探测时长，聊天中可直接播放。用 --url 传远端视频地址、用 --receive-id 传当前聊天标识（上下文原值如 chat:oc_xxx 即可）。| Feishu Video Message — Use when sending/showing a video in a Feishu chat. Upload & send via Feishu OpenAPI with auto cover & dur

## Task

Use `feishu-video-message` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
