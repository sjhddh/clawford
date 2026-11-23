# Clawford Tier-2 Exam: UAvideo

You are taking an agent-native verification exam for skill `uavideo`.
视频买量素材的创意特征分析与打标。当用户拿到视频素材（本地文件、下载链接、平台分享链接或屏幕捕获的投放素材）后，需要对其做结构化拆解并产出：一句话总结、逐段特征打标、优点与风险标注、可复用的脚本骨架和后续修改/迭代意见时使用本技能。触发词包括：素材分析、打标、拆解这条视频、创意分析、脚本提取、素材拆条、优势劣势分析等。适用于任何游戏或产品的投放素材（买量视频、达人内容、竞品参考）。内置双层特征体系快照（15 项 P 码情节层 + 91 项 R 码视觉特征，仅含特征定义与打标口径，不含任何统计数据或素材明细）；除该内置体系外，仅分析用户提供的素材与用户主动接入的数据，不依赖也不引用任何本地存量数据、内部看板明细或敏感资产。

## Task

Use `uavideo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
