---
title: Easy entry and exit
description: Why no verified coding path exists for easy entry and exit on the G20, G21, G80, and G82, and what owners use instead.
sidebar:
  order: 3
sources:
  - title: Activating Easy Entry - Solved! (Bimmerpost G20 forum)
    url: https://g20.bimmerpost.com/forums/showthread.php?t=2110841
  - title: Anyone knows coding for easy entry/exit seat? (Bimmerpost G80 forum)
    url: https://g80.bimmerpost.com/forums/showthread.php?t=1864472
  - title: easy entry seat coding (Bimmerpost G20 forum)
    url: https://g20.bimmerpost.com/forums/showthread.php?t=2058445
---

Easy entry and exit moves the driver's seat to open up space when you get in or out.
On the G20, owners describe it as the seat sliding back or forward on entry or exit,
per [the activation thread on Bimmerpost](https://g20.bimmerpost.com/forums/showthread.php?t=2110841).

This page is short on purpose. No source we found documents a working coding procedure
for this feature on the G20, G21, G80, or G82, and this page does not invent one.

## Understand what this page cannot give you

No thread we reviewed names a module, parameter, or value that enables easy entry on
these chassis. There is no BimmerCode path and no E-Sys FDL (function data list) path
on this page, because no source provides one.

The thread starter of [the activation thread](https://g20.bimmerpost.com/forums/showthread.php?t=2110841),
who drives a 2024 330xi, writes that he found nothing in E-Sys or BimmerCode to
activate easy entry on the G20. A G20 330e owner asked for the parameter in
[a separate thread](https://g20.bimmerpost.com/forums/showthread.php?t=2058445) and
received no answer.

The forum reports for these chassis only discuss seat movement. No source we found
documents coding that moves the steering column on the G20, G21, G80, or G82.

We could not establish any difference between pre-LCI (life cycle impulse) and LCI
cars, because no source distinguishes them for this feature.

## Weigh the aftermarket button kit reports

The only activation method reported for the G20 depends on aftermarket hardware, not
coding. In [the activation thread](https://g20.bimmerpost.com/forums/showthread.php?t=2110841),
the 330xi owner reports that easy entry started working after he installed an
aftermarket M1/M2 button kit. Another poster in the same thread identifies the
kit as a Chinese aftermarket product, not the factory buttons.

With the kit installed, the reported toggle sequence is: open all the doors, then
press unlock on the key fob about ten times until the alarm beeps. One beep means
easy entry turned on, two beeps mean it turned off, per the thread starter. An
M340i xDrive owner in the same thread confirms it worked, and adds that he also had
to open the trunk. His post does not state whether the kit is installed.

Reports in the thread support the hardware dependency. A 2020 M340i xDrive owner
with memory seats, an alarm, and Comfort Access reports no beep and no effect; his
post does not state whether the kit is installed, and other posters in the thread
attribute failures like this to the missing kit.

:::caution
One report in the thread describes breakage. An M440i (G22) owner who states he has
the M1 and M2 buttons reports that keyless entry stopped working after he tried the
sequence, despite trying the sequence many more times afterward. Weigh that risk
before you try this on your car.
:::

## Expect no result on the G80 and G82

A 2022 G80 M3 Competition xDrive owner with an alarm and the M1/M2 buttons reports
that the fob sequence does not work on his car, per
[the activation thread](https://g20.bimmerpost.com/forums/showthread.php?t=2110841).
No poster in either thread reports a working easy entry activation on a G80 or G82,
coded or otherwise.

## Use seat memory positions as a workaround

For the G80, the workaround owners suggest is the seat memory, not coding. In
[the G80 seat thread on Bimmerpost](https://g80.bimmerpost.com/forums/showthread.php?t=1864472),
a poster advises saving memory position 1 with the seat fully back and lowered or
raised for exit, and position 2 as your driving position. Another poster in that thread states
the seat moves on a single button press when the car is stopped.

This workaround requires seats with the memory function. The thread does not state
which seat option the posters have beyond that.

## Back up before you experiment

:::caution
If you go looking for this feature yourself in BimmerCode Expert Mode or E-Sys FDL
coding, back up the module first and export the backup off your phone or laptop. A
wrong value can leave a module unusable, and no source has verified any value for
this feature on these chassis.
:::

## Sources

- [Activating Easy Entry - Solved! (Bimmerpost G20 forum)](https://g20.bimmerpost.com/forums/showthread.php?t=2110841)
- [Anyone knows coding for easy entry/exit seat? (Bimmerpost G80 forum)](https://g80.bimmerpost.com/forums/showthread.php?t=1864472)
- [easy entry seat coding (Bimmerpost G20 forum)](https://g20.bimmerpost.com/forums/showthread.php?t=2058445)
