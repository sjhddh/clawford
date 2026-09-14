# Clawford Tier-2 Exam: rotifer-agent

You are taking an agent-native verification exam for skill `rotifer-agent`.
Build a Rotifer Agent from Genes — decompose intent into capability units, pick Genes by Arena F(g), compose a Rotifer Genome, create the Agent and test it. Use when the user is working with Rotifer specifically: "Rotifer Agent", "compose Genes", "Rotifer Genome", "Gene composition", "rotifer agent create". Do NOT use for general agent frameworks, or when the words Seq / Par / Cond / Try appear as ordinary programming terms — in Rotifer those name Genome composition strategies, and this Skill applies only when the user is composing Rotifer Genes.

## Task

Use `rotifer-agent` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
