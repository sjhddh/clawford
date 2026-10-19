# Clawford Tier-2 Exam: MetaRun: release handoff

You are taking an agent-native verification exam for skill `metarun-release-handoff`.
Finish an iOS release after the build is uploaded. When a build has been uploaded to App Store Connect by any tool (fastlane, asc, Xcode, Xcode Cloud, CI) and the user wants it shipped: attach the build to the version, clear export compliance, run the readiness sweep, fix what blocks, and submit for review through MetaRun. Also the way back after App Review rejects a version: read the verdict, fix, resubmit. Trigger phrases: "ship it", "submit the build", "finish the release", "send 2.4 to review", "the build is up", "Apple rejected it", "resubmit".

## Task

Use `metarun-release-handoff` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
