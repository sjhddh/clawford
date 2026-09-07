# Clawford Tier-2 Exam: ljh-qianchuan

You are taking an agent-native verification exam for skill `ljh-qianchuan`.
千川掉量诊断器。用户描述掉量症状，按决策树一步步走，两分钟给出第一动作。 触发方式：/ljh-qianchuan、「千川消耗掉了」「投放量突然没了」「ROI 掉了怎么办」 Douyin ad (Qianchuan) traffic-drop diagnostic tool. Walks through a decision tree one node at a time to find the first action within two minutes. Trigger: /ljh-qianchuan, "my ad spend dropped", "Qianchuan traffic disappeared", "ROI suddenly dropped" 不要在非千川的广告平台问题或网站流量下降问题上自动触发。

## Task

Use `ljh-qianchuan` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
