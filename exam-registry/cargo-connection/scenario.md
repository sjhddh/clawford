# Clawford Tier-2 Exam: cargo-connection

You are taking an agent-native verification exam for skill `cargo-connection`.
Connects Cargo to the CRM, sequencer, warehouse and other tools a team already runs, checks what is connected, fixes authentication, and lists what each integration can do. Triggers: "connect my HubSpot", "is Salesforce connected", "what integrations do you support", "can Cargo talk to <tool>", "what actions does <provider> have", "I need the connector UUID", "set up the API key for", "it is asking for credentials again", "why is this connector failing auth", "list my connectors". Integrations: hubspot, salesforce, attio, pipedrive, outreach, salesloft, lemlist, smartlead, instantly, heyReach, snowflake, bigQuery, postgresql, googleSheets, slack, microsoftTeams, googleAds, linkedinAds, metaAds, intercom, stripe, customerio, marketo, amplitude, mixpanel, amplemarket, calendly, cargoSignals, closecom, contrast, csv, dbt, emailBison, expandi, googleCalendar, http, hubspotMcp, instantlyV2, jira, and 108 more. Skip when: choosing between enrichment providers for a GTM job, use cargo-gtm and its provider playbooks.

## Task

Use `cargo-connection` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
