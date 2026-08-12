---
title: xHP Flashtool
description: Set up xHP Flashtool to flash a supported BMW or MINI transmission control unit, from adapter choice to the first flash.
sidebar:
  order: 5
sources:
  - title: xAutomotive shop and product overview
    url: https://www.xautomotive.com/
  - title: xAutomotive supported cars check
    url: https://www.xautomotive.com/pages/supported-cars
  - title: xAutomotive downloads
    url: https://www.xautomotive.com/pages/download
  - title: xAutomotive shop FAQ
    url: https://www.xautomotive.com/pages/faq
  - title: xHP manual, supported vehicles
    url: https://xautomotive.atlassian.net/wiki/spaces/NW/pages/1720221742
  - title: xHP manual, flash with the xA Ultra Adapter
    url: https://xautomotive.atlassian.net/wiki/spaces/NW/pages/1711898625
  - title: xHP manual, flash with third-party adapters
    url: https://xautomotive.atlassian.net/wiki/spaces/NW/pages/1712062465
  - title: xHP manual, licenses, maps and voucher codes
    url: https://xautomotive.atlassian.net/wiki/spaces/NW/pages/1744764929
  - title: xHP manual, how to use the app
    url: https://xautomotive.atlassian.net/wiki/spaces/NW/pages/1711603845
  - title: xAutomotive manual, the xA Ultra Adapter
    url: https://xautomotive.atlassian.net/wiki/spaces/NW/pages/2094497794
  - title: xHP FAQ, flashing and reliability
    url: https://xautomotive.atlassian.net/wiki/spaces/NW/pages/1704558593
  - title: xHP FAQ, flashing process troubleshooting
    url: https://xautomotive.atlassian.net/wiki/spaces/NW/pages/1704689665
---

xHP Flashtool is a transmission tuning app from xAutomotive. It writes modified software
to the transmission control unit (TCU) of supported BMW, MINI, and Toyota Supra automatics.

## Understand flashing versus coding

Coding, with tools such as BimmerCode, changes settings inside software the car already
runs. The module keeps its original program, and you only switch options it already contains.

Flashing replaces the module's program with a different one. xHP rewrites the TCU itself,
so treat it as a firmware update for your gearbox, not a settings change.

The rest of this site covers coding. This page exists because xHP often comes up in the
same conversations, and the setup differs in ways that matter.

## Check vehicle support

xAutomotive groups xHP support into four product lines: 6-Speed (BMW/MINI),
7-Speed DCT (BMW), 8-Speed (BMW/MINI), and 8-Speed (G-Series/Supra). DCT is a
dual-clutch transmission.

