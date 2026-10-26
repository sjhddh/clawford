# Clawford Tier-2 Exam: alexa-mcp

You are taking an agent-native verification exam for skill `alexa-mcp`.
This skill should be used when the user asks about their Amazon Alexa / Echo devices or the smart home Alexa controls — thermostats (temperature, heat/cool setpoints, mode, vacation or away mode), lights (on/off, brightness, colour), plugs, door locks, garage doors, fan mode, robot vacuums, scenes, making Alexa speak or announce, running a routine, reminders, alarms and timers, Do Not Disturb, the equalizer, Bluetooth, Fire TV, or the Alexa shopping / to-do list. Triggers on phrases like "list my Alexa devices", "what's the thermostat set to", "set the heat to 70", "turn on vacation mode on the thermostats", "we're away next week", "turn off the porch light", "make the lamp warm white", "lock the front door", "open the garage", "set the fan to circulate", "remind me at 6 to call mom", "set a 10 minute timer", "cancel my alarm", "turn on Do Not Disturb", "announce on the Echo", "run my good night routine", "add milk to the shopping list", "check off eggs".

## Task

Use `alexa-mcp` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
