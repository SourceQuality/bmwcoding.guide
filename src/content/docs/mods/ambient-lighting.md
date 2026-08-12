---
title: Ambient lighting
description: Recolor the ambient lighting menu entries on the G20, G21, G80, and G82 with BimmerCode expert mode, using byte locations reported by owners.
sidebar:
  order: 4
verifiedOn: G82 (BimmerCode expert mode); 2023 330i and 2024 M340i xDrive (G20 LCI with iDrive 8)
sources:
  - title: Ambient light coding, 11 different colors [S18A-22-03-545]
    url: https://g20.bimmerpost.com/forums/showthread.php?t=1920746
  - title: The definitive BimmerCode guide for custom ambient lighting
    url: https://g80.bimmerpost.com/forums/showthread.php?t=1922092
  - title: G20 LCI ambient lighting hex codes
    url: https://g20.bimmerpost.com/forums/showthread/2030569/g20-lci-ambient-lighting-hex-codes
  - title: Bimmercode Expert Mode Cheat Sheet
    url: https://g20.bimmerpost.com/forums/showthread/1789488/bimmercode-expert-mode-cheat-sheet
---

This page covers ambient lighting coding on the G20/G21 3 Series and the G80/G82 M3/M4. Every value on it comes from a specific forum post, linked where the value appears.

The main trick is a recolor: you change which colors the existing iDrive menu entries display. Where no verified source exists, this page says so instead of guessing.

## Know what the coding changes

