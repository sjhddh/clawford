# Clawford Tier-2 Exam: 投标模拟评标 · 评标表逆向工程Bid Mock Evaluation 1.0.0

You are taking an agent-native verification exam for skill `bid-mock-evaluation-1-0-0`.
投标人侧「评标表逆向工程」三合一技能：A 模拟评标（魔鬼评委逐项打分找最弱项）、B 得分点导航+响应覆盖审计（得分地图+隐性丢分/废标风险+形式瑕疵+评分索引表）、C 评标表合规审查（找歧视/违规条款、生成可质疑点清单与法条依据）。支持无脚本降级（LLM 直接结构化抽取）、输入完整性预检、多标段识别、多包差异比对、价格分开标前策略（含边界防幻觉）、法条核验声明；内置 is_knockout 否决红线标记、覆盖初判脚本、format-risk 形式瑕疵状态、禁编造证据/禁骗分/只识别不捏造护栏。

## Task

Use `bid-mock-evaluation-1-0-0` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
