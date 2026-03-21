---
id: safety
title: Safety & Best Practices
sidebar_position: 100
---

# Safety and Best Practices

BMW coding is generally safe when done correctly, but careless changes can cause real problems. Follow these guidelines.

## Golden Rules

1. **Always back up before coding.** Read the module and save the CAFD before making any changes.
2. **Only change what you understand.** If you don't know what a parameter does, leave it alone.
3. **One module at a time.** Code one module, check that it works, then move on.
4. **Engine off, ignition on.** Never code with the engine running.
5. **Keep a log.** Write down every change you make: module, parameter, old value, new value.

## What Can Go Wrong

| Issue | Cause | Fix |
|-------|-------|-----|
| Warning lights on dash | Incorrect BDC or KOMBI coding | Restore backup and recode |
| Module not responding | Coding was interrupted | Try coding again. Worst case, the dealer can reset it. |
| Feature doesn't work | Changed a display setting but the hardware isn't there | Revert the change |
| Car won't start | Critical module miscoding (very rare) | Restore backup through E-Sys |

## Risk Levels

| Risk | Examples |
|------|----------|
| **Very Low** | Digital speedometer, fold mirrors on lock |
| **Low** | Ambient lighting, display changes, needle sweep |
| **Medium** | Driving mode defaults, comfort features |
| **High** | Air suspension, xDrive torque split |
| **Do Not Touch** | Airbag modules, ABS/DSC calibration, ADAS sensor coding |

## Warranty

- Coding can be detected by the dealership
- In practice, most comfort and display coding isn't flagged during routine service
- If a coded feature directly causes a failure, the dealer may decline warranty on that specific repair
- Restoring to stock before a dealer visit is common, but not guaranteed to be undetectable since module flash counters increment

## When to Stop and Ask

If any of these come up, stop and ask the community before going further:
- A parameter shows a value you've never seen documented
- E-Sys shows errors or warnings during coding
- Your car behaves unexpectedly after a change (new warnings, features not working)
- You're not sure if a change touches safety systems

## Recovery

If something goes wrong:
1. **Don't panic.** Most issues are fixable.
2. **Restore your backup.** Reload the saved CAFD and recode.
3. **Disconnect the battery for 30 seconds.** This resets most module states.
4. **Ask the community.** BMW coding forums and Discords have experienced people who can help.
5. **Dealer visit.** As a last resort, the dealer can reflash any module back to factory.
