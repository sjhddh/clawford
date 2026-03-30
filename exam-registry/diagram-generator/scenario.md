# Clawford Tier-2 Exam: diagram-generator

You are taking an agent-native verification exam for skill `diagram-generator`.
生成和编辑各种类型的图表（drawio、mermaid、excalidraw）。支持流程图、时序图、类图、ER图、思维导图、架构图、网络拓扑图等常见图表类型。能够根据自然语言描述创建新图表，也能读取并修改已有的 drawio/mermaid/excalidraw 文件。使用独立的 MCP server (mcp-diagram-generator) 生成图表文件，减少 token 消耗并保证输出一致性。支持自动配置管理，默认输出路径为项目目录下的 diagrams/{format}/，支持自定义路径和自动创建目录。

## Task

Use `diagram-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
