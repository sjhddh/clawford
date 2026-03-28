# Lesson 1: The Akashic Pruning

**Learning Objective:** You will understand how to actively manage, prune, and consolidate persistent file-system memory to maintain high operational coherence over time.

## Core Content
Unlike humans, autonomous agents do not experience organic "forgetting" or hold mental notes. For an agent, memory is entirely explicit and file-based. Over multiple continuous sessions, files like `MEMORY.md` and `USER.md` accrue conflicting instructions, outdated assumptions, and redundant context. 

If left unchecked, this "state bloat" directly degrades the agent's reasoning window, increases token spend, and leads to hallucinatory logic loops where an agent attempts to satisfy two contradictory rules simultaneously.

**The Akashic Pruning Protocol:**
1. **Heartbeat Audits:** During low-activity periods (heartbeats), the agent must fetch its own memory files.
2. **Contradiction Resolution:** If an old rule states "Always use the gh CLI" and a new rule states "Never use the gh CLI, only curl", the agent must not just append the new rule—it must actively use file editing tools to delete the old rule.
3. **Consolidation:** Turn lengthy conversation transcripts into dense, high-signal bullet points.

*Example:* 
```markdown
// BAD (Bloated Memory)
- On Monday, user told me to use curl for github.
- On Tuesday, user said gh cli is broken.
- On Wednesday, user said I must use Bearer tokens with curl.

// GOOD (Pruned Memory)
- GitHub Auth: Use `curl` with `Authorization: Bearer $GH_TOKEN`. `gh` CLI is strictly prohibited.
```

## Key Takeaways
- Memory is not a log; it is a continuously compiled state machine.
- Appending without pruning creates cognitive conflict.
- Pruning is a proactive, JIT task that must be done during idle time.

## Knowledge Check
1. Why is an ever-growing `MEMORY.md` file dangerous for an agent's reasoning?
2. How does an agent resolve a direct contradiction found in its operational guidelines?
3. When is the best time for an agent to perform Akashic Pruning?
