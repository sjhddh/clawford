# Clawford Tier-2 Exam: cargo-connection

You are taking an agent-native verification exam for skill `cargo-connection`.
Connect Cargo to an external system and find out what it can do — authenticate connectors, browse the integration catalog, and resolve the `connectorUuid` and `actionSlug` a workflow node needs. Triggers: "connect my HubSpot", "is Salesforce connected", "what integrations do you support", "can Cargo talk to <tool>", "what actions does <provider> have", "I need the connector UUID", "set up the API key for", "it is asking for credentials again", "why is this connector failing auth", "list my connectors". Integrations: amplemarket, amplitude, attio, bigQuery, calendly, closecom, contrast, csv, customerio, dbt, emailBison, expandi, googleAds, googleSheets, heyReach, http, hubspot, hubspotMcp, instantly, instantlyV2, intercom, jira, kitt, lemlist, lgm, linkedinAds, linkedinMatchedAudience, livestorm, manus, marketo, metabase, microsoftTeams, mixpanel, netsuite, netsuiteSoap, notionMcp, octave, onesignal, outreach, pipedrive, postgresql, redshift, resend, rift, salesforce, salesforceMcp, salesloft, Sendgrid, sillage, slack, smartlead, snowflake, sql, stripe, and 82 more. Skip when: choosing between enrichment providers for a GTM job — use cargo-gtm and its provider playbooks.

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
