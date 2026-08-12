---
title: Digital speedometer
description: Enable the numeric speed readout in the board computer display on G20, G21, G80, and G82 instrument clusters with BimmerCode.
sidebar:
  order: 5
verifiedOn: G20, G21, G80 and G22, G23, G26, G82, G83 per BimmerCode's supported vehicle listings; iDrive 8.5 coding limits reported on a 2025 M340i xDrive
sources:
  - title: BMW 3 Series, M3 supported coding options (G20, G21, G80)
    url: https://bimmercode.app/cars/g20/
  - title: BMW 4 Series, M4 supported coding options (G22, G23, G26, G82, G83)
    url: https://bimmercode.app/cars/g22/
  - title: Bimmercode works partially with 2025 G20 LCI 2 with iDrive 8.5, on Bimmerpost
    url: https://g20.bimmerpost.com/forums/showthread/2153295/yes-bimmercode-works-partially-with-2025-g20-lci-2-with-idrive-8-5
  - title: BMW SIB 62 07 19, digital speedometer missing from the instrument cluster after programming
    url: https://static.nhtsa.gov/odi/tsbs/2020/MC-10174025-9999.pdf
---

The digital speedometer is a numeric speed readout in the board computer area of the KOMBI (instrument cluster). It is a coding option on the G20 and G21 3 Series and the G80 M3, listed as "Digital speed in board computer" on [BimmerCode's supported options page for the G20, G21, and G80](https://bimmercode.app/cars/g20/#BC_DIGITAL_V).

The same option, with identical wording, appears on [BimmerCode's supported options page for the G22, G23, G26, G82, and G83](https://bimmercode.app/cars/g22/), which covers the G82 M4. None of the sources checked for this page describe an iDrive menu setting that turns this readout on without coding.

## Know what the option requires

BimmerCode lists the option under "Display options instrument cluster" and states it requires the "Instrument Cluster" KOMBI_CT_RD1 control unit, per [the G20, G21, and G80 options page](https://bimmercode.app/cars/g20/#BC_DIGITAL_V). If BimmerCode identifies your cluster as a different control unit, the listing does not claim the option applies.

G20 owners see two different names for the cluster control unit in coding apps. A poster with a 2025 M340i xDrive lists both DKOMBI4 and KOMBI_CT_RD1 as instrument cluster units, per [the iDrive 8.5 coding thread on Bimmerpost](https://g20.bimmerpost.com/forums/showthread/2153295/yes-bimmercode-works-partially-with-2025-g20-lci-2-with-idrive-8-5).

## Code the option with BimmerCode

:::caution
Back up the module before you change anything. Save the current coding of the instrument cluster from within the app so you can restore it if the cluster misbehaves.
:::

1. Connect BimmerCode and select the "Instrument Cluster" (KOMBI_CT_RD1) control unit, per [the requirement on BimmerCode's options page](https://bimmercode.app/cars/g20/#BC_DIGITAL_V).
2. Set "Digital speed in board computer" to `Active`. BimmerCode lists the values as "Active" and "Not active" on [the same page](https://bimmercode.app/cars/g20/#BC_DIGITAL_V).
3. Code the module.

The readout does not appear on its own. BimmerCode instructs you to press the button in the turn signal lever to step through the board computer displays until the digital speed appears, per [the option description](https://bimmercode.app/cars/g20/#BC_DIGITAL_V).

BimmerCode does not flag the option as an Expert Mode item on either page.

## Code the option with E-Sys

No source checked for this page posts an E-Sys FDL (function data list) walkthrough for this readout from a G20, G21, G80, or G82. This page therefore gives no FDL parameter, value, or CAFD (coded application file) path, because none was verifiable.

The only identifier a checked source attaches to the feature is `BC_DIGITAL_V`, which BimmerCode uses as [the option's anchor on its supported options page](https://bimmercode.app/cars/g20/#BC_DIGITAL_V). BimmerCode presents it as a feature name, not as an FDL path, so do not treat it as one.

## Expect locked cluster coding on iDrive 8.5 cars

:::caution
The following comes from a single forum report and is not confirmed by a second source.
:::

On the G20 LCI (life cycle impulse) 2 with iDrive 8.5, the cluster may be out of reach. Equilibrandt reports that the instrument cluster units DKOMBI4 and KOMBI_CT_RD1 cannot be coded with BimmerCode on a 2025 M340i xDrive, per [the iDrive 8.5 coding thread on Bimmerpost](https://g20.bimmerpost.com/forums/showthread/2153295/yes-bimmercode-works-partially-with-2025-g20-lci-2-with-idrive-8-5).

The same poster relays a coding service's list that marks KOMBI, the head unit, and the DME (engine control module) as "Secure Coded/Locked" on iDrive 8.5, in [a later post in the same thread](https://g20.bimmerpost.com/forums/showthread/2153295/yes-bimmercode-works-partially-with-2025-g20-lci-2-with-idrive-8-5). If your car runs iDrive 8.5, expect this coding to fail until a tool gains access to those modules.

## Do not follow the G01 bulletin

Searches for this feature surface BMW Service Information Bulletin 62 07 19, "Digital speedometer missing from the instrument cluster after programming". Its model table lists only the G01 X3, per [the bulletin text hosted by NHTSA](https://static.nhtsa.gov/odi/tsbs/2020/MC-10174025-9999.pdf).

For the G01, the bulletin's correction is programming with ISTA, BMW's dealership service software, plus a vehicle modification conversion named "conversion to digital speed", which adds option DGSM to the vehicle order. Nothing in the bulletin applies it to the G20, G21, G80, or G82, so do not carry its steps over to these cars.

## Sources

- [BMW 3 Series, M3 supported coding options for the G20, G21, and G80](https://bimmercode.app/cars/g20/)
- [BMW 4 Series, M4 supported coding options for the G22, G23, G26, G82, and G83](https://bimmercode.app/cars/g22/)
- [BimmerCode works partially with a 2025 G20 LCI 2 on iDrive 8.5, on Bimmerpost](https://g20.bimmerpost.com/forums/showthread/2153295/yes-bimmercode-works-partially-with-2025-g20-lci-2-with-idrive-8-5)
- [BMW Service Information Bulletin 62 07 19, hosted by NHTSA](https://static.nhtsa.gov/odi/tsbs/2020/MC-10174025-9999.pdf)
