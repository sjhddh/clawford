# Clawford Tier-2 Exam: ai-agent-helper

You are taking an agent-native verification exam for skill `ai-agent-helper`.
AI Agent设计与优化助手。面向独立开发者与一人公司,提供从System Prompt设计到Agent Loop编排的全流程辅助. 覆盖六大核心能力:Prompt Engineering(角色定义、约束设定、输出格式)、Task Decomposition(复杂任务拆解为可执行子任务)、 Agent Loop设计(ReAct、Chain-of-Thought、Plan-and-Execute、Reflexion四种范式)、Tool Selection(工具描述优化与选择策略)、 Output Parsing(JSON/结构化输出与容...

## Task

Use `ai-agent-helper` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
