---
id: ambient-lighting
title: Ambient Lighting
sidebar_position: 2
---

# Ambient Lighting Customization

G series BMWs feature multi-color interior ambient lighting. Coding can unlock additional colors, zones, and behaviors beyond the factory defaults.

## What You Can Change

- **Number of available colors** — unlock the full palette (some markets restrict to fewer colors)
- **Brightness levels** — increase maximum brightness
- **Welcome lighting** — change the light sequence when you unlock/open the door
- **Zone control** — independently set colors for different interior zones
- **Dynamic / interaction mode** — lights react to music or driving inputs

## How to Code It

### BimmerCode

1. Connect and select the **BDC** module
2. Look for **"Ambient light"** section
3. Common options:
   - **Ambience lighting active** → Enabled
   - **Number of colors** → Maximum (varies by model)
   - **Ambient brightness max** → Increase value
4. Code the module

### E-Sys (full control)

1. Connect and read the **BDC** module (or **BDC2** on G70/G60)
2. Open FDL Editor
3. Key parameters:
   - `AMBIENTES_LICHT` → `aktiv`
   - `AL_ANZAHL_FARBEN` → set to maximum (e.g., `10` or `enh_feature`)
   - `AL_HELLIGKEIT_MAX` → increase value
   - `AL_WELCOME` → configure welcome sequence
4. Code the module

## Applies To

All G series with ambient lighting hardware:
- **G20/G21** — standard on most trims
- **G30/G31** — standard on most trims
- **G05/G06/G07** — standard
- **G80/G82** — standard
- **G70** — uses BDC2 module, enhanced Interaction Bar

## Notes

- You cannot add ambient lighting hardware via coding — the LED strips must be physically installed
- The G70/G60's Interaction Bar is a separate lighting system with its own coding paths
- Some lighting effects require the Ambient Light Plus package (SA 4UR) hardware
- Colors that appear in the iDrive menu after coding may look slightly different than expected — LED hardware varies between trim levels
