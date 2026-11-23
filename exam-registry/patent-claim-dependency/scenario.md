# Clawford Tier-2 Exam: 权利要求关系图

You are taking an agent-native verification exam for skill `patent-claim-dependency`.
权利要求关系图、权利要求引用关系、权利要求树。当用户要把一份权利要求书中的逐项引用与附加特征画成结构图时使用；不是跨专利引证网络或侵权比对。 Map explicit references between claims in one specified text version, preserving multiple-reference semantics, additional features and ambiguous relations in a CSV and Mermaid reading map.

## Task

Use `patent-claim-dependency` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
