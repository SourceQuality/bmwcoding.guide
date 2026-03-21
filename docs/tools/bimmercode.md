---
id: bimmercode
title: BimmerCode
sidebar_position: 1
---

# BimmerCode

BimmerCode is the most beginner-friendly BMW coding tool. It runs on iOS and Android and connects via a Bluetooth or Wi-Fi OBD2 adapter.

## What You Need

- **Phone/tablet:** iOS or Android
- **OBD2 adapter:** [Vgate iCar Pro BLE](https://www.vgate.com) (Bluetooth LE) is the most popular choice
- **BimmerCode app:** Available on App Store / Google Play (one-time purchase per platform)

## Supported Vehicles

BimmerCode supports most F and G series BMWs:
- G20, G30, G05, G06, G07, G80, G82 — full support
- G70/G60 (iDrive 8+) — partial and expanding support
- F-series (F30, F10, F15, etc.) — full support

## How to Use

### 1. Connect the Adapter
Plug the OBD2 adapter into the port under the dashboard (driver's side footwell). Turn the ignition on (engine off is fine).

### 2. Open BimmerCode
Launch the app and tap **Connect**. It will discover your adapter and read your vehicle's VIN.

### 3. Read Modules
BimmerCode reads the coding from your car's modules. This also creates a **backup** — keep it.

### 4. Make Changes
Browse the available options. BimmerCode presents them as simple toggles and dropdowns — no raw hex editing.

### 5. Code
Tap **Code** to write the changes. The module will restart briefly.

## Pros & Cons

| Pros | Cons |
|------|------|
| Very easy to use | Limited to curated options |
| No laptop needed | Cannot access all FDL parameters |
| Auto-backup | Subscription for expert mode |
| Regularly updated | Some newer modules lag behind E-Sys |

## Tips

- BimmerCode's **Expert Mode** (subscription) unlocks more parameters but still fewer than E-Sys
- If a change doesn't appear in BimmerCode, it may still be possible via [E-Sys](/docs/tools/esys)
- You can switch between BimmerCode and E-Sys safely — they modify the same underlying FDL data
- Always read the module before and after coding to verify changes
