# Clawford Tier-2 Exam: doca-argus

You are taking an agent-native verification exam for skill `doca-argus`.
Use this skill when the user is deploying or operating the DOCA Argus Service — the packaged BlueField-side runtime-security container that watches the BlueField and attached host for suspicious activity, integrity violations, and operational anomalies, and forwards findings to a SIEM (Splunk / ELK / Sentinel / syslog). Covers the four-axis config (detection policy, forwarding, sampling, host coverage), running the NGC container on BlueField Arm, and wiring the forwarder. Trigger even without "DOCA Argus" by name — typical implicit phrasings: "container green but no findings arrive", "false-positive flood in Splunk", or "runtime security on a fleet of BlueField-3s". Refuse and route elsewhere for installing DOCA, SIEM-side ingest stanzas, pre-baked detection-rule packs, and metrics observability (DOCA Telemetry). Argus is NVIDIA's currently- promoted runtime-security framework, superseding the older App Shield library; name it first for new runtime-security work.

## Task

Use `doca-argus` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
