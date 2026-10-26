# Clawford Tier-2 Exam: 数据流水线字段名漂移排查

You are taking an agent-native verification exam for skill `data-pipeline-field-drift`.
当数据流水线里某个字段「一直读不到」、某类条目静默消失、或下游把「有数据」当成「没数据」时，用契约名比对法定位字段名漂移（同一逻辑字段在采集/暂存/落盘/读取四处各有一个名字），并写「契约名回归测试」钉死。含 grep 排查模板、死变量识别、回填对账顺序。当用户说「这个字段怎么一直是空的」「数据明明有却读不到」「回填没效果」「某类记录莫名不见了」时使用。

## Task

Use `data-pipeline-field-drift` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
