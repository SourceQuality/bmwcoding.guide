---
id: safety
title: Safety & Best Practices
sidebar_position: 100
---

# Safety & Best Practices

BMW coding is generally safe when done correctly, but careless changes can cause real problems. Follow these guidelines.

## Golden Rules

1. **Always back up before coding.** Read the module and save/export the CAFD before making any change.
2. **Only change what you understand.** If you don't know what a parameter does, don't change it.
3. **One module at a time.** Code one module, verify it works, then move to the next.
4. **Engine off, ignition on.** Never code while the engine is running. Key on / engine off is the correct state.
5. **Keep a log.** Write down every change you make — module, parameter, old value, new value.

## What Can Go Wrong

| Issue | Cause | Fix |
|-------|-------|-----|
| Warning lights on dash | Incorrect BDC or KOMBI coding | Restore backup, recode |
| Module not responding | Interrupted during coding | Retry coding; worst case, dealer reset |
| Feature doesn't work | Changed display setting but hardware not present | Revert the change |
| Car won't start | Extremely rare — DME miscoding | Restore DME backup via E-Sys |

## Risk Levels

| Risk | Examples |
|------|----------|
| **Very Low** | Digital speedometer, fold mirrors on lock, start-stop memory |
| **Low** | Ambient lighting, display changes, needle sweep |
| **Medium** | Exhaust burble, driving mode defaults, video in motion |
| **High** | DME power parameters, air suspension, xDrive torque split |
| **Do Not Touch** | Airbag modules, ABS/DSC calibration, ADAS sensor coding |

## Warranty

- Coding **can** be detected by the dealership
- In practice, most comfort/display coding is not flagged or questioned during routine service
- If a coded feature directly causes a failure, the dealer may decline warranty on that specific repair
- Restoring to stock before a dealer visit is common practice but not guaranteed to be undetectable (module flash counters increment)

## When to Stop and Ask

If you encounter any of these, **stop and seek help** from the community before proceeding:
- A parameter you're changing shows a value you've never seen documented
- E-Sys shows errors or warnings during coding
- Your car behaves unexpectedly after a change (new warnings, features not working)
- You're unsure if a change affects safety systems

## Recovery

If something goes wrong:
1. **Don't panic** — most issues are fixable
2. **Restore your backup** — reload the saved CAFD and recode
3. **Disconnect the battery for 30 seconds** — this resets most module states
4. **Contact the community** — BMW coding forums and Discords have experienced members who can help
5. **Dealer visit** — as a last resort, the dealer can reflash any module to factory state
