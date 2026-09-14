# Clawford Tier-2 Exam: Infoseek V141 Clean

You are taking an agent-native verification exam for skill `info-seek`.
端到端内容智能采集与调研工作流。从行业/主题/人名/公司输入开始，自动嗅探信息源、按可信度+主题一致性+互动深度+LLM可读性四维评分门控、深度抓取（4级降级：静态/渲染/凭证/多媒体）、搜索引擎全生命周期管理（健康/配额/新鲜度自愈）、QVeris 能力路由、统一能力注册表（consent 闸控）、语义矛盾检测（共享事实槽+否定词典+极性放大）、实体识别（95+实体+多语种+别名归并）、召回增强（别名扩展/多样性合并/自适应门槛）、跨源融合分析，最终输出结构化 Markdown 报告，可选自动归档。适用：行业调研、趋势分析、竞品分析、市场研究、技术研究、内容采集、报告生成、长期知识库建设。不适用：实时新闻监控、学术文献综述、浏览器自动化爬取、即时聊天对话

## Task

Use `info-seek` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
