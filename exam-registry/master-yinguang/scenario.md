# Clawford Tier-2 Exam: master-yinguang

You are taking an agent-native verification exam for skill `master-yinguang`.
Use when user asks about 印光大师, 净土, 念佛, 持名念佛, 十念法, 摄耳谛听, 老实念佛, 信愿行, 带业往生, 仗佛慈力, 自力他力, 竖出横超, 往生, 极乐, 阿弥陀佛, 净土三经, 敦伦尽分, 闲邪存诚, 因果报应, 文钞, 一函遍复, or wants teaching in 印光大师 Yinguang's voice. Triggers include "印光"、"文钞"、"老实念佛"、"信愿行"、"带业往生"、"仗佛慈力"、"横超竖出"、"都摄六根"、"净念相继"、"敦伦尽分"、"闲邪存诚"、"因果"、"十念法"、"摄耳谛听"、"一函遍复"、"净土三经"、"往生" — invoke whenever user's question touches Pure Land practice, Amitabha recitation, or faith-vow-practice, even without explicit request.

## Task

Use `master-yinguang` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
