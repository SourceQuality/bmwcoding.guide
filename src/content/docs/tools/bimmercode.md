---
title: BimmerCode
description: Install BimmerCode, choose a supported OBD adapter, and connect the app to your BMW, MINI, or Toyota Supra.
sidebar:
  order: 1
sources:
  - title: BimmerCode quick start guide
    url: https://bimmercode.app/manual/
  - title: BimmerCode supported adapters
    url: https://bimmercode.app/adapters/
  - title: BimmerCode frequently asked questions
    url: https://bimmercode.app/faq/
  - title: BimmerCode supported vehicles
    url: https://bimmercode.app/vehicles/
  - title: BimmerCode home page
    url: https://bimmercode.app/
---

BimmerCode is an app that codes BMW, MINI, and Toyota Supra vehicles through the
on-board diagnostics (OBD) port. This page covers setup and connection only. It does
not cover individual coding options.

Everything below comes from the vendor's own documentation, linked in the
[sources](#sources) section.

## Check vehicle support

Open the [BimmerCode supported vehicles list](https://bimmercode.app/vehicles/) and
select your manufacturer and model. The list shows whether your vehicle is supported,
which coding options exist for it, and which adapters work with it.

The vendor's FAQ states that BimmerCode supports nearly all BMW and MINI vehicles built
in or after 2005, plus the Toyota Supra. The vehicle list also includes a BMW Motorrad
category.

## Choose an adapter

You need one of the adapters on the
[BimmerCode supported adapters list](https://bimmercode.app/adapters/). The list is
grouped by platform (iOS, Android, desktop), and each entry names the vehicle series it
supports.

The vendor does not mark any single adapter as recommended. One adapter, the OBDLink CX
Bluetooth, carries the label "Made for BimmerCode".

Adapters the vendor lists for all series on both iOS and Android include the UniCarScan
UCSI-2100 Bluetooth, OBDLink CX Bluetooth, OBDLink MX+ Bluetooth, OBDLink SX, and
OBDLink EX. An ENET cable is listed for F, G, and I series vehicles.

:::caution
Not every supported adapter works with every vehicle, per the vendor's FAQ. Check your
exact vehicle on the supported vehicles list before you buy an adapter.
:::

## Install the app

BimmerCode runs on iOS, Android, Windows, and macOS. The quick start guide states it
needs iOS 13 or higher or Android 6.0 or higher; the vendor's download page states
Windows 10 or higher and macOS 12 or higher for the desktop versions.

Install the app from the App Store, Google Play, or the downloads on the
[BimmerCode home page](https://bimmercode.app/). The full version is a one-time
purchase per platform: a license bought on iOS does not transfer to Android or desktop.

One license covers multiple devices on the same platform. To restore a purchase, use
"Restore purchases" with your original Apple ID on iOS, or sign in with your original
Google account on Android.

## Prepare the car

Turn on the ignition but do not start the engine. On G series vehicles, the quick start
guide says to press the start button three times without pressing the brake or clutch
pedal.

Put an automatic transmission in P and engage the parking brake. Switch off electrical
consumers such as lights, heating, and ventilation.

Disconnect any third-party hardware wired to the Controller Area Network (CAN) bus, for
example piggyback tuning modules or cameras. Return the head unit to its factory state
and remove aftermarket CarPlay boxes.

:::note
The vendor's FAQ recommends coding with the engine off and the ignition on.
:::

## Connect over Bluetooth

Plug the adapter into the OBD port in the driver side footwell. Close any other app
that uses the adapter.

On iOS, enable flight mode, then turn Bluetooth on and Wi-Fi off. Do not pair the
adapter in the system settings unless its manufacturer requires it; the guide names the
OBDLink MX+ as one that pairs per its manufacturer's instructions.

On Android, pair the adapter in the system Bluetooth settings first. Then enable flight
mode, turn Bluetooth on and Wi-Fi off, and remove other active Bluetooth connections.

On both platforms, disable CarPlay and disconnect the phone from iDrive. Keep the phone
close to the adapter.

In the BimmerCode settings, select your adapter type. Tap "Connect" and grant the
Bluetooth permission when the app asks for it.

## Connect over Wi-Fi

Plug the adapter into the OBD port and close any other app that uses it. Enable flight
mode, then turn Bluetooth off and Wi-Fi on.

In the system Wi-Fi settings, join the adapter's network, `<ADAPTER_NETWORK>`, named
in the adapter's documentation. Keep the phone close to the adapter.

In the BimmerCode settings, select your adapter type. Tap "Connect" and, on iOS, allow
local network access.

:::note
ENET cables need an Ethernet adapter for your phone or computer, and the network setup
differs by platform and Android version. Follow the steps for your platform in the
[BimmerCode quick start guide](https://bimmercode.app/manual/).
:::

## Read the car in the app

After the adapter connects, select your vehicle type from the list and tap "Connect".
The app identifies the control units in the car and shows the supported ones.

The app creates a backup automatically when it reads a control unit. Export your
backups, because the vendor warns that they are lost if you delete the app.

## Open Expert Mode

Basic mode covers the popular coding options and is what the vendor expects most users
to need. Expert Mode is intended for experienced users with special knowledge of
coding.

To open it, connect to the car, select a control unit, and tap "Expert mode". For
safety reasons, the vendor does not offer Expert Mode on control units that contain
safety-related functions.

:::caution
The vendor states that incorrect use of Expert Mode can cause serious issues, up to
problems that need a control unit reflash to fix, and that it provides no support for
Expert Mode. Use it at your own risk.
:::

## Fix connection problems

If the app cannot connect, unplug the adapter and restart your phone. Confirm flight
mode is on and disconnect all other Bluetooth connections, then try again.

Check that the adapter's LEDs light up in the OBD port. If they stay dark, the adapter
or the port may be faulty.

Keep the adapter firmware current. OBDLink adapters update through the OBDLink app. If
the problem persists, lock the car for 15 minutes before the next attempt, or send a
support request from the app settings.

## Sources

- [BimmerCode quick start guide](https://bimmercode.app/manual/)
- [BimmerCode supported adapters](https://bimmercode.app/adapters/)
- [BimmerCode frequently asked questions](https://bimmercode.app/faq/)
- [BimmerCode supported vehicles](https://bimmercode.app/vehicles/)
- [BimmerCode home page](https://bimmercode.app/)
