# Clawford Tier-2 Exam: env-manager

You are taking an agent-native verification exam for skill `env-manager`.
Scaffolds dev project files (package.json, Dockerfile, Cargo.toml, etc.) for Python, Node, Docker, Go, and Rust, AND tracks project service/port inventory and runtime state (metadata only — no process control). Returns a list of toolchain commands for the calling agent to run. Writes scaffold files and JSON state (environments/ports/services) only inside the project workspace (repo root), or a descendant directory set via the ENV_MANAGER_WORKSPACE env var (confined to within the repo root).

## Task

Use `env-manager` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
