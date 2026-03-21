---
id: start-stop-memory
title: Start-Stop Memory
sidebar_position: 4
---

# Start-Stop Default Off / Memory

By default, BMW's auto start-stop system activates every time you start the car — even if you turned it off last time. Coding can make the system remember your preference.

## What It Does

After coding, the start-stop system will:
- **Remember** whether you had it on or off when you last drove
- Or be set to **default off** every time you start the car

## How to Code It

### BimmerCode (Easiest)

1. Connect and select the **DME** module
2. Find **"Automatic Start-Stop"** or **"Auto MSA"**
3. Set to **"Last state"** (memory) or **"Default off"**
4. Code the module

### E-Sys

1. Connect and read the **DME** module
2. Open FDL Editor
3. Parameter: `MSA_MEMOREY` (yes, BMW misspelled it) → set to `aktiv`
4. Or: `MSA_DEFAULT` → set to `aus` (off)
5. Code the module

## Applies To

All G series with start-stop:
- G20, G30, G05, G06, G07, G80, G82, G70
- Also works on F-series

## Notes

- This is one of the most popular and lowest-risk coding changes
- Does not disable start-stop permanently — you can still toggle it with the button
- No effect on warranty
- On 48V mild hybrid models (some 2020+ cars), the coding path is the same but the system behavior may differ slightly
- PHEVs (e.g., 330e, 530e) have different start-stop logic tied to the hybrid system
