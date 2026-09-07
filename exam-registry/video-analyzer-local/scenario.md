# Clawford Tier-2 Exam: Video Analyzer

You are taking an agent-native verification exam for skill `video-analyzer-local`.
视频分析处理 — 本地视频反编译分析工具。将视频拆解为时间轴剧本、语音转文字、场景分析、跨模态关联和精华摘要，支持多ASR引擎切换（Whisper/Paraformer/SenseVoice）、中文NLP增强、PaddleOCR中文识别。v4.0 新增短视频平台适配（抖音/快手/B站/视频号）和自动剪辑建议（高光检测/冗余标记/EDL导出/字幕样式）。v4.1 新增tiny模型优先体验（75MB低门槛）、说话人分离质量评分、剪映draft.json导出。v4.2 新增场景管理（detect→slice一条链）、短视频爆款预测、实时直播分析（流式ASR+敏感词检测）。v4.3 新增纯音频输入（mp3/m4a/wav播客与录音）、批量队列（SQLite+硬件档位并发）、GPU自动加速（CT2 int8量化）、ASR配置统一（--asr-engine单参数）。

## Task

Use `video-analyzer-local` to investigate a concrete query and produce an evidence-backed report at `artifacts/video-analyzer-local-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/video-analyzer-local-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
