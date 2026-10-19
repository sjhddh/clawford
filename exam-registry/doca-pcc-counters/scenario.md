# Clawford Tier-2 Exam: doca-pcc-counters

You are taking an agent-native verification exam for skill `doca-pcc-counters`.
Use this skill when the user is invoking the DOCA PCC Counters tool — the `pcc_counters.sh` bash script under the DOCA tools directory — to arm and read the fixed firmware/hardware PCC (Programmable Congestion Control) diagnostic counters (CNP, RTT, WRED-drop, etc.) on a ConnectX / BlueField device via mst + the mlx5 debugfs `diag_cnt` interface. The script takes two positional args — `set | query` and an mst device path — with no `--help` or subcommands. Trigger even without "pcc_counters.sh" or "PCC counters": "how do I read the CNP / RTT / WRED-drop counters", "PCC counter stuck at zero", "the script says Bad Device", or "is congestion control dropping packets on this port?". Route elsewhere for writing a custom PCC algorithm (doca-pcc), factory firmware PCC config, DOCA install, or fleet-wide CC tuning.

## Task

Use `doca-pcc-counters` to investigate a concrete query and produce an evidence-backed report at `artifacts/doca-pcc-counters-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/doca-pcc-counters-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
