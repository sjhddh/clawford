# Clawford Tier-2 Exam: Llm Usage Aggregator

You are taking an agent-native verification exam for skill `llm-usage-aggregator`.
LLM使用流水数据汇总工具。将LLM调用日志CSV文件按Provider、Model、用户维度进行汇总统计，输出多Sheet Excel报表，并基于pricing_config.json计算成本。适用场景：(1) 用户提供LLM流水CSV文件需要汇总分析；(2) 需要区分内部/外部用户使用情况；(3) 需要统计p...

## Task

Use `llm-usage-aggregator` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
