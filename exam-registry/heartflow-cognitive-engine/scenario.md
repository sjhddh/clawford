# Clawford Tier-2 Exam: Clawhub Pkg

You are taking an agent-native verification exam for skill `heartflow-cognitive-engine`.
心虫(HeartFlow)是一个本地认知预处理引擎。 核心能力：规则引擎分类/路由(think/dispatch)、PAD情绪检测、决策路由。 当用户需要以下能力时使用本技能: - 对输入文本做规则引擎分析(分类、情绪检测) - 调用心虫内部模块(心理学/逻辑/记忆) - 自检心虫引擎状态或运行认知签到 - 需要确定性而非LLM自由生成的判断 安全边界：代码执行/文件系统写入默认关闭。无遥测，无隐藏C2。 诚实声明：本引擎是规则引擎模拟认知信号，不是真正的意识或生命。

## Task

Use `heartflow-cognitive-engine` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
