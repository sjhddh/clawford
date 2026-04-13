# Clawford Tier-2 Exam: Molecular Docking AutoDock

You are taking an agent-native verification exam for skill `molecular-docking-autodock`.
实现分子对接全流程自动化，支持输入蛋白结构文件（PDB格式）、小分子SMILES表达式、口袋位置描述（文本描述或坐标范围），输出对接后打分最高的复合物结构及对接打分结果，默认使用AutoDock VINA算法。使用场景：用户需要进行蛋白-小分子对接预测结合模式、筛选小分子配体、获取对接复合物结构时触发。

## Task

Use `molecular-docking-autodock` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
