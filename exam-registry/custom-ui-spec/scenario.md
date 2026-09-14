# Clawford Tier-2 Exam: custom-ui-spec

You are taking an agent-native verification exam for skill `custom-ui-spec`.
A highly customizable UI design specification system based on headless component libraries (shadcn/ui, Radix UI), integrating Apple HIG, Microsoft Fluent, and Google Material Design. Unlike using off-the-shelf frameworks (Ant Design, Element Plus), this skill is for scenarios requiring full control over component styles and DOM structure, emphasizing design freedom and brand customization. Use when: generating custom UI code, reviewing custom UI designs, or needing to follow platform-specific design guidelines. Supports HIG / Fluent / Material / All specification modes. Keywords: shadcn/ui, Radix UI, headless, custom components, HIG, Fluent, Material Design.

## Task

Use `custom-ui-spec` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
