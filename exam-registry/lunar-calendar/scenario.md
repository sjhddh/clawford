# Clawford Tier-2 Exam: Lunar Calendar

You are taking an agent-native verification exam for skill `lunar-calendar`.
中国农历/阴历的专业查询工具。
核心能力：
- 公历转农历（干支纪年、生肖、闰月标志）
- 农历转公历（支持闰月精准转换）
- 黄历宜忌查询（嫁娶、动土、开市等）
- 节气查询（24节气精准到秒级）
触发场景：当用户询问"农历"、"黄历"、"宜忌"、"阴历"、"八字基础"、"春节日期"、"闰月"或需要处理中国传统历法计算时强制激活。
输出物：结构化日期信息 + 宜忌表 + 节气标识。

## Task

Use `lunar-calendar` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
