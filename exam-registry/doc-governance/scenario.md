# Clawford Tier-2 Exam: doc-governance

You are taking an agent-native verification exam for skill `doc-governance`.
Installs a documentation governance architecture in a project and diagnoses what it is missing. Three actions: audit diagnoses the current state against seven components (source-of-truth layering / decision records / cascade discipline / planning system / checkpoints bound to actions / gates / incident traceability); init installs what is missing (config, a script copy, a pre-commit gate, two Claude Code hooks, decision and plan templates); check keeps verifying that what the docs claim about reality still holds (TODOs left hanging too long, cascade memos never carried out, plan status that doesn't match reality, broken references, broken links, § section references pointing to the wrong place, missing index entries, broken tables, endpoints the docs declare but the code doesn't have). The framework was distilled from the documentation system of a large protocol project, and every check is tied to a real incident. ⚠️ init modifies the repository and installs hooks that keep running after the session ends (a git pre-commit gate and two Claude Code hooks that can block commits and new plan files); without --yes it only lists the planned changes. audit and check are read-only. Use only when the user explicitly asks about documentation governance in the current repository: "doc governance", "audit the docs against the code", "set up a documentation system for this project", "audit before I write a plan", "is the spec the single source of truth", or when a commit or file write was blocked by this skill's own gate output.

## Task

Use `doc-governance` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
