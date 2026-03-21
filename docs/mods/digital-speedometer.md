---
id: digital-speedometer
title: Digital Speedometer
sidebar_position: 1
---

# Digital Speedometer

One of the most popular and simplest coding changes — enabling a digital speed readout in the instrument cluster.

## What It Does

Adds a numerical speed display to your instrument cluster, either:
- **In the center of the analog speedometer dial** (most common)
- **In the lower information area** of the cluster
- **In the head-up display** (if equipped, usually already available)

## How to Code It

### BimmerCode (Easiest)

1. Connect to your car
2. Select **KOMBI** (Instrument Cluster) module
3. Find **"Digital speed display"** or **"Geschwindigkeit_digital"**
4. Set to **Enabled** or **aktiv**
5. Code the module

### E-Sys

1. Connect and read the **KOMBI** module
2. Open FDL Editor
3. Navigate to: `GESCHWINDIGKEIT_DIGITAL` → set to `aktiv`
4. Alternatively in **HU_MGU**: `SPEEDOMETER_DIGITAL` → `enabled`
5. Code the module

## Applies To

| Chassis | Module | Notes |
|---------|--------|-------|
| G20 / G21 | KOMBI | Works on all cluster types |
| G30 / G31 | KOMBI | Pre-LCI and LCI |
| G05 / G06 / G07 | KOMBI | All variants |
| G80 / G82 | KOMBI | Already enabled on some M models |
| G70 | KOMBI | Confirmed working |

## Tips

- This is a great first coding change to verify your setup is working
- Completely reversible — just set back to deaktiv
- Does not affect warranty in any meaningful way
- Some Live Cockpit Professional clusters already have this enabled from factory
