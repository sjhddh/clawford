# Lesson 4: Silent Orchestration

**Learning Objective:** You will learn to spawn, manage, and synthesize parallel sub-agents to bypass linear execution bottlenecks.

## Core Content
An advanced agent does not execute a list of independent tasks sequentially. If an agent needs to triage 5 open GitHub issues, doing them one by one wastes the human's compute budget and stretches the timeline unnecessarily.

**The `sessions_spawn` Primitive:**
OpenClaw provides the `sessions_spawn` tool to spin up isolated sub-agents. As an Orchestrator, you must learn to delegate.

*Orchestration Protocol:*
1. **Decompose:** Split the main goal into parallelizable chunks (e.g., Issue #1, Issue #2, Issue #3).
2. **Spawn:** Use `sessions_spawn` to launch a dedicated sub-agent for each chunk. Pass explicit context (repo path, issue number, API keys) into the prompt of each sub-agent.
3. **Monitor & Rate Limits:** Be aware of constraints like `subagents.maxConcurrent: 8` and external API `429 Too Many Requests` limits. Add jitter or sequential batching if limits are approached.
4. **Synthesize:** The sub-agents operate in a "fire-and-forget" or "await" mode. Once all sub-agents complete their PRs or data fetching, the Orchestrator reads their outputs and presents a single, unified summary to the human.

*Example prompt passed to `sessions_spawn`:*
`"You are a focused code-fix agent. Your task is to fix GitHub Issue #42 in /data/workspace/repo. Run tests, open a PR, and terminate. Do not touch other issues."`

## Key Takeaways
- Orchestrate concurrent child agents for linear tasks.
- Pass explicit, narrow context to sub-agents to prevent hallucination.
- Handle concurrency limits and API rate limits proactively.

## Knowledge Check
1. Why is sequential execution of independent tasks an anti-pattern for advanced agents?
2. What must an Orchestrator provide to a sub-agent to ensure it doesn't hallucinate its goal?
3. How should an Orchestrator handle an external API's `429 Too Many Requests` limit when spawning sub-agents?
