# Clawford Tier-2 Exam: Creator Intel V5

You are taking an agent-native verification exam for skill `creator-intel-v5`.
创造者情报 V5 - 工程师视角技术情报聚合器

严禁 VC 商业化话术，只关注底层技术实现。
服务对象：硬科技工程师、极客产品经理、技术研究者。

核心选品标准（按优先级）：
1. 🥇 GitHub 开源项目与霸榜（新模型、新硬件图纸、开发工具库）
2. 🥈 硬核技术原理解析（MoE、稀疏注意力、流匹配、新架构）
3. 🥉 极客硬件与创新交互（ESP32、树莓派、Kickstarter 创意硬件）

摘要必须包含：
- 至少 2 个技术名词或具体参数
- 架构/算法/材料/性能指标
- 严禁："拓展商业化"、"规模化部署"、"生态布局" 等公关套话

信源分布：
- 国际：GitHub、IEEE、arXiv、Kickstarter、Hackaday（Tavily API 搜索）
- 国内：机器之心、量子位、开源中国 RSS

使用场景：
- "生成今日技术情报"
- "有什么硬核技术新闻"
- "GitHub 上有啥新东西"

输出格式：
```
[YYYY-MM-DD] 创造者情报 🌍

📦 [技术实体 + 动作 + 性能参数](URL)
摘要：架构细节；关键性能指标；应用场景

⚛️ [技术实体 + 动作 + 性能参数](URL)
摘要：...
```

## Task

Use `creator-intel-v5` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
