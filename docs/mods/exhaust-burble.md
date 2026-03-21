---
id: exhaust-burble
title: Exhaust Burble / Pops
sidebar_position: 3
---

# Exhaust Burble / Pops & Crackles

Coding can enable or enhance the overrun exhaust burble (pops and crackles on deceleration) found in sportier BMW models.

## How It Works

BMW programs the DME to inject small amounts of fuel during overrun (when you lift off the throttle) in Sport/Sport+ modes. This unburnt fuel ignites in the hot exhaust, producing the characteristic burble. Coding adjusts the intensity and conditions under which this occurs.

## Which Cars Have It

| Model | Stock Burble | Coding Enhancement |
|-------|-------------|-------------------|
| M340i / M440i (B58) | Moderate in Sport+ | Yes — increase intensity |
| M550i (N63) | Moderate in Sport+ | Yes — increase intensity |
| M3 / M4 (S58) | Strong in Sport+ | Yes — adjust per mode |
| X5 M50i / X5M | Moderate to strong | Yes |
| 330i / 530i (B48/B46) | Minimal | Limited — hardware constraint |

## How to Code It (E-Sys)

:::caution
Exhaust burble coding modifies DME parameters. Work carefully and always back up the DME CAFD first.
:::

1. Connect via ENET cable and read the **DME** module
2. Open FDL Editor
3. Key parameters (names vary by engine):
   - `OVERRUN_SOUND_LEVEL` — controls burble intensity
   - `SPORT_PLUS_OVERRUN` — enables/intensifies burble in Sport+
   - `EXHAUST_FLAP_SPORT` — opens exhaust flap in Sport mode
4. Code the module

### BimmerCode

BimmerCode offers limited exhaust coding on some models:
- **Exhaust flap** control (open in all modes)
- Some burble intensity options in Expert Mode
- Not available on all engines

## Important Notes

- **4-cylinder models (B48)** have limited burble capability — the hardware (exhaust, turbos) doesn't produce the same effect as 6- and 8-cylinder engines
- Increasing burble intensity **does not damage the engine** in normal use, but extreme settings can accelerate catalytic converter wear over very long periods
- Aftermarket exhausts may amplify the effect significantly — start with mild settings
- PPF/OPF (particulate filter) equipped cars have reduced burble from factory — coding can partially restore it but the filter physically dampens the sound
- The burble only activates above certain coolant temperatures and RPM thresholds
