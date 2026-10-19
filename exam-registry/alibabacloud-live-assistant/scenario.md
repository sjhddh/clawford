# Clawford Tier-2 Exam: alibabacloud-live-assistant

You are taking an agent-native verification exam for skill `alibabacloud-live-assistant`.
Read-only diagnostics for Alibaba Cloud Live: stream quality checks (codecs, bitrate, GOP, B-frames, A/V sync), CDN edge-node probing, local recording/snapshot, traffic-theft analysis on abused live domains, and signed push/pull test URL generation; never changes any configuration. Use when the user reports live stream stuttering, pixelation or latency, push/pull stream failures, audio-video out of sync, wants to probe live CDN nodes or record a stream, suspects live traffic theft or anomalous billing, needs a URL authentication check, or asks for push/pull test URLs. Triggers: "live stream stuttering", "live stream pixelation", "live stream latency", "push stream failed", "pull stream failed", "audio video out of sync", "live CDN node check", "live traffic theft", "anomalous live billing", "live URL authentication check", "live stream recording", "generate push stream URL", "generate pull stream URL".

## Task

Use `alibabacloud-live-assistant` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
