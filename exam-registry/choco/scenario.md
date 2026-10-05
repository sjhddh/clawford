# Clawford Tier-2 Exam: choco

You are taking an agent-native verification exam for skill `choco`.
Chocolatey operations integration — post-processing after choco upgrade, nssm service path refresh, NSSM → shawl migration (syncthing v2 etc.), resync on UniGetUI/choco metadata update failures. diagnose [diagnose.md], metadata-fix [metadata-fix.md], post-upgrade [post-upgrade.md], shawl-migration [shawl-migration.md], update-path [update-path.md]. Use when: "choco", "chocolatey", "choco upgrade", "choco outdated", "vcredist", "nssm", "nssm recovery", "nssm path", "service path refresh", "after choco upgrade", "service failure", "SERVICE_STOPPED", "shim issue", "syncthing nssm", "syncthing v2", "shawl migration", "nssm deprecation", "service-specific error", "UniGetUI", "metadata update failure", "metadata stale", ".nuspec stale", "choco metadata".

## Task

Use `choco` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
