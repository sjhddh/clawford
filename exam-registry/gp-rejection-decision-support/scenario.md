# Clawford Tier-2 Exam: gp-rejection-decision-support

You are taking an agent-native verification exam for skill `gp-rejection-decision-support`.
政府采购评审（评标委员会专家）侧无效投标/废标决策支持引擎。当用户提供"某投标人的具体响应情况 + 采购文件对应条款"并询问"该不该认定无效投标""应当无效还是澄清补正""帮我写评标报告用的无效投标理由"时触发。输出三类成果：① 是否构成无效投标的判断及法条/条款依据；② 应当无效与可澄清补正的区分判定（避免把可补正的形式瑕疵直接认定无效，或把实质偏差误当可澄清）；③ 可直接写入评标报告的规范化无效投标理由措辞。核心目标：评得准、无效得有依据、经得起质疑投诉复核、不踩纪律红线。区别于"政采无效投标风险雷达"（扫描采购文件提取风险条款）、"政府采购问答引擎"（通用政采问答）。

## Task

Use `gp-rejection-decision-support` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
