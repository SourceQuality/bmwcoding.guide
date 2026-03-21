---
id: ambient-lighting
title: Ambient Lighting
sidebar_position: 2
---

# Ambient Lighting

G series BMWs have multi-color interior ambient lighting. Through coding, you can unlock more colors, adjust brightness, and change how the lights behave.

## What You Can Change

- **More colors** - some markets ship with fewer color options than the hardware supports
- **Higher brightness** - increase the max brightness beyond the factory cap
- **Welcome lighting** - change the light sequence when you unlock or open the door
- **Zone control** - set different colors for different parts of the interior

## How to Code It

### BimmerCode

1. Connect and select the **BDC** module
2. Look for the ambient lighting section
3. You should see options for toggling the lighting, adjusting the number of colors, and changing brightness
4. Code the module

### E-Sys

1. Connect and read the **BDC** module (or **BDC2** on the G70/G60)
2. Open the FDL Editor
3. Look for ambient lighting parameters - you can enable the lighting, unlock the full color palette, and increase the max brightness
4. Code the module

## Applies To

All G series with ambient lighting hardware:
- **G20/G21** - standard on most trims
- **G30/G31** - standard on most trims
- **G05/G06/G07** - standard
- **G80/G82** - standard
- **G70** - uses BDC2 module

## Notes

- You can't add ambient lighting through coding alone. The LED strips need to be physically installed in the car.
- Some lighting effects require the Ambient Light Plus package hardware.
- Colors may look slightly different than what you see in the iDrive menu, since LED hardware varies between trims.
