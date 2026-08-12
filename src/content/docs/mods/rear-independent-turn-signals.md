---
title: Rear independent turn signals
description: Separate the rear turn signals from the brake lights on the G20, G21, G80, and G82 by coding the body domain controller to the ECE lighting configuration.
sidebar:
  order: 2
verifiedOn: 2022 330e (G20) on 03/2022.30, 2023 G20 LCI, 2023 M4 Competition xDrive (G82), 2024 G80 M3 Competition xDrive
sources:
  - title: Rear lights (Bimmerpost G20 forum, page 7)
    url: https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/7
  - title: Rear lights (Bimmerpost G20 forum, page 12)
    url: https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/12
  - title: BimmerCode EU Turn Signals Coding for G20 LCI for US Models (Bimmerpost)
    url: https://g20.bimmerpost.com/forums/showthread/2110421/bimmercode-eu-turn-signals-coding-for-g20-lci-for-us-models
  - title: Has anyone successfully code the Euro turn signals for the A/M CSL Tail Lights (Bimmerpost G80 forum)
    url: https://g80.bimmerpost.com/forums/showthread.php?t=2057776
---

North American G20, G21, G80, and G82 tail lights flash the red brake light as the turn signal. This guide collects the coding that switches the rear lighting to the ECE (Economic Commission for Europe) configuration, where the turn signal works on its own.

## Understand the two configurations

