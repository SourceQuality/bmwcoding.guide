---
title: Anti-dazzle high beam
description: Restore the glare-free high beam assistant on the G20 3 Series and G80/G82 M3/M4 with BimmerCode or E-Sys, using values reported by forum posters.
sidebar:
  order: 1
verifiedOn: M340xi and 2020 M340i xDrive (G20), 2021 M4 on the 03/21 software (G8x), 2023 G80. Posters state model years only where shown; build years are not inferred from post dates.
sources:
  - title: Anti-dazzle coding on Laser? on the G20 forum, page 15
    url: https://g20.bimmerpost.com/forums/showthread.php?t=1610992&page=15
  - title: Anti-dazzle coding on Laser? on the G20 forum
    url: https://g20.bimmerpost.com/forums/showthread.php?t=1610992
  - title: BimmerCode thread on the G80/G82 forum, moproblems' cheat sheet
    url: https://www.bimmerpost.com/forums/showthread.php?p=27650517
  - title: Antidazzle coding! on the G80/G82 forum
    url: https://g80.bimmerpost.com/forums/showthread.php?t=1982472
  - title: anti dazzle? on the G20 forum
    url: https://g20.bimmerpost.com/forums/showthread/1988056/anti-dazzle
  - title: BMW anti-dazzle headlights article by MTri Upgrade
    url: https://mtriupgrade.com/blogs/blog/bmw-anti-dazzle-headlights-what-it-is-and-how-to-activate-it
---

