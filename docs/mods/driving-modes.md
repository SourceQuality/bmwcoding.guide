---
id: driving-modes
title: Driving Mode Displays
sidebar_position: 5
---

# Sport Displays & Driving Mode Customization

Coding can unlock sport-oriented displays, gauges, and mode behaviors across all driving modes.

## What You Can Change

### Sport Instrument Cluster Layout
- Enable the **sport gauge layout** (with central tachometer) in Comfort and Eco Pro modes — not just Sport/Sport+
- Show **boost pressure**, **oil temperature**, or **power/torque gauges** in all modes

### M Performance / M Sport Displays
- Enable **M-style** gauges on non-M cars with the M Sport package
- Unlock **digital G-force meter** display
- Show **M lap timer** (on M cars)

### Mode Memory
- Default to **Sport mode** on startup instead of Comfort
- Remember the last selected **Individual mode** configuration

## How to Code It

### BimmerCode

1. Connect and select **HU_MGU** (Head Unit)
2. Look for:
   - **"Sport displays in all modes"** → Enabled
   - **"Default driving mode"** → Sport / Last state
   - **"Sport gauges"** → aktiv
3. Code the module

### E-Sys

1. Read the **HU_MGU** module
2. FDL parameters:
   - `SPORT_ANZEIGE_ALLE_FAHRMODI` → `aktiv`
   - `FAHRMODUS_DEFAULT` → `sport` or `letzter_zustand`
   - `M_LAPTIMER` → `aktiv` (M cars)
3. Code the module

## Applies To

| Chassis | Sport Displays | Mode Memory | M Gauges |
|---------|---------------|-------------|----------|
| G20 | Yes | Yes | M Sport pkg |
| G30 | Yes | Yes | M Sport pkg |
| G05/G06/G07 | Yes | Yes | M Sport pkg |
| G80/G82 | Already enabled | Yes | Standard |
| G70 | Yes | Yes | Varies |

## Notes

- Driving mode memory may reset if the battery is disconnected
- On M cars, the **M1/M2** button memory is separate from general driving mode memory
- These changes are purely display/preference — they don't affect engine or suspension behavior beyond what the mode itself does
