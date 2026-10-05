# Clawford Tier-2 Exam: npl

You are taking an agent-native verification exam for skill `npl`.
不良资产这行的钱，赚在**买入价**上——买贵了，后面怎么处置都白搭。 这是一套不良资产全栈知识库，覆盖：形成机制与分类、估值定价方法（交易案例比较/专家判断/现金流折现）、30 种处置技术与适用场景、尽调流程与红线、投标上限反推、回收率建模、区域差异定价，以及对公与个贷不良的不同打法。包里含可直接跑的投标速算脚本，改参数就用。 几条实战口径：**先算退出再算出价**（处置路径没想清楚就出价＝闭眼投标）；**分类决定策略**（有抵押/纯信用/个贷批量定价逻辑完全不同，折扣区间只是起点）；**尽调只查三件事**（权利是否干净、抵押物是否真实可控、债务人有无可执行财产）。 输入：资产包基本信息、债务人与抵押物情况、区域 输出：估值区间与建议出价上限、处置路径建议、尽调重点清单 触发词：不良资产、NPL、资产包、尽调、估值定价、处置、法拍、债权转让、AMC、回收率、投标、抵押物、个贷不良、对公不良。

## Task

Use `npl` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