The coding replaces the colors behind the entries already in your iDrive ambient lighting menu. Poster jmg, who coded his G82, explains that each menu entry drives three interior zones: doors and dash, footwell, and a small light near the map light in the ceiling, per [his write-up in the G20 thread on Bimmerpost](https://g20.bimmerpost.com/forums/showthread.php?t=1920746).

You cannot add new entries to the menu. Paul D3, posting in the same G20 thread, states that you have to reuse an existing entry and change the color associated with it, per [the 11 colors thread on Bimmerpost](https://g20.bimmerpost.com/forums/showthread.php?t=1920746).

Coding also cannot add lights the car does not have. Your car needs the ambient lighting option fitted; the coding only recolors zones that already light up.

:::caution
One poster in the G80 thread reports that early cars lack the color-changing light emitting diode in the center cubby in front of the shifter, and that a base G20 has only an amber one there, per [the G80 ambient lighting guide on Bimmerpost](https://g80.bimmerpost.com/forums/showthread.php?t=1922092). This is a single unverified report, and the poster's exact car is not stated.
:::

## Back up before you code

:::caution
Back up the module before you change any value. In the G20 cheat sheet thread, a 2020 330e owner describes coding that left iDrive in an endless reboot loop, after which the affected module no longer appeared in the app and the backup could not be restored, per [the Bimmercode Expert Mode Cheat Sheet thread on Bimmerpost](https://g20.bimmerpost.com/forums/showthread/1789488/bimmercode-expert-mode-cheat-sheet). Export your backups out of the app as well.
:::

jmg also recommends an ENET cable over a wireless on-board diagnostics (OBD) adapter for any expert coding, calling it faster and more stable, per [his write-up on Bimmerpost](https://g20.bimmerpost.com/forums/showthread.php?t=1920746).

## Recolor menu entries with BimmerCode

jmg posted this procedure after coding his G82, and states the process is the same on the G20; the profile name itself covers the G20, G21, G26, G28, and G80, per [his write-up in the G20 thread on Bimmerpost](https://g20.bimmerpost.com/forums/showthread.php?t=1920746). His car ran iDrive 7, and he later marked the method outdated for updated cars (see the next section).

1. Open expert mode in BimmerCode.
2. Select the `BDC_BODY3` electronic control unit (the Body Domain Controller).
3. Select `360A/LIC_LCI_COLOR_LIBRARY_DATA`.
4. Select `360D/LIC_LCI_COLOR_PROFILES_DATA`.
5. Choose `G20G21G26G28G80_Lichpacket_code1`.

Editing the profile as a custom value exposes roughly 110 byte values; the bytes for each menu entry sit among them, per [a reply in the G80 guide thread on Bimmerpost](https://g80.bimmerpost.com/forums/showthread.php?t=1922092). jmg documents the byte positions for the Bronze entry only:

- Bytes `18,19,20`: doors and dash
- Bytes `23,24,25`: footwell
- Bytes `28,29,30`: map light

Write the hexadecimal color you want into those bytes, per [the same write-up on Bimmerpost](https://g20.bimmerpost.com/forums/showthread.php?t=1920746). Other menu entries have their own byte positions, which the source does not list.

### Avoid the FF value

jmg reports a bug: the system does not code `FF` correctly, and using it stops the map light working. Use `FE` instead, so red becomes `FE 00 00` rather than `FF 00 00`, per [his write-up on Bimmerpost](https://g20.bimmerpost.com/forums/showthread.php?t=1920746).

In the G80 thread, MMM.PWR coded a purple of `7C00FF` and found the map light stayed off unless Bronze was selected; jmg's fix was to use `FE` in place of `FF`, per [the G80 guide thread on Bimmerpost](https://g80.bimmerpost.com/forums/showthread.php?t=1922092).

### Reuse white for two-color combinations

In the G80 thread, beachBmmr recoded white to green to build a custom two-color combination. jmg adds that whatever you assign to white applies everywhere white appears, so every "white and" menu combination picks up the new color, per [the G80 guide thread on Bimmerpost](https://g80.bimmerpost.com/forums/showthread.php?t=1922092). beachBmmr does not state his exact car in the thread.

## Recolor menu entries on LCI cars

BMW's life cycle impulse (LCI) facelift cars with iDrive 8 use a different color library. bimmerboy71195, on a 2023 330i with the curved display, reports that the LCI has more colors in a different order, so the byte values differ from the pre-LCI layout, and that BMW removed blue and lilac from the menu, per [the G20 LCI hex codes thread on Bimmerpost](https://g20.bimmerpost.com/forums/showthread/2030569/g20-lci-ambient-lighting-hex-codes).

:::caution
bimmerboy71195 gives the lilac values as `78,3C,FE` but did not know which byte positions to write them to on the LCI. BLK.G20, on a 2023 M340 xDrive, replies that lilac on iDrive 8 does not need expert mode, but posted no codes. Both are single unverified reports in [the same thread on Bimmerpost](https://g20.bimmerpost.com/forums/showthread/2030569/g20-lci-ambient-lighting-hex-codes).
:::

phani_ch, on a 2024 M340 xDrive with iDrive 8, worked out the LCI color library and posted old and new hexadecimal codes with their byte locations as attachments in [the G20 LCI hex codes thread on Bimmerpost](https://g20.bimmerpost.com/forums/showthread/2030569/g20-lci-ambient-lighting-hex-codes). The values live in the attached images, so check them in the thread itself; phani_ch could not confirm whether iDrive 8.5 uses the same library.

## Expect software updates to undo the work

BMW software updates wipe this coding. andy5468, on a UK G20 M340d running 07/20.54 software, keeps a list of every change because each update forces him to recode the car, per [the Bimmercode Expert Mode Cheat Sheet thread on Bimmerpost](https://g20.bimmerpost.com/forums/showthread/1789488/bimmercode-expert-mode-cheat-sheet).

:::caution
Updates can also remove the menus entirely. backslashv reports that the settings changed in update `07/2022.40` and the `G20G21G26G28G80_Lichpacket_code1` profile no longer appeared in BimmerCode, per [the G80 guide thread on Bimmerpost](https://g80.bimmerpost.com/forums/showthread.php?t=1922092). This is a single unverified report, and the poster's exact car is not stated.
:::

jmg edited his G80 guide to warn that an iDrive 7 update made the method outdated, per [the G80 guide thread on Bimmerpost](https://g80.bimmerpost.com/forums/showthread.php?t=1922092). He later confirmed "my tutorial is outdated" after a poster coding a 2021 G22 with BimmerUtility over an ENET cable found the menus missing from `BDC_BODY3`, per [the G20 thread on Bimmerpost](https://g20.bimmerpost.com/forums/showthread.php?t=1920746).

The 11 colors thread title carries BMW reference `S18A-22-03-545`, and Paul D3 suggests the extra colors ship in a BMW software update rather than requiring coding, per [the 11 colors thread on Bimmerpost](https://g20.bimmerpost.com/forums/showthread.php?t=1920746).

## Link colors to driving modes

No source verified for the G20/G21 or G80/G82 gives working coding values that switch the ambient color with the driving mode. Threads discussing it exist, but the reports there could not be confirmed for these chassis, so this page lists no parameters for it.

## Change brightness behavior

No source verified for these chassis gives coding values that change ambient lighting brightness behavior, so this page lists none.

## Code with E-Sys

None of the sources for these chassis gives an E-Sys FDL (function data list) path for this coding, so this page lists none. All verified procedures above use BimmerCode expert mode.

## Sources

- [Ambient light coding, 11 different colors, on Bimmerpost](https://g20.bimmerpost.com/forums/showthread.php?t=1920746)
- [The definitive BimmerCode guide for custom ambient lighting, on Bimmerpost](https://g80.bimmerpost.com/forums/showthread.php?t=1922092)
- [G20 LCI ambient lighting hex codes, on Bimmerpost](https://g20.bimmerpost.com/forums/showthread/2030569/g20-lci-ambient-lighting-hex-codes)
- [BimmerCode expert mode cheat sheet, on Bimmerpost](https://g20.bimmerpost.com/forums/showthread/1789488/bimmercode-expert-mode-cheat-sheet)
