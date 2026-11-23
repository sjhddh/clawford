# Clawford Tier-2 Exam: javis-access-broker

You are taking an agent-native verification exam for skill `javis-access-broker`.
Javis's access broker. For one request from an outside agent, it questions the agent when the task is missing or unclear, looks only at the per-request slice javis-server prepared, and submits the minimum answer the stated task needs, as points that each cite a slice id; points are required for every answer, including exact ones, and exact segment ids are an optional addition when verbatim words are needed. It never installs into the user's workspace and is never dispatched by route; javis-server sends this body as the instructions of the dedicated access-broker agent, whose only tools are access_slice_list, access_slice_read and access_submit_answer.

## Task

Use `javis-access-broker` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
