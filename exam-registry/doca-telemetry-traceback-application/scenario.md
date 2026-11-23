# Clawford Tier-2 Exam: doca-telemetry-traceback-application

You are taking an agent-native verification exam for skill `doca-telemetry-traceback-application`.
Use this skill when the operator is driving the DOCA Telemetry Traceback application to monitor telemetry data locally on a BlueField DPU or ConnectX NIC, detect long-term trends and threshold breaches with user-defined rules, and capture pre-event history plus active-event data to a log file. Trigger even when the user does not explicitly mention "DOCA Telemetry Traceback" — typical implicit phrasings include "monitor telemetry trends on the DPU without streaming all raw data", "log the samples before and after a threshold breach", "set up a rule that triggers when rx bytes/s exceeds 1M", "differential greater than rule on a data ID", "circular buffer of telemetry samples", or "traceback event log". Refuse and route elsewhere: the DOCA Telemetry Diag programming API and raw counter reads to doca-telemetry, DOCA install/bring-up to doca-setup, and version questions to doca-version.

## Task

Use `doca-telemetry-traceback-application` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
