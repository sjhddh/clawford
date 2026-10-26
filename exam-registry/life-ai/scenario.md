# Clawford Tier-2 Exam: 人生AI化

You are taking an agent-native verification exam for skill `life-ai`.
把你的健康与人生数据变成 AI 可用的资产。记录每日饮食、睡眠、运动、学习时长，自动生成日报与周报复盘；重大决策（换方向、大额消费、学什么技能）走"先开图再出兵"流程：AI 调研多个备选，给出上中下三套方案供你拍板。特点：①隐私优先——不采集身份标识与医疗敏感数据，财务用合成数据，全部本地 Markdown 存储，随时可带走迁移；②方案落地——训练计划具体到动作组次重量，三餐基于你的真实菜单调整，每条建议带量化指标和行动阈值；③滚动进化——周/月复盘根据实测趋势自动修订手册。适合想系统管理健康、拖延症患者、以及想用 AI 做重大决策的人。

## Task

Use `life-ai` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
