---
id: driving-modes
title: Driving Mode Displays
sidebar_position: 5
---

# Sport Displays and Driving Mode Customization

You can code your car to show sport-oriented instrument layouts and change how driving modes behave.

## What You Can Change

### Sport Gauge Layout
By default, the sport instrument layout (with the central tachometer) only shows up in Sport and Sport+ modes. You can code it to appear in Comfort and Eco Pro too.

### Additional Gauges
Some cars can show boost pressure, oil temperature, or power/torque readouts. Whether these are available depends on your specific cluster hardware.

### Mode Memory
You can set the car to start up in Sport mode instead of Comfort, or have it remember whichever Individual mode configuration you last used.

## How to Code It

### BimmerCode

1. Connect and select **HU_MGU** (Head Unit)
2. Look for options related to sport displays, default driving mode, and sport gauges
3. Enable the ones you want
4. Code the module

### E-Sys

1. Read the **HU_MGU** module
2. Look for sport display and driving mode parameters in the FDL Editor
3. Code the module

## Applies To

| Chassis | Sport Displays | Mode Memory |
|---------|---------------|-------------|
| G20 | Yes | Yes |
| G30 | Yes | Yes |
| G05/G06/G07 | Yes | Yes |
| G80/G82 | Already enabled | Yes |
| G70 | Yes | Yes |

## Notes

- Driving mode memory may reset if the battery gets disconnected
- On M cars, the M1/M2 button memory is separate from the general driving mode setting
- These changes affect what you see on screen and which mode starts by default. They don't change the actual behavior of the engine or suspension beyond what the selected mode already does.
