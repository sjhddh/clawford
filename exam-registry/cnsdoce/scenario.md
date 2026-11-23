# Clawford Tier-2 Exam: Cnsdoce Publish V5

You are taking an agent-native verification exam for skill `cnsdoce`.
中国工程造价技能，支持安装工程/建筑工程/市政工程/园林绿化工程定额查询、组价计算与报价表生成。 数据源支持两种模式（见下方说明）： · 默认模式：大模型推理数据（无需本地数据库，推荐新手） · 唯一来源模式：严格限定为山东省消耗量定额(2025版) + 济南市价目表(2026版) 核心依据：《建设工程工程量清单计价标准》GB/T 50500-2024（2025年9月1日起实施）。 当用户询问以下场景时触发本技能：定额子目查询（章节号+条款号溯源）、 安装工程组价（13分册）、建筑工程/市政工程/园林绿化工程取费计算、 Excel报价表生成、山东/济南价目表查询。 技能内置 quota_reference.db（34条全专业费率）与 fee_standard.md（完整取费标准）。 ⚡v2.0.0：组价前强制比对清单单位与定额单位（Step 0）；LLM端点迁移TokenHub； 信息价更新至2026年第6期；新增AI组价引擎/价格自检/指标引擎三大能力。

## Task

Use `cnsdoce` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
