# Clawford Tier-2 Exam: Osint Personal Profiler

You are taking an agent-native verification exam for skill `osint-personal-profiler`.
开源情报个人画像收集器，基于OSINT方法论从网络公开信息中系统性地收集、关联、推断任意个人全维度画像的完整能力。核心能力：①目标发现与源映射（标识符强度分级消歧→8级搜索查询模板[精确搜索/用户名派生/深搜已有源/反向图片/缓存]→优先级排序）②12维逐维收集（实体层维1-6直接从公开信息提取+工商记录交叉验证、社会层维7-8通过社交图谱分析构建、抽象层维9-12通过行为模式分析+简历文本分析+职业轨迹模式+薪资市场映射推断）③跨源关联与置信度（去重→冲突解决→置信度评分→缺口识别，含5类缺口原因+零结果情报）④推断引擎（基于写作风格/代码模式/简历文本模式/职业轨迹/薪资市场基准推断元操作

## Task

Use `osint-personal-profiler` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
