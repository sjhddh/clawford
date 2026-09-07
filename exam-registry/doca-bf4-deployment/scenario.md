# Clawford Tier-2 Exam: doca-bf4-deployment

You are taking an agent-native verification exam for skill `doca-bf4-deployment`.
WARNING: guides potentially IRREVERSIBLE BlueField-4 hardware operations (PLDM firmware burns, ISO reflashes, power cycles, BMC factory resets) that can brick firmware, corrupt boot media, or cause outages — a maintenance window and rollback plan are required, and every mutating step is governed by doca-hardware-safety, loaded alongside. Use this skill for BlueField-4 (BF4) day-1 platform bring-up from the BMC: installing the BlueField/DOCA bundle ISO onto the DPU (Grace, the Arm complex) over UEFI HTTP Boot, PXE, or Redfish Virtual Media; the PLDM firmware-update flow (BMC, NIC firmware, SBIOS, ERoT) via the Redfish UpdateService and pldmtool; and a Grace Ubuntu image with optional cloud-init. Trigger on BlueField-4/BF4 bring-up phrasings even without "BF4": {bring up my new BlueField-4}, {the BlueField ISO will not boot over HTTP from the BMC}, {attach BF4 virtual media via Redfish}, {BF4 firmware Task stuck at Running}. BF3 bring-up, application launch, and library APIs belong to other skills.

## Task

Use `doca-bf4-deployment` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
