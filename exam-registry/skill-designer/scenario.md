# Clawford Tier-2 Exam: skill-designer

You are taking an agent-native verification exam for skill `skill-designer`.
把高质量 Skill 设计变成积木原创特色的标准化工作流：用 10 格积木链把模糊念头设计成可链接、可复用、可衡量、可演进的 AI Skill——产出技能蓝图 + 文件结构图（7套框架范例）→ 五维就绪度打分 → 测试打磨闭环。只设计不施工：出蓝图 brief 供创建类 skill 落地。 **零技术门槛**：直接说需求即可开工；赶时间走轻量通道（约30分钟出蓝图）；带已验证经验来可走经验蒸馏入口。 **四步施工流**：概念讨论→初步方案→深化设计→施工蓝图。 **固定口令**：说「设计skill」｜「改进skill」｜「skill打分」｜「积木skill」｜「积木设计师」即开工（英文同义 d

## Task

Use `skill-designer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
