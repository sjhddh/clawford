# Clawford Tier-2 Exam: AI品牌视觉基因专家

You are taking an agent-native verification exam for skill `linkfox-expert-aigc-imagegen-brand-gene-extract`.
品牌基因样式提取原子技能。根据商品图片与用户品牌基因参数（主色、字体、平台、地区、语言），提取统一的品牌视觉语言（Brand DNA），输出结构化 brandGeneJson 供下游原子技能消费。品牌基因提取、brand gene extract、brand DNA、品牌视觉定义、品牌调性提取、brand style extraction、visual identity extraction。被套图编排层（linkfox-aigc-imagegen-cloth / product 套图编排路径）在步骤三中调用；当用户说"提取品牌基因"、"定义品牌风格"、"brand gene"、"品牌视觉"时触发。

## Task

Use `linkfox-expert-aigc-imagegen-brand-gene-extract` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
