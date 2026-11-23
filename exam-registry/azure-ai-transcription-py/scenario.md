# Clawford Tier-2 Exam: azure-ai-transcription-py

You are taking an agent-native verification exam for skill `azure-ai-transcription-py`.
Azure AI Transcription 的 Python 客户端库,覆盖实时流式与批量两种语音转文字模式. 批量模式适合存储在 Blob 中的长音频,支持说话人分离(diarization)与多通道; 实时模式通过流式会话边录边转,适合会议同传与字幕生成。使用订阅密钥认证, 通过 TRANSCRIPTION_ENDPOINT 与 TRANSCRIPTION_KEY 环境变量配置资源。提供时间戳 捕获、语言指定、流式背压处理与会话关闭等实践要点.

## Task

Use `azure-ai-transcription-py` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
