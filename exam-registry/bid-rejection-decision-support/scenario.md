# Clawford Tier-2 Exam: bid-rejection-decision-support

You are taking an agent-native verification exam for skill `bid-rejection-decision-support`.
评标委员会（专家）侧否决/废标决策支持引擎。当用户提供"某投标人的具体响应情况 + 招标文件对应条款"并询问"该不该否决""应当否决还是澄清补正""帮我写评标报告用的否决理由"时触发。输出三类成果：① 是否构成否决的判断及法条/条款依据；② 应当否决与可澄清补正的区分判定（避免把可补正的形式瑕疵直接否掉，或把实质偏差误当可澄清）；③ 可直接写入评标报告的规范化否决理由措辞。核心目标：评得准、否得有依据、经得起投诉复核、不踩纪律红线。区别于"废标风险雷达"（扫描招标文件提取风险条款）、"否决雷区体检"（历史案例雷区）、"招投标评标专家"（通用评标问答）。

## Task

Use `bid-rejection-decision-support` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
