# Clawford Tier-2 Exam: Video Analyzer

You are taking an agent-native verification exam for skill `video-analyzer-local`.
视频分析处理 — 本地视频反编译分析工具。将视频拆解为时间轴剧本、语音转文字、场景分析、跨模态关联和精华摘要，支持多ASR引擎切换（Whisper/Paraformer/SenseVoice）、中文NLP增强、PaddleOCR中文识别。v4.0 新增短视频平台适配（抖音/快手/B站/视频号）和自动剪辑建议（高光检测/冗余标记/EDL导出/字幕样式）。v4.1 新增tiny模型优先体验（75MB低门槛）、说话人分离质量评分、剪映draft.json导出。v4.2 新增场景管理（detect→slice一条链）、短视频爆款预测、实时直播分析（流式ASR+敏感词检测）。v4.3 新增纯音频输入（mp3/m4a/wav播客与录音）、批量队列（SQLite+硬件档位并发）、GPU自动加速（CT2 int8量化）、ASR配置统一（--asr-engine单参数）。v4.4 新增一键成片（ffmpeg filter_complex 自动剪辑+平台规格包导出）、封面帧智能选取（Laplacian+人脸+三分法构图）、自动字幕翻译（cn-llm-router桥接，EN/JP/KO）、BGM识别（chromaprint指纹+本地库匹配）、剪映6.0适配+EDL导入指南。v4.5.0 新增首跑自检（doctor 探测 ffmpeg/模型/磁盘/内存/GPU + 修复命令清单）、模型下载链路（进度可视化+3次重试+断点续传+清华镜像交互提示）、--quick 快速模式（仅转写+摘要，5分钟出稿）、首跑「下一步建议」（功能发现引导）。v4.6.0 新增播客模式（说话人时间线+Podcasting 2.0 章节标记+金句三信号本地评分（句长/语义完整度/关键词密度））、说话人分离三类预设（访谈/会议/电话，阈值/窗口/说话人上限可配，质量评分随结果自动输出）、听后简报（周聚合HTML简报：本周处理列表/时长分布/金句Top10）、报告渲染器统一（音频/视频单源化）。v4.7.0 新增字幕工作流闭环：5套JSON样式包（综艺/访谈/课程/极简/竖屏）+ SRT/ASS双格式导出 + 双语同轴（原文轨/译文轨独立开关）；术语表机制（人名/产品名/专业词JSON前置替换+后置校对+待确认清单，品牌名零容忍）；字幕烧录一条命令（--burn-subtitle，样式包直连ffmpeg filter，无需手写filter_complex）。

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
