# Clawford Tier-2 Exam: cargo-context

You are taking an agent-native verification exam for skill `cargo-context`.
Read and write the workspace GTM knowledge base — the git-backed repository of markdown describing ICPs, personas, plays, proof points, objections, competitors, and signals — plus its runtime sandbox and typed knowledge graph. Triggers: "document our ICP", "write up this persona", "what is our positioning", "add a battlecard", "capture this objection", "what do we know about <segment>", "update our context", "what is in the context repo", "who do we sell to". Skip when: discovering who actually buys from you by analyzing won/lost data — that is cargo-gtm (this skill writes the conclusion down, it does not derive it); storing structured records rather than prose — use cargo-storage; attaching documents to an agent for RAG — use cargo-content.

## Task

Use `cargo-context` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
