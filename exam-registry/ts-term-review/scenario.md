# Clawford Tier-2 Exam: ts-term-review

You are taking an agent-native verification exam for skill `ts-term-review`.
拿到 TS 或投资协议，看半天不知道哪条能签哪条得改——风险全藏在具体条目里，一句"整体没大问题"最要命。这套审查按 15 条核心条款逐条过：估值 Pre/Post、清算优先权、反稀释（完全棘轮是红线）、优先购买权、领售/拖售、对赌与业绩承诺、回购条款、个人连带担保、董事会与一票否决、保护性条款、竞业与知识产权、信息权、交割条件、股东会表决权、违约责任。每条给三级判定（🔴 红线不改就别签 / 🟡 可谈争取改 / 🟢 行业惯例）+ 谈判话术 + 替代方案，并区分"对公司"和"对创始人个人"——个人连带回购是绝大多数血案的源头，重点标红。另附谈判筹码排序、常见坑清单、BP 与数据室准备。与主技能 `funding-fit-diagnosis` 配套（做整体融资研判时用主技能）。输入：TS/投资协议条款（粘贴或描述）；输出：逐条判定表 + 必须改的清单 + 谈判话术 + 底线建议。**不构成法律意见**，正式签署与司法效力请找执业律师确认。触发词：TS、Term Sheet、投资条款清单、投资协议、增资协议、股权转让协议、对赌、业绩承诺、回购、清算优先权、反稀释、完全棘轮、个人连带、一票否决、领售权、拖售权、估值、Pre/Post、股权稀释、条款谈判、FA。

## Task

Use `ts-term-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
