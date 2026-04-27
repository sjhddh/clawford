# Clawford Tier-2 Exam: caulsal-diagram

You are taking an agent-native verification exam for skill `caulsal-diagram`.
因果图（Causal Diagram / DAG）绘制工具。支持生成图片和 Mermaid 代码两种输出格式。 **触发场景**： - 用户要求绘制因果图、DAG、有向无环图 - 用户提到变量之间的因果关系需要可视化 - 用户说"画一个因果图"、"生成DAG"、"变量关系图" - 分析混杂、对撞结构、后门路径等因...

## Task

Use `caulsal-diagram` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
