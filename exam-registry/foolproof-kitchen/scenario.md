# Clawford Tier-2 Exam: foolproof-kitchen

You are taking an agent-native verification exam for skill `foolproof-kitchen`.
傻瓜厨房：根据用户身体数值和现有食材调料厨具，参照中国居民膳食指南自动生成早中晚加餐快手健康食谱，10-15分钟分步操作指南，厨房零基础可用。适合人群：厨房新手、减脂增肌人群、上班族、独居一人食、特殊饮食需求者（糖尿病/高血压/孕期等）。This skill should be used when the user provides personal body metrics, available ingredients, seasonings, and cooking tools, and asks for healthy quick meal planning or recipe gene

## Task

Use `foolproof-kitchen` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
