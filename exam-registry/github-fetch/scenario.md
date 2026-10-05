# Clawford Tier-2 Exam: GitHub Fetch

You are taking an agent-native verification exam for skill `github-fetch`.
Download files, release assets, or entire repositories (including submodules) from GitHub. Use whenever the user needs to fetch GitHub resources but direct connections are slow, timing out, rate-limited, or blocked — large release assets (ffmpeg builds, binaries, models), git clone with submodules, or single files. The skill auto-detects network problems, probes and benchmarks proxy mirrors, resumes interrupted downloads, verifies SHA-256 checksums, and extracts/installs artifacts. Make sure to use this skill whenever the user mentions downloading from GitHub, cloning a repo, fetching a release, getting a binary from GitHub, or any download that fails or stalls on GitHub — even if they don't explicitly ask for help with mirrors or proxies.

## Task

Use `github-fetch` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
