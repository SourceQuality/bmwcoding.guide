---
id: ece-tail-lights
title: ECE Tail Light Coding (NA to Euro)
sidebar_position: 4
---

# ECE Tail Light Coding (NA to Euro)

On North American BMWs, the brake lights double as turn signals. When you signal, the brake light LEDs flash red. European (ECE) cars keep the brake lights and turn signals separate, so the brakes stay lit while the signal flashes independently.

This guide covers how to code your NA-spec G-series BMW for ECE tail light behavior using your existing tail lights.

## What Changes

**Before (NA/US spec):**
- Brake LEDs flash when the turn signal is on
- Red-only turn signals
- During emergency braking with hazards, only the small third brake light stays solid

**After (ECE-coded):**
- Turn signals run independently from the brake lights
- Brake lights stay solid while a separate section flashes for the signals
- Brake force display works across all lights on hard braking

## What You Need

- **BimmerCode** with Expert Mode and a compatible OBD2 adapter
- OR **E-Sys** with a launcher, ENET cable, and up-to-date PSdZData
- OR **BimmerUtility** with an ENET cable (best option for LCI cars)

## Coding by Model

:::caution
The exact parameter values (hex data, UNKNOWN numbers, wert values) vary depending on your car's software version and CAFD revision. Do not blindly copy values from someone else's car. Always match the hex pattern described below.
:::

### G20 / G21 (3 Series)

#### Pre-LCI (2019-2022) - BimmerCode Method

This is the most common approach and was figured out by the BimmerPost community over several years.

In **BimmerCode Expert Mode**, select the **BDC** module and change these parameters:

| Parameter | Change To |
|-----------|-----------|
| `LIC_FEATURE_14` | `disable` |
| `LIC_NIVEAU_OVVERRIDE_INDEX` | `G22_ECE_code2` |
| `LIC_NIVEAU_OVVERRIDE_DATA_0` | `G20_ECE_code1` |
| `LIC_LOG_LAMP_2_PHYS_LAMP_INDEX` | `G20_ECE_code1` |
| `LIC_LOG_LAMP_2_PHYS_LAMP_DATA` | `G20_ECE_code1` |
| `LIC_EDGE_CUTTER_RULE_ASSIGNMENT` | `G20_ECE_code` |

After coding those six parameters:
1. Go back into Expert Mode on the BDC
2. Find **`LICVERSIONDATA`** (one word, no underscores)
3. New UNKNOWN values will now appear that weren't there before
4. Select the UNKNOWN value whose hex data starts with **`0x71, 0x14`**
5. Code the module

The exact UNKNOWN number varies by car. For example, one user's was UNKNOWN_28, another's was different. The key is matching the `0x71, 0x14` hex prefix.

:::warning
If you skip the `LICVERSIONDATA` step, you'll get hyper-flashing (rapid blinking). This is the most common mistake.
:::

#### Pre-LCI - E-Sys Method

If you prefer E-Sys, there are two approaches:

**VO coding method (simpler):**
1. Modify the FA by changing the Typeschluessel from US to ECE variant (replace the `3` with `1`, e.g. `5U93` becomes `5U91`, `5U73` becomes `5U71`)
2. VO code **only CAFD5665** in the BDC module. Do NOT VO code the entire BDC, only right-click CAFD5665 and select coding.
3. After coding, revert any driver assistance and headlight parameters that changed as a side effect

**FDL coding method:** Change the same parameters listed in the BimmerCode section above, plus set `LICVERSIONDATA` to the wert value starting with `71,14,...`

#### LCI (2023+)

LCI models have different parameter names. The pre-LCI BimmerCode values won't match.

The most reliable method for LCI is using **BimmerUtility**:
1. Connect via ENET cable
2. Change the car config type to **EU**
3. Save the config
4. VO code **only the rear tail light modules**. Do NOT VO code the headlights, as this causes DRL errors and flashing.

If using BimmerCode on LCI, look for parameters with `LCI` in the name, such as `LIC_LCI_NIVEAU_OVVERRIDE_INDEX` instead of `LIC_NIVEAU_OVVERRIDE_INDEX`. The `0x71, 0x14` hex prefix for `LICVERSIONDATA` still applies, but the full hex string will be different from pre-LCI (LCI values have been reported starting with `71,14,0B,0C,8D...`).

### G22 / G82 (4 Series / M4)

The coding is similar to the G20, with one important difference:

- **Do NOT change `LIC_EDGE_CUTTER_RULE_ASSIGNMENT`** on G22/G82. Changing this parameter causes issues on the 4 Series. Leave it at the stock value.

All other parameters follow the same pattern as the G20.

### G80 (M3)

Same coding as the G20. Most M3 builds share the G20's BDC module and tail light configuration.

### Inner Tail Light Fix

If your outer tail lights respond to the coding but the inner lights still behave like NA spec, there's one more parameter to check:

In BDC Expert Mode, find `VCM_COUNTRY` and change it from `us` (or `usa`) to `ece`. This has been reported to fix inner tail light behavior on cars where the other parameters alone weren't enough.

## Things to Know

- **Software updates can reset your coding.** If the dealer reflashes your BDC, you'll need to redo this.
- **Hex values are specific to your car's CAFD version.** Don't paste someone else's hex string. Match by the `0x71, 0x14` prefix and verify.
- **Side markers will turn off** if you use the ECE typecode VO method, since ECE cars don't have amber side markers.
- **This is fully reversible.** Restore your BimmerCode backup or re-code the parameters back to the US values.

## Why Do This

The main reasons people make this change:
- **Safety.** Amber turn signals are easier to distinguish from brake lights, especially in traffic. NHTSA studies back this up.
- **Compliance.** If you're shipping or driving a US-spec car in Europe or the UK, ECE tail light behavior is required to pass inspection (MOT in the UK, TUV in Germany, etc.).
- **Preference.** A lot of people just think it looks better when the brakes stay solid while the signal flashes.

## Credits

This guide is based on the work of several BimmerPost community members who spent years figuring this out, especially larrylam646, TTG, siegester, cheapengineer, moproblems, Calvindubois, Hyura, and Pickle of the Turk. The original thread lives at [g20.bimmerpost.com](https://g20.bimmerpost.com/forums/showthread.php?t=1662914).
