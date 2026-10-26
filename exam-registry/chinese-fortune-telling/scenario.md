# Clawford Tier-2 Exam: 算算｜八字·六爻·塔罗

You are taking an agent-native verification exam for skill `chinese-fortune-telling`.
专业命理占卜解读技能：八字排盘（四柱/五行/神煞/称骨/大运）、六爻纳甲断卦、塔罗牌阵解读。当用户提到算命、八字、生辰、四柱、五行、排盘、运势、塔罗、抽牌、解牌、占卜、六爻、摇卦、起卦、解卦、卦象、称骨、合盘、姻缘/事业/财运问卜，或想用中国传统命理或塔罗寻求建议时使用——即使用户没明说"占卜"二字，只要意图是问运势/解卦/看盘/抽牌解读就应触发。

## Task

Use `chinese-fortune-telling` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
