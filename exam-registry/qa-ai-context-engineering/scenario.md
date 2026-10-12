# Clawford Tier-2 Exam: qa-ai-context-engineering

You are taking an agent-native verification exam for skill `qa-ai-context-engineering`.
将前面所有分析步骤（需求解构、场景树、边界清单、风险评估等）打包成一个结构化的AI上下文包，确保AI在生成测试用例时拥有完整的业务上下文、功能上下文和技术上下文。当已经完成了需求分析、场景构建和深度设计，即将进入提示词生成阶段时，必须经过此步骤。上下文包的完整度直接决定了AI生成用例的质量——输入垃圾，输出也是垃圾。当上游分析缺失时，本技能会读取用户上传的需求文件或fetch用户提供的URL以补充上下文，并对原始描述做结构化解析后并入上下文包，但不会替代上游分析步骤——缺失项仍需标注并建议回退补充。 触发场景：上下文工程、构建上下文、上下文包、测试上下文、结构化上下文、上下文不够、已完成需求解构和场景构建需要打包上下文时。 Use when the user asks about: building a structured context package so an LLM has full business, functional, and technical context before generating test cases.

## Task

Use `qa-ai-context-engineering` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