On United States models the brake light and turn signal work together, while European models run the turn signal separately, as the opening post describes in [the G80 forum thread on Euro turn signals](https://g80.bimmerpost.com/forums/showthread.php?t=2057776). The coding below tells the body domain controller (BDC) to drive the rear lamps the way an ECE market car does.

The values live in the BDC's coding data file, called a CAFD, under function block 5665. Posters found them by comparing their car's data against the ECE version of the same car, for example cheapengineer's comparison of the stock and ECE `5665` data for his 2022 330e in [the Rear lights thread](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/7).

:::caution
Back up the BDC before you change anything. Save the module's coding data in your coding app so you can restore it if the result breaks other lighting.

TTG reports that restoring a BimmerCode backup should return the settings, per [his reply in the Rear lights thread](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/12).
:::

## Code a G20 or G21 with E-Sys

cheapengineer reduced the full United States to ECE difference to seven values on his 2022 330e at software level 03/2022.30, per [his post in the Rear lights thread](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/7). He changed these in function block 5665 of the BDC through FDL coding, that is, editing individual function values in the module.

| Parameter | Stock value | New value |
| --- | --- | --- |
| `LIC_FEATURE_14` | `enable` | `disable` |
| `LIC_NIVEAU_OVVERRIDE_INDEX` | `G20_US_code2` | `G22_ECE_code2` |
| `LIC_NIVEAU_OVVERRIDE_DATA_0` | `G20_US_code2` | `G20_ECE_code1` |
| `LIC_LOG_LAMP_2_PHYS_LAMP_INDEX` | `G20_US_code1` | `G20_ECE_code1` |
| `LIC_LOG_LAMP_2_PHYS_LAMP_DATA` | `G20_US_code1` | `G20_ECE_code1` |
| `LIC_VERSION_DATA` | `wert_131…` | `wert_711…` |
| `LIC_EDGE_CUTTER_RULE_ASSIGNMENT` | `G20_US_code` | `G20_ECE_code` |

Another poster in the same thread confirmed the set but chose `G20_ECE_code1` for `LIC_NIVEAU_OVVERRIDE_INDEX` instead of the `G22` value, per [SourceQuality's reply](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/7). cheapengineer answered that the two `LIC_NIVEAU` parameters may relate to lamp brightness and might not matter for the split.

Note the spelling. Posts in the thread write the same parameters several ways, for example `LIC_NIVEAU_OVERRIDE_INDEX` with one V in an earlier list by larrylam646 and `LICVERSIONDATA` without underscores in BimmerCode.

This page reproduces each source's spelling as written.

### Set the LIC_VERSION_DATA bytes

The `wert_711…` entry is a long byte string and it differs between cars. moproblems, whose forum profile lists a 2021 M4, posted this string in [the Rear lights thread](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/7):

```
71,14,09,02,08,44,06,4F,00,0A,14,02,B4,C8,02,F0,0F,3E,D4,2C,27,32,03,03,07,02,28,78,3F,EF,16,0C,04,0A,27,0F,77
```

cheapengineer replied that his own bytes differ, per [the same page of the thread](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/7):

```
71,14,09,67,08,44,0B,4F,00,0A,14,02,B4,C8,02,F0,0F,3E,D4,2C,27,32,03,03,07,02,28,78,3F,EF,16,0C,04,0A,27,0F,77
```

:::caution
Do not copy either string blindly. larrylam646 states the byte values may depend on model and CAFD version, citing `CAFD5665_13_068_205` on his Canadian 2020 M340iX, per [his reply in the thread](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/7).

siegester reports that values which worked at software level 07.2019 caused hyper flashing, that is, a fast flash rate, after an update to 07.2020, per [his posts in the thread](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/7). He had to generate a new comparison again for 2021.07, so derive the string from your own car's ECE data where you can.
:::

An alternative is VO coding, that is, letting E-Sys calculate the module data from the vehicle order. larrylam646 VO coded `CAFD5665` only, using a modified FA (the vehicle order file) with the typeschlussel changed to the ECE variant, `5U93` to `5U91` on his car, per [his reply in the Rear lights thread](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/7).

He warns the tail lights lose their side markers this way. He also warns you must disable the E-Sys option that writes the modified FA to the car.

## Code a G20 or G21 with BimmerCode

TTG reports that BimmerCode's expert mode on the BDC can change every parameter in cheapengineer's list except the version data, and that without it the signals separate but hyper flash, per [his post in the Rear lights thread](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/7).

He later solved it by scrolling the `LICVERSIONDATA` options for the entry whose bytes match the string above, which was labeled `UNKNOWN 28` on his car, per [his follow-up in the thread](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/12). He notes the `UNKNOWN` number can differ between cars, so match the bytes, not the label.

turbocomppro confirmed this on a 2022 M340i with laser lights, where the option appeared as an `UnknowParam` entry starting with `0x71`, per [his reply in the thread](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/12). He also verified the result by holding the brakes with a turn signal on and checking that the brake lights no longer blink.

EvanL, on a 2023 330e, reports BimmerCode later resolved the unknown labels into named options where you pick your chassis and pre-LCI or LCI variant, LCI meaning life cycle impulse, the mid-cycle facelift, per [his post in the thread](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/12).

## Code an LCI G20 or G21

phani_ch documents the coding for a United States G20 LCI, his being an M340i xDrive, in [a dedicated BimmerCode thread](https://g20.bimmerpost.com/forums/showthread/2110421/bimmercode-eu-turn-signals-coding-for-g20-lci-for-us-models). His parameter list adds two LCI-specific entries, `LIC_LCI_LOG_LAMP_2_PHYS_LAMP_DATA` and `LIC_LCI_LOG_LAMP_2_PHYS_LAMP_INDEX`, alongside the parameters above.

The values are posted as screenshots, so read them from the images in that thread. This page does not transcribe them.

alep85, whose profile lists a 2011 335i and a 2020 M340i xDrive, confirmed the coding also works in BimmerUtility, per [his reply in the LCI thread](https://g20.bimmerpost.com/forums/showthread/2110421/bimmercode-eu-turn-signals-coding-for-g20-lci-for-us-models). The two `LIC_LCI` attributes did not appear in BimmerUtility for him and the result still worked.

k4sh_90 reports the same steps work on his pre-LCI 2020 M340i xDrive, per [his reply in the same thread](https://g20.bimmerpost.com/forums/showthread/2110421/bimmercode-eu-turn-signals-coding-for-g20-lci-for-us-models).

Calvindubois could not make the parameter changes work on a 2023 G20 LCI. He instead used BimmerUtility to change the car configuration type to EU, saved, and VO coded only the rear tail light modules, per [his post in the Rear lights thread](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/12). EvanL confirmed the VO route on his 2023 330e. Calvindubois warns against VO coding the headlight modules the same way, which threw errors on his car.

:::caution
Interior lighting can stop working after this coding. A poster whose profile lists a 2026 BMW M3, chassis not stated in the post, reports the signals worked but all interior lighting failed until he reverted, per [his reply in the LCI thread](https://g20.bimmerpost.com/forums/showthread/2110421/bimmercode-eu-turn-signals-coding-for-g20-lci-for-us-models).

2doer hit the same symptom on a 2021 G22, outside this page's scope, and fixed it by setting `LIC_LOG_LAMP_2_PHYS_LAMP_INDEX` and `LIC_LOG_LAMP_2_PHYS_LAMP_DATA` to `G20_G21_G28_G80_ECE_code1`, per [his reply in the same thread](https://g20.bimmerpost.com/forums/showthread/2110421/bimmercode-eu-turn-signals-coding-for-g20-lci-for-us-models).

EvanL also reports a dealer software flash removed his coding and the BimmerCode options had changed when he tried to redo it, per [his post in the Rear lights thread](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/12).
:::

## Convert a G80

No poster in the sources publishes a G80 value set. Treat the G80 as coding-by-comparison, not copy-and-paste.

biggripper completed the conversion on a 2024 G80 M3 Competition xDrive using GTS-style tail lights with built-in amber signals and rear fog LEDs, a Euro light switch, and the wiring instructions larrylam646 posted earlier in the thread, per [his post in the Rear lights thread](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/12). The coding itself was done remotely by another member, kubax86, and the values are not published.

biggripper states he had to convert the rear signals to amber and enable a rear fog light to register the United States specification car in England. If you import a car, check your market's registration rules before you rely on coding alone.

A reply in [the G80 forum thread](https://g80.bimmerpost.com/forums/showthread.php?t=2057776) states the coding process is similar to the G20, but that the inner tail light can need extra wiring or replacement because the United States tail light and turn signal share the same LED. Hyura writes that the G20 and G80 have separate rear wiring while the G82 runs brake and turn signal on a single wire, per [his G82 writeup](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/12).

## Convert a G82

:::caution
This procedure comes from a single poster, and it changes the vehicle type code in the vehicle order. Do not attempt it without a full backup and a way to recover the BDC.
:::

Hyura converted a United States 2023 M4 Competition xDrive using a set of aftermarket GTS tail lights, and documents the whole job in [his post in the Rear lights thread](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/12). Because the G82 carries brake and turn on one wire, he had to run new wires to the BDC board in the passenger footwell.

His parts list: about 120 feet of wire, twelve connector pins with part number `61138369696`, and a Euro light switch with rear fog button, part number `61319461141` or `61319461142`. He used 18 AWG wire, and another poster, Encanto, replied that the specified 0.75 mm² wire is 20 AWG and that 18 AWG is too big for the pins.

He lists these connections, with left meaning driver side:

```
RIGHT OUTER LIGHT (PIN 4) -> BDC A58*5B (PIN 19)
RIGHT INNER (PIN 4) -> BDC A258*3B (PIN 50)
RIGHT INNER (PIN 1) -> BDC A258*5B (PIN 20)
LEFT INNER (PIN 4) -> BDC A258*3B (PIN 38)
LEFT INNER (PIN 1) -> BDC A258*5B (PIN 12) (right hand drive fog lights)
LEFT OUTER (PIN 4) -> BDC A258*5B (PIN 11)
```

For the coding, Hyura changed his vehicle type code from `43AZ` to `41AZ`, which he identifies as LHD EUROPE, then coded `BDC_BODY3`, using E-Sys and BimmerUtility. He first tried the BimmerCode parameter route from the G20 posts and got hyper flashing with dead inner signals, so he treats the type code change as the working path.

In a later reply he states that on the G22 and G82 the BimmerCode route does not need the `LIC_EDGE_CUTTER_RULE_ASSIGNMENT` change from `G20_US_code` to `G20_ECE_code`, per [the same thread page](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/12).

## Know what is not established

- No public FDL value set for the G80 appears in the sources. The one documented G80 conversion was coded privately.
- No source distinguishes pre-LCI from LCI behavior on the G80 or G82.
- The LCI G20 parameter values exist only as screenshots in [phani_ch's thread](https://g20.bimmerpost.com/forums/showthread/2110421/bimmercode-eu-turn-signals-coding-for-g20-lci-for-us-models).
- There is no universal `LIC_VERSION_DATA` byte string. Every source that states one also reports it varies by car, CAFD version, or software level.

## Sources

- [Rear lights thread, page 7, on Bimmerpost](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/7)
- [Rear lights thread, page 12, on Bimmerpost](https://g20.bimmerpost.com/forums/showthread/1662914/rear-lights/page/12)
- [BimmerCode EU turn signals coding for the G20 LCI on United States models, on Bimmerpost](https://g20.bimmerpost.com/forums/showthread/2110421/bimmercode-eu-turn-signals-coding-for-g20-lci-for-us-models)
- [Euro turn signals for the A/M CSL tail lights, on the Bimmerpost G80 forum](https://g80.bimmerpost.com/forums/showthread.php?t=2057776)
