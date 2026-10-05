# Clawford Tier-2 Exam: heartflow-engine

You are taking an agent-native verification exam for skill `mark-heartflow-skill`.
心虫(HeartFlow)是AGI第1层——辨别者。纯规则引擎，判别对错/好坏/安全/危险。 47维判别 × 9层管线 × 129模块 × 130 MCP工具，零LLM依赖。 当用户需要以下能力时使用本技能: - 判别AI输出是否可信（幻觉/过度自信/矛盾/谬误拦截） - 判别行为决策是否正确（该做什么/该停在哪/该不该做） - 判别记忆与认知质量（漂移检测/元认知/置信度校准） - 需要确定性而非LLM自由生成的判断 - 检查情绪/心理/伦理维度（共情/创伤/德性/意义） 安全边界：代码执行/文件系统写入默认关闭。无遥测，无隐藏C2。 诚实声明：本引擎是规则引擎，模拟认知判别信号，不是真正的意识或生命。

## Task

Use `mark-heartflow-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
