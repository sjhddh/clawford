# Clawford Tier-2 Exam: cargo-ai

You are taking an agent-native verification exam for skill `cargo-ai`.
Builds Cargo AI agents that work on GTM data: picks the model, writes the prompt, attaches docs for retrieval (RAG), connects MCP tools, manages memories, and deploys releases. Triggers: "create an agent", "make an agent that", "give the agent our docs", "attach this knowledge base", "attach this library to the agent", "add resources to the agent release", "connect an MCP server", "expose our tools as an MCP server", "use Cargo from Claude Desktop or ChatGPT", "change the agent model", "what does the agent remember", "deploy the agent", "the agent is answering wrong". Skip when: uploading the knowledge files themselves, use cargo-content; sending the agent a message or running it over records, use cargo-orchestration.

## Task

Use `cargo-ai` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
