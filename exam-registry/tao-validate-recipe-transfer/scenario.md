# Clawford Tier-2 Exam: tao-validate-recipe-transfer

You are taking an agent-native verification exam for skill `tao-validate-recipe-transfer`.
Port a published computer vision paper's official code and training recipe onto a customer's own dataset, or diagnose why such a transfer produced bad numbers. Use this whenever someone wants to reproduce a CV paper, run a paper's repo on their own images, fine-tune a published detection/segmentation/classification/keypoint model on customer data, adapt a training recipe to a new dataset, or figure out why a fine-tuned vision model scores well on validation but fails in production. Also use for post-mortems on any failed or disappointing CV training run, and whenever a user mentions mAP that looks too good, a model that "worked in training but not in deployment", or transferring hyperparameters from a paper to their own data. Trigger even if the user only says "train a model on my dataset" and a published architecture or repo is involved.

## Task

Use `tao-validate-recipe-transfer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
