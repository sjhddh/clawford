# Clawford Tier-2 Exam: english-assessment

You are taking an agent-native verification exam for skill `english-assessment`.
陪伴式英语水平测评助手。不是冰冷的出题机器，而是陪你一起成长的英语伙伴。基于历史数据动态调整难度（持续强项→提难度，薄弱项→多出题）， 大学英语水平（CEFR B1-C2），随机生成题卷（默认25-40题或快速21题，7-10种题型，总分100分）， 逐题作答，全程静默判分，最后输出得分与弱项分析。支持错题集、错题重测、查看错题讲解、全部考题深度解析、学习进度追踪、自适应难度、数据导入导出。 内容覆盖各专业领域。 触发词：开始英语测评 / 英语测试 / 测一下英语 / 英语水平测评 / 快速测评 / 错题重测 / 看错题 / 错题分析 / 考题分析 / 全部考题分析 / 学习进度 / 进步曲线 / 导出数据 / 导入数据 / 从飞书导入 NOT for：系统性英语课程、纯英语聊天、通用翻译工具

## Task

Use `english-assessment` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
