# Clawford Tier-2 Exam: Multipass

You are taking an agent-native verification exam for skill `ocas-multipass`.
Accomplishes tasks that need tools the agent does not have. Plans approaches, fills capability gaps with sandboxed tools, executes within an isolated session. Disposable identity, parallel discovery, incremental checkpoints, graceful degradation. Output: task result plus replay script. No global installs, no real identity, clean state in and out. Do not use for tasks solvable with installed skills, permanent skill installs, skill builds (use Forge), or general web research (use Sift).

## Task

Use `ocas-multipass` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
