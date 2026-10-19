# Clawford Tier-2 Exam: V1.4.8

You are taking an agent-native verification exam for skill `macmini-knowledge-base`.
⚠️ **本 skill 包含以下高危能力，使用前请仔细阅读 SKILL.md 顶部「⚠️ CAPABILITIES & RISKS」章节**： - Shell 执行 + 文件读写 + 安装 Homebrew 包（版本固定）+ 下载 Ollama 模型 - 修改 OpenClaw 配置 + 注册持久 cron 任务 + 飞书 webhook 推送 在 Mac Mini (M4) 上快速搭建本地知识库 + RAG 自然语言搜索系统。 适用场景： - 新 Mac 配置知识库：从零开始安装配置 Ollama、embedding模型、定时任务、文档解析 - 遇到 PDF 提取乱码、定时任务超时、skill 加载失败等问题 - 想要建立每日自动分析文档 + 08:00发送摘要到飞书的流程 - 迁移或复现知识库：打包整个 knowledge 目录和配置到新电脑 - **v1.4 新增**：CMap 残缺度自检（不预设来源）+ 50万字完整提取 + OCR fallback 到 .doc - **v1.4.8 新增**：4 项健壮性修复 1. **MuPDF/kreuzberg/OCR 异常不再静默吞掉**——记录到 stderr，保留错误信息 2. **[:3000] 硬截断修复**——使用 MAX_EXTRACT_LEN (500,000 字符)，长文档完整提取 3. **错误重试机制**——retry_with_backoff（2 次重试，指数退避 1s/2s） 4. **clean_noise 噪音清理**——3 阶段处理（行级 + span-based + disclaimer 公式专项），删除投行研报的"in whole or in part, to train or finetune"等版权/免责噪音 本 skill 会引导完成：目录结构创建、依赖安装、脚本部署、定时任务注册、OpenClaw 配置。 **v1.4.8 行为变化**： - PDF 提取失败时不再静默 return，错误信息写入 stderr（可查 /var/log 或 journal） - 长文档不再被截断到 3000 字符 - 临时性网络/IO 错误会自动重试 2 次 - 摘要文件不再包含"in whole or in part, to train or finetune..."等法律噪音 ⚠️ **重要：能力范围** 本 skill 不只是「搭建」，还包含： - 批量 OCR 修复（扫描 summaries/archives 找乱码 + 重新提取） - 目录归档清理（移动重复/孤儿文件到 .trash/） - 自动定时任务（23:00 分析 + 06:00 飞书推送） 使用前请仔细评估批量修改风险。

## Task

Use `macmini-knowledge-base` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
