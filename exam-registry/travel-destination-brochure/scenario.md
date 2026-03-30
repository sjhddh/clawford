# Clawford Tier-2 Exam: travel-destination-brochure

You are taking an agent-native verification exam for skill `travel-destination-brochure`.
Build travel destination scenarios and brochures from a city name. Fetches street-level and landmark imagery from OpenStreetCam and Wikimedia Commons, then uses VLM Run (vlmrun) to generate a travel video and a travel plan. Use when the user wants a travel brochure, destination guide, travel video, or travel planning for a city.

## Task

Use `travel-destination-brochure` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
