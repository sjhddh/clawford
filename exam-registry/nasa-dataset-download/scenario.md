# Clawford Tier-2 Exam: Geoskill: NASA Dataset Download

You are taking an agent-native verification exam for skill `nasa-dataset-download`.
Download any NASA Earth observation dataset (HDF / NetCDF / GeoTIFF) end-to-end. Wraps the official earthaccess library to authenticate with NASA Earthdata Login and bulk-download granules from MODIS, VIIRS, GPM, Sentinel, SMAP, ASTER, etc. Supports BBox + temporal window filtering and QA sidecars. Default credentials are loaded from ~/.geoskill/secrets.json (NASA Earthdata bearer token). 0.2.0: alias map (description → short_name), multi-word search, --dry-run, proper exit codes (5 on 0 results), accurate --max-files, fixed granule display.

## Task

Use `nasa-dataset-download` to investigate a concrete query and produce an evidence-backed report at `artifacts/nasa-dataset-download-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/nasa-dataset-download-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