Anti-dazzle high beam, also called glare-free or selective high beam, keeps your high
beams on and masks other vehicles out of the beam. North American cars ship with the
feature "decoded by default", as bimleaf puts it in
[a G20 forum thread on anti-dazzle](https://g20.bimmerpost.com/forums/showthread/1988056/anti-dazzle).

Decoded means disabled. When US order paperwork lists "Decoding for no-dazzle hgh bm"
under standard equipment, that line means the function is turned off, per Almaretto in
[the G20 thread on anti-dazzle coding with laser lights](https://g20.bimmerpost.com/forums/showthread.php?t=1610992&page=15).

In the same G20 anti-dazzle thread, tomz17 (a 2020 M340xi with laser lights, recoded
with E-Sys) describes how it works: each headlight swivels on its gimbal to steer the
high beam around other cars, and shuts off individual high beams when it cannot,
per [his post on the G20 forum](https://g20.bimmerpost.com/forums/showthread/1988056/anti-dazzle).
He contrasts this with the stock US behavior, which shuts off all high beams the moment
another car is detected.

## Check the hardware

Coding the feature requires the "552 or 5AZ" option, that is adaptive or laser
headlights, as kubax86 writes in
[the G20 anti-dazzle coding thread](https://g20.bimmerpost.com/forums/showthread.php?t=1610992&page=15).
He posts in a G20 thread but lists a G82 as his car, and his wording names no chassis,
so read it as a general statement rather than a G20-specific one.

The vendor MTri Upgrade states the feature needs adaptive LED or laser headlights plus
a KAFAS2 or KAFAS4 front camera, per
[its anti-dazzle headlights article](https://mtriupgrade.com/blogs/blog/bmw-anti-dazzle-headlights-what-it-is-and-how-to-activate-it).

## Choose a coding route

Two routes exist: BimmerCode expert mode, or E-Sys. In a thread started by the owner
of a 2023 G80, Rayien reports that BimmerCode delivers "95% of the results" compared
with remote coding, with "slightly less defined tunneling", per
[the Antidazzle coding! thread on the G80 forum](https://g80.bimmerpost.com/forums/showthread.php?t=1982472).

Nkr15 explains the gap in the same thread: E-Sys reaches the KAFAS front camera module,
which helps with beam tunneling and which BimmerCode cannot access, per
[the same G80 thread](https://g80.bimmerpost.com/forums/showthread.php?t=1982472).

The sources disagree on whether BimmerCode works at all. Almaretto states it is "not
possible on Bimmercode" because the app lacks access to FLM and KAFAS, while
dantwaddell reports one week later that on his G20 the front lighting module (FLM)
items appear inside the Body Domain Controller (BDC) section of BimmerCode, and that he
coded the feature with BimmerCode alone; both posts are in
[the G20 anti-dazzle coding thread, page 15](https://g20.bimmerpost.com/forums/showthread.php?t=1610992&page=15).

## Code with BimmerCode

dantwaddell coded anti-dazzle on an M340xi (North America) using only BimmerCode,
per [his post on the G20 forum](https://g20.bimmerpost.com/forums/showthread.php?t=1610992&page=15).
He reports that basic functionality needs two changes in the BDC section, each from the
US value to the European (ECE) value.

Every value in this table comes from
[dantwaddell's post in the G20 anti-dazzle coding thread](https://g20.bimmerpost.com/forums/showthread.php?t=1610992&page=15):

| Parameter | US value | ECE value |
| --- | --- | --- |
| `C_HBA_DIM_ENA` | disable [00] | enable [01] |
| `C_HBA_GFHB_ENA` | disable [00] | enable [01] |

dantwaddell then lists a longer set that improves performance, which he credits to
siegester earlier in the thread. Every value in this table also comes from
[dantwaddell's post](https://g20.bimmerpost.com/forums/showthread.php?t=1610992&page=15),
and it repeats the two basic parameters:

| Parameter | US value | ECE value |
| --- | --- | --- |
| `C_AFS_ECO_LEVEL_3_ENA` | disable [00] | enable [01] |
| `C_AFS_ENA` | disable [00] | enable [01] |
| `C_BLC_PRE_ENA` | disable [00] | enable [01] |
| `C_CLC_CURV_V2` | US [3C] | ECE [23] |
| `C_CLC_CURV_V3` | US [46] | ECE [28] |
| `C_CLC_EXT_ENA` | disable [00] | enable_roundabout [01] |
| `C_HBA_DIM_ENA` | disable [00] | enable [01] |
| `C_HBA_GFHBA_ENA_V_HI` | 55km/h [37] | standard [3C] |
| `C_HBA_GFHB_ENA` | disable [00] | enable [01] |
| `LUT_AFS_CODRV_HOR` | Laser_US/G007_US | standard/init |
| `LUT_AFS_DRV_HOR` | Laser_US | F040_G005_AHL/G015_G020_Laser |
| `LUT_FLC_FORWARDLIGHTING_Y` | no_AFS [00 00 14] | AFS [00 00 00] |

His one deviation: he set `C_HBA_GFHBA_ENA_V_HI` to the lowest available speed, which
he recalls as 47 kph, and confirmed his high beams then engage at about 30 mph. He also
warns that the system does not fully engage at low speed or under street lighting, so
test somewhere genuinely dark.

For the G8x, moproblems posted a matching cheat sheet for a 2021 M4 on the 03/21
software update, in
[the BimmerCode thread on the G80/G82 forum](https://www.bimmerpost.com/forums/showthread.php?p=27650517).
He places the parameters under the BDC module in expert mode, in four groups named
LaMaster 1 through 4 and identified by LA1, LA2, and LA3.

Every value in this table comes from
[moproblems' post on the G80/G82 forum](https://www.bimmerpost.com/forums/showthread.php?p=27650517),
written exactly as he formatted it:

| Group | Parameter | New value |
| --- | --- | --- |
| LA1 | `C_BLC_PRE_ENA` | 1 |
| LA1 | `LUT_FLC_FORWARDLIGHTING_Y` | AFS |
| LA2 | `C_AFS_ECO_LEVEL_3_ENA` | 01 |
| LA2 | `C_AFS_ENA` | 01 |
| LA3 | `LUT_AFS_CODRV_HOR` | standard/init |
| LA3 | `LUT_AFS_DRV_HOR` | F040_G005_AHL... |
| LA3 | `C_CLC_CURV_V2` | 23 |
| LA3 | `C_CLC_CURV_V3` | 28 |
| LA3 | `C_CLC_EXT_ENA` | 01 |
| LA3 | `C_HBA_DIM_ENA` | 01 |
| LA3 | `C_HBA_GFHBA_ENA_V_HI` | 3C |
| LA3 | `C_HBA_GFHB_ENA` | 01 |

moproblems truncated `LUT_AFS_DRV_HOR` with an ellipsis in his post. dantwaddell's G20
table above gives the full value he used, `F040_G005_AHL/G015_G020_Laser`.

:::caution
Export your [BimmerCode](/tools/bimmercode/) backups before you change anything, so
you can restore the module's original values. moproblems opens his cheat sheet with a
warning to code at your own risk, and notes the app sometimes drops out of diagnostic
mode while you search for these parameters, per
[his post](https://www.bimmerpost.com/forums/showthread.php?p=27650517).
:::

## Code with E-Sys

### Remove the vehicle order code

tomz17 states that to do it correctly you have to remove the vehicle order (VO) code
"S5AP Decoding anti-glare high-beam assistant", which to his knowledge only
[E-Sys](/tools/esys/) can do, per
[his post in the G20 anti-dazzle thread](https://g20.bimmerpost.com/forums/showthread/1988056/anti-dazzle).
He adds that VO coding alone applies euro-spec settings, some of which are mildly
incorrect for North America, so expect some tuning afterwards.

### Code the function data

Liquid_Ice coded anti-dazzle on a 2020 M340i xDrive: VO coding first, then function
data (FDL) coding in KAFAS4 and BDC_BODY3 using siegester's cheat codes, per
[his post in the G20 anti-dazzle coding thread](https://g20.bimmerpost.com/forums/showthread.php?t=1610992&page=15).
He used E-Sys 3.38.2, LauncherPro 5.2.0, and PSdZData_Lite_v4.37.42.

He passes on advice he received from shawnsheridan: run plain E-Sys with no launcher
for VO coding, and use a launcher only for FDL coding. Almaretto adds in the same
thread that Launcher Pro has outdated mapping and recommends
[BimmerUtility](/tools/bimmerutility/) for FDL coding instead.

:::caution
Back up the module before you code it, and keep the backup off the car. homerjay
corrupted his BDC_BODY3 coding on a US-spec 330i with laser lights (integration level
03/2021.50, E-Sys 3.40.2, Launcher Pro 5.1, PSdzDATA 4.36.71) and lost his exterior
lights and turn signals until the original coding application file (CAFD) was injected
back, per
[his posts in the G20 anti-dazzle coding thread](https://g20.bimmerpost.com/forums/showthread.php?t=1610992&page=15).
tomz17 reports the same failure and fixed it by injecting the default CAFD with plain
E-Sys, then redoing the FDL coding.
:::

### Code the camera module

moproblems lists four further codings in the lane assist camera, which he names
KAFAS04, that BimmerCode cannot reach, per
[his post on the G80/G82 forum](https://www.bimmerpost.com/forums/showthread.php?p=27650517).
He says they are supposed to make the automatic dimming less aggressive and the beam
tunnel tighter.

Every value in this table comes from
[moproblems' post](https://www.bimmerpost.com/forums/showthread.php?p=27650517):

| Parameter | New value |
| --- | --- |
| `C_FLA_COUNTRY_WITH_MULTIPLE_REFLECTORS` | 01 |
| `C_FLA_US_SENSITIVITY_MODE` | 00 |
| `C_FLA_BS_ENTER_THRESH` | 03 |
| `C_FLA_BS_EXIT_THRESH` | 02 |

:::caution
moproblems states in the same post that he has not tested these four camera values on
a G8x at all. No other post in the sources confirms them, so treat them as unverified.
:::

## Check LCI and G21 coverage

LCI (life cycle impulse, BMW's mid-cycle facelift) coverage is unconfirmed in the
forum sources. Every tested report above is a pre-LCI build: G20 cars from 2019
through 2022, a 2021 M4, and a 2023 G80.

MTri Upgrade lists G20, G80, G82, and G83 as compatible "including 2023-2026 LCI", per
[its anti-dazzle headlights article](https://mtriupgrade.com/blogs/blog/bmw-anti-dazzle-headlights-what-it-is-and-how-to-activate-it).

:::caution
The LCI claim comes from that one vendor article. No forum post in the sources reports
coding anti-dazzle on an LCI build, so this page cannot confirm the procedure or the
parameter names on LCI cars.
:::

No source found for this page names the G21 touring specifically. The tested reports
cover sedans, and the vendor's compatibility list does not include the G21 either.

## Expect this behavior on the road

One poster in the G80 thread reports the feature "only activates over 40mph", per
[the Antidazzle coding! thread](https://g80.bimmerpost.com/forums/showthread.php?t=1982472).
dantwaddell reached activation at about 30 mph on his G20 after lowering
`C_HBA_GFHBA_ENA_V_HI`, per
[his post on the G20 forum](https://g20.bimmerpost.com/forums/showthread.php?t=1610992&page=15).

Liquid_Ice reports the high beams still switch off sometimes, but stay on far more
often than the stock US behavior, per
[his post in the same thread](https://g20.bimmerpost.com/forums/showthread.php?t=1610992&page=15).

## Weigh the legal position

BMW disables the function in many markets, especially North America, because of local
regulations, per
[the MTri Upgrade article](https://mtriupgrade.com/blogs/blog/bmw-anti-dazzle-headlights-what-it-is-and-how-to-activate-it).
tomz17 likewise notes the feature is not available in North America and that VO coding
applies euro-spec settings, per
[his post in the G20 anti-dazzle thread](https://g20.bimmerpost.com/forums/showthread/1988056/anti-dazzle).
The sources do not go further than that, and neither does this page.

## Sources

- [Anti-dazzle coding on Laser? on the G20 forum, page 15](https://g20.bimmerpost.com/forums/showthread.php?t=1610992&page=15)
- [Anti-dazzle coding on Laser? on the G20 forum](https://g20.bimmerpost.com/forums/showthread.php?t=1610992)
- [BimmerCode thread on the G80/G82 forum, moproblems' cheat sheet](https://www.bimmerpost.com/forums/showthread.php?p=27650517)
- [Antidazzle coding! on the G80/G82 forum](https://g80.bimmerpost.com/forums/showthread.php?t=1982472)
- [anti dazzle? on the G20 forum](https://g20.bimmerpost.com/forums/showthread/1988056/anti-dazzle)
- [BMW anti-dazzle headlights article by MTri Upgrade](https://mtriupgrade.com/blogs/blog/bmw-anti-dazzle-headlights-what-it-is-and-how-to-activate-it)
