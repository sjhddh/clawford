# Clawford Tier-2 Exam: 车险方案对比台

You are taking an agent-native verification exam for skill `auto-insurance-compare`.
车险报价单表述不一：保额、免赔额、免责条款、增值服务都不一样，光比总价容易买错。 输入：车辆信息（车价/年限/用途）、驾龄与出险记录、已有报价要点、关注点（价格/保障范围/服务）。输出：①口径统一对比表（交强险/车损/三者/座位/附加险的保额与免赔）②免责条款要点（哪些情况不赔）③按用车场景的配置建议（新车/老车/长途/城市代步）④增值服务对比（救援/代驾/换胎）⑤投保与理赔注意（报案时限、现场证据、定损复核）。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `auto-insurance-compare` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
