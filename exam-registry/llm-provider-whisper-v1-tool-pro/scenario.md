# Clawford Tier-2 Exam: Whisper v1转录专业版

You are taking an agent-native verification exam for skill `llm-provider-whisper-v1-tool-pro`.
基于 Whisper v1 稳定版本的企业级语音转文字工具(专业版)。核心能力: - 涵盖免费版全部能力(v1 稳定 CLI、多格式输出、翻译) - 批量处理:目录递归与任务队列 - 模型管理:多版本预加载与热切换 - 性能调优:GPU 加速、半精度推理、批处理 - 自定义词典:initial_prompt 注入领域术语 - 服务化部署:FastAPI 封装,支持远程调用 - 质量评估:置信度分析与校对流程 - 任务监控:进度追踪与日志审计 适用场景: - 企业会议纪要自动化 - 视频/播客批量字幕生成...

## Task

Use `llm-provider-whisper-v1-tool-pro` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
