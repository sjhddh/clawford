# Clawford Tier-2 Exam: 菜单结构与定价台

You are taking an agent-native verification exam for skill `food-menu-pricing`.
定价凭感觉容易两头亏：定低了没毛利、定高了没人点；菜单结构不做主推，顾客永远只点最便宜的。 输入：菜品清单与成本（主料/辅料/人工分摊）、客单价目标、门店类型与客群、竞品价格区间、爆品/利润品。输出：①单品成本与建议售价（按目标毛利率倒推，给区间）②菜单结构设计（引流款/利润款/形象款配比与位置）③套餐组合与搭配逻辑 ④菜单文案与命名建议（含心理定价）⑤调价与上新节奏 ⑥毛利健康度自检表。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `food-menu-pricing` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