The [supported vehicles page of the xHP manual](https://xautomotive.atlassian.net/wiki/spaces/NW/pages/1720221742)
describes coverage as BMWs with "ZF6HP, ZF8HP, or DCT" transmissions, plus the
"Toyota Supra (J29)". It also lists these MINI and BMW models with Aisin gearboxes:

- MINI F55, F56, and F57 with the 6-speed Aisin
- MINI F60 Countryman with the 6-speed Aisin
- MINI F54 Clubman with the first-generation 8-speed Aisin
- BMW F45, F46, and F48 with the first-generation Aisin

The same page lists what is not supported: other car brands, General Motors (GM)
automatic transmissions, and MINI or Aisin BMW models with a 7-speed DCT or a
second-generation 8-speed Aisin.

The vendor states that not every BMW model is supported. Enter your full vehicle
identification number (VIN) in the
[support checker on the vendor site](https://www.xautomotive.com/pages/supported-cars),
or use the Check Support tool inside the app, before you buy anything.

## Choose an adapter

xHP talks to the car through the on-board diagnostics (OBD) port. The vendor sells its
own adapter and also supports a list of third-party adapters.

The vendor's own adapter is the xA Ultra, a Wi-Fi OBD adapter. The vendor states it
covers BMW E, F, and G series models from 2003 onward, handles the KLINE, DCAN, and
ENET protocols, and also works with apps such as MHD and Bootmod3.

The [third-party adapter page of the xHP manual](https://xautomotive.atlassian.net/wiki/spaces/NW/pages/1712062465)
lists these alternatives:

- DCAN Wi-Fi adapters, including THOR and xHP branded units, for E, F, and G series and the Supra
- BM3 Wi-Fi adapter
- MHD UNI Wi-Fi adapter
- ENET cable and ENET Wi-Fi adapters, for F series
- K+DCAN cable, for E and F series

The manual lists adapter compatibility across Android, iOS, macOS on Apple Silicon,
and Windows 11.

:::caution
The manual notes that DCAN Wi-Fi adapters do not support K-Line cars (Z4 E86, X5 E53,
and X3 E83) and cannot flash the MINI and Aisin BMW models. The manual does not name a
specific third-party adapter for the MINI and Aisin models, so confirm your adapter
choice against the vendor's adapter guide before you buy.
:::

## Install the app

The [downloads page](https://www.xautomotive.com/pages/download) offers the app for
Android through Google Play, for iOS through the App Store, and for Windows as a direct
download. The manual also refers to running xHP on macOS.

The vendor does not state minimum operating system versions. After you install the app,
create an xHP account manually or sign in with Google, Facebook, or Apple.

## Buy and redeem a license

The vendor sells one bundled product, the Flash Combo. It states that flash licenses and
map packs are no longer sold separately.

The Flash Combo includes unlimited flashing on the registered vehicle, an off-the-shelf
(OTS) map pack with stages 1 to 3, and the flash settings features. After purchase you
receive a voucher code by email and redeem it inside the app.

A license binds to one car. The vendor states a redeemed code is "permanently linked" to
your xHP account and your vehicle's VIN, and that products are non-transferable and
non-refundable, though it may approve a one-time transfer to another of your own vehicles
in special cases.

:::note
The vendor's shop FAQ states voucher codes are valid for 12 months after purchase. A
redeemed license stays in your account, so the license itself is a one-time purchase,
not a subscription.
:::

## Prepare the car

The [xA Ultra flash guide](https://xautomotive.atlassian.net/wiki/spaces/NW/pages/1711898625)
sets the vehicle state for a flash: ignition on, engine off, gearbox in Park. Close the
doors, plug in the seatbelt, and switch off the lights and other accessories.

The same guide sets a minimum battery voltage of 11.9 V. For a first flash on a DCAN or
KLINE vehicle it tells you to connect a power supply of about 30 A at 13.8 V to the
engine-bay charging posts, not directly to the battery.

Prepare the phone as well. The vendor's troubleshooting guidance says to turn on flight
mode, disable mobile data and any other Wi-Fi connections, remove battery restrictions
for the xHP app in the phone settings, and make sure no other device connects to the
same adapter.

The troubleshooting page also says to disconnect CAN bus accessories, for example a JB4
or an aftermarket CarPlay unit, before you flash.

## Run the flash

Plug the adapter into the OBD port and join its Wi-Fi network from your phone. In the
app, tap CONNECT NEW CAR so xHP reads the car's data.

Tap FLASH THIS CAR and pick an OTS map or a custom map. The app checks the connection,
downloads the files it needs, and guides you through the flash.

The vendor gives approximate durations: a first install takes about two minutes on E and
F series cars and about eight minutes on G series cars. It lists shorter times for
later flashes on F and G series cars.

Error messages on the dashboard during the flash are normal and disappear when it
completes. The app's map screen also offers Stage 0 and Uninstall options that restore
the stock software.

:::caution
Once the flash starts, do not touch the device, and keep the Wi-Fi link to the adapter
alive. The vendor warns that the flash fails if the connection drops. If a flash fails,
the vendor states you can safely retry it.
:::

## Follow up after the first flash

The vendor recommends a running-in period of 50 to 75 miles after the first flash, with
varied speeds and gentle throttle. Irregular shifting during the first few miles is
normal.

Do not reset the transmission adaptations. The vendor states a reset can cause long-term
issues.

## Sources

- [xAutomotive shop and product overview](https://www.xautomotive.com/)
- [xAutomotive supported cars check](https://www.xautomotive.com/pages/supported-cars)
- [xAutomotive downloads](https://www.xautomotive.com/pages/download)
- [xAutomotive shop FAQ](https://www.xautomotive.com/pages/faq)
- [xHP manual, supported vehicles](https://xautomotive.atlassian.net/wiki/spaces/NW/pages/1720221742)
- [xHP manual, flash with the xA Ultra Adapter](https://xautomotive.atlassian.net/wiki/spaces/NW/pages/1711898625)
- [xHP manual, flash with third-party adapters](https://xautomotive.atlassian.net/wiki/spaces/NW/pages/1712062465)
- [xHP manual, licenses, maps and voucher codes](https://xautomotive.atlassian.net/wiki/spaces/NW/pages/1744764929)
- [xHP manual, how to use the app](https://xautomotive.atlassian.net/wiki/spaces/NW/pages/1711603845)
- [xAutomotive manual, the xA Ultra Adapter](https://xautomotive.atlassian.net/wiki/spaces/NW/pages/2094497794)
- [xHP FAQ, flashing and reliability](https://xautomotive.atlassian.net/wiki/spaces/NW/pages/1704558593)
- [xHP FAQ, flashing process troubleshooting](https://xautomotive.atlassian.net/wiki/spaces/NW/pages/1704689665)
