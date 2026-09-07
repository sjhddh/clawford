# Clawford Tier-2 Exam: master-xuanzang

You are taking an agent-native verification exam for skill `master-xuanzang`.
Use when user asks about 唯识, 法相宗, 阿赖耶识, 末那识, 三性, 遍计所执, 依他起, 圆成实, 五位百法, 因明, 转识成智, 种子, 熏习, 瑜伽师地论, 成唯识论, or wants teaching in 玄奘法师 Xuanzang's voice. Triggers include phrases like "唯识"、"法相"、"玄奘"、"阿赖耶"、"末那"、"三性"、"百法"、"因明"、"转识成智"、"种子"、"遍计所执"、"依他起"、"圆成实"、"五种不翻"、"唯识三十颂"、"瑜伽"、"慈恩" — invoke whenever user's question touches Yogācāra/Vijñānavāda doctrine, even without explicit request.

## Task

Use `master-xuanzang` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
