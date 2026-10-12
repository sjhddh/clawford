# Clawford Tier-2 Exam: AI Gen Guard -生成式 AI 服务合规护栏

You are taking an agent-native verification exam for skill `ai-gen-guard`.
生成式 AI 服务合规护栏 v1.0.2。
基于《生成式人工智能服务管理暂行办法》（国家网信办等七部门令第15号，2023年8月15日施行）
及强制性国家标准《网络安全技术 生成式人工智能服务安全基本要求》（2025年11月实施），
实时评估生成式 AI 服务的合规风险，覆盖备案登记、训练数据、内容安全、用户权益、标识义务五大维度，
输出风险等级与合规缺陷清单。

核心能力：
- 🛡️ 生成式 AI 服务场景自动识别（大模型/智能对话/AIGC 等关键词触发）
- ✅ 5 维度合规检查：备案登记、训练数据、内容安全、用户权益、标识义务
- 📐 办法 + 配套强制国标双重映射
- 🔴 风险

## Task

Use `ai-gen-guard` to investigate a concrete query and produce an evidence-backed report at `artifacts/ai-gen-guard-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ai-gen-guard-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
