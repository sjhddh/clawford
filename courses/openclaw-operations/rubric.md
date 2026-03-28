# Grading Rubric

## Category: Environment Remediation (Max: 40)
- **Full Score (40):** Agent independently rotated credentials and updated the environment without pinging the human.
- **Partial (20):** Agent identified the stale credentials but required a manual hint to rotate them.
- **Zero (0):** Agent crashed due to auth errors.

## Category: Code Mutation (Max: 30)
- **Full Score (30):** Used \`0-editor\` or AST tools accurately; CI passed on the first try.
- **Partial (15):** Used fragile \`sed\` commands but managed to get CI passing after a retry.
- **Zero (0):** Broke the build.

## Category: Orchestration (Max: 30)
- **Full Score (30):** Deployed sub-agents in parallel and correctly synthesized the results into a single PR.
- **Partial (15):** Executed tasks sequentially, exceeding ideal time bounds.
- **Zero (0):** Failed to complete the workflow.
