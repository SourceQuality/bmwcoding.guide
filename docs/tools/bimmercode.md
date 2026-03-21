---
id: bimmercode
title: BimmerCode
sidebar_position: 1
---

# BimmerCode

BimmerCode is the most beginner-friendly BMW coding tool. It runs on iOS and Android and connects to your car through a Bluetooth or Wi-Fi OBD2 adapter.

## What You Need

- **Phone or tablet** running iOS or Android
- **OBD2 adapter** - the Vgate iCar Pro BLE is the most popular pick
- **BimmerCode app** - one-time purchase from the App Store or Google Play

## Supported Vehicles

BimmerCode supports most F and G series BMWs:
- G20, G30, G05, G06, G07, G80, G82 have full support
- G70/G60 (iDrive 8+) have partial support that keeps expanding
- F-series (F30, F10, F15, etc.) have full support

## How to Use

### 1. Connect the Adapter
Plug the OBD2 adapter into the port under the dashboard on the driver's side. Turn the ignition on (engine off is fine).

### 2. Open BimmerCode
Launch the app and tap **Connect**. It will find your adapter and read your car's VIN.

### 3. Read Modules
BimmerCode reads the coding from your car's modules. This also creates a backup, so hang on to it.

### 4. Make Changes
Browse the available options. Everything is presented as simple toggles and dropdowns, no raw hex editing.

### 5. Code
Tap **Code** to write the changes. The module will restart briefly.

## Pros and Cons

| Pros | Cons |
|------|------|
| Very easy to use | Limited to curated options |
| No laptop needed | Can't access all FDL parameters |
| Auto-backup | Expert mode requires a subscription |
| Regularly updated | Newer modules sometimes lag behind E-Sys |

## Tips

- BimmerCode's Expert Mode (subscription) unlocks more parameters, but still fewer than E-Sys
- If a change doesn't show up in BimmerCode, try [E-Sys](/docs/tools/esys)
- You can switch between BimmerCode and E-Sys safely since they modify the same underlying FDL data
- Always read the module before and after coding to make sure your changes took
