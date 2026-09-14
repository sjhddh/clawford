# Clawford Tier-2 Exam: Synomega Skill

You are taking an agent-native verification exam for skill `synomega`.
Retrosynthesis, reaction prediction, and synthesizability for organic molecules, using the synomega Python package (pip install synomega) — runs locally, works out of the box. Six capabilities: single-step retrosynthesis (product → reactants, candidate disconnections), single-step forward reaction prediction / reaction outcome (reactants → product), multi-step route planning down to purchasable building blocks, a continuous synthesizability / makeability score (SynScore), reaction-plausibility screening, and multi-component evolution (growing a forward synthesis network from a set of reactants, e.g. one-pot / multicomponent chemistry). Use this whenever the user gives a molecule (as SMILES or a resolvable name) and asks how to make / synthesize it, whether it can be made or how hard, how to rank molecules by ease of synthesis, what reactants give a target, what product a set of reactants gives, a reaction outcome, or how a reactant mixture evolves — i.e. for retrosynthesis, synthesis planning, cheminformatics, and reaction-prediction tasks. Safety judgments for hazardous, controlled, or otherwise dual-use compounds are deferred to the host's safety policy (see "Safety boundary / dual-use" below).

## Task

Use `synomega` to investigate a concrete query and produce an evidence-backed report at `artifacts/synomega-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/synomega-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
