---
id: digital-speedometer
title: Digital Speedometer
sidebar_position: 1
---

# Digital Speedometer

Enabling a digital speed readout in the instrument cluster is one of the easiest and most popular coding changes you can make.

## What It Does

Adds a numerical speed display to your instrument cluster. On most cars, it shows up in the center of the analog dial. Some cluster versions also let you put it in the lower info area.

If your car has a head-up display, the digital speed is usually already shown there.

## How to Code It

### BimmerCode (Easiest)

1. Connect to your car
2. Select the **KOMBI** (Instrument Cluster) module
3. Find the digital speed display option
4. Set to **Enabled**
5. Code the module

### E-Sys

1. Connect and read the **KOMBI** module
2. Open the FDL Editor
3. Find the digital speed option and set it to active
4. Code the module

## Applies To

| Chassis | Module | Notes |
|---------|--------|-------|
| G20 / G21 | KOMBI | Works on all cluster types |
| G30 / G31 | KOMBI | Pre-LCI and LCI |
| G05 / G06 / G07 | KOMBI | All variants |
| G80 / G82 | KOMBI | Already enabled on some M models |
| G70 | KOMBI | Confirmed working |

## Tips

- This is a great first coding change to make sure your setup is working correctly
- Completely reversible, just set it back to the default value
- Some Live Cockpit Professional clusters already have this on from the factory
