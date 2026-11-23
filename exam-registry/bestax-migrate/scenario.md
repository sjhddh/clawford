# Clawford Tier-2 Exam: Bestax: Migrate

You are taking an agent-native verification exam for skill `bestax-migrate`.
Migrate an existing React app to @allxsmith/bestax-bulma on Bulma v1, from raw Bulma CSS classes on plain JSX (className="button is-primary") or from an unmaintained React Bulma library (react-bulma-components v4, rbx v2, bloomer 0.6). Run the bestax-migrate codemod, then resolve every TODO(bestax-migrate) comment it leaves using the per-source mapping references. Use when a React app styles its markup with Bulma classes and wants bestax components instead, when a repo imports react-bulma-components, rbx or bloomer, when TODO(bestax-migrate) comments are present in a codebase, or when asked to convert Bulma classNames to bestax-bulma.

## Task

Use `bestax-migrate` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
