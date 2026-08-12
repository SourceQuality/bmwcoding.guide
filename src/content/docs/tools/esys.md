---
title: E-Sys
description: Set up the E-Sys engineering software, install PSdZData, and make a first ENET connection to the car.
sidebar:
  order: 3
sources:
  - title: What is BMW Esys, a beginner's guide to BMW E-sys coding (obd2tool)
    url: https://www.obd2tool.com/blog/what-is-bmw-esys-a-beginners-guide-to-bmw-e-sys-coding/
  - title: What is BMW Esys, a beginner's guide to BMW E-sys coding (Auto Service knowledge base)
    url: https://help.autosvs.com/kb/what-is-bmw-esys-a-beginners-guide-to-bmw-e-sys-coding/
  - title: How to set up the ENET cable and E-sys for BMW coding (Auto Service knowledge base)
    url: https://help.autosvs.com/kb/how-to-set-up-the-enet-cable-and-e-sys-for-bmw-coding/
  - title: How to set up the ENET cable and E-sys for BMW coding (obd2tool)
    url: https://www.obd2tool.com/blog/how-to-set-up-the-enet-cable-and-e-sys-for-bmw-coding/
  - title: How to set up BMW coding with ENET and E-sys Launcher (Auto Service knowledge base)
    url: https://help.autosvs.com/kb/how-to-set-up-bmw-coding-with-enet-and-e-sys-launcher/
  - title: E-sys, how to set up PSdZData (Auto Service knowledge base)
    url: https://help.autosvs.com/kb/e-sys-how-to-setup-psdzdata/
  - title: A beginner's guide to BMW E-sys coding (OHP Tools)
    url: https://ohptools.com/blogs/news/a-beginners-guide-to-bmw-e-sys-coding
  - title: "TokenMaster's Random Ramblings: E-Sys Launcher PRO"
    url: http://tokenmaster.blogspot.com/2014/12/e-sys-launcher-pro.html
  - title: BMW E-Sys software, read I-Step current from VCM (OBD2All)
    url: https://obd2all.blogspot.com/2016/09/bmw-e-sys-software-read-i-step-current.html
  - title: E-sys and PSdZData matching (BimmerScene forum)
    url: https://www.bimmerscene.com/showthread.php?tid=5456
  - title: F55/F56 MINI coding and programming thread (North American Motoring)
    url: https://www.northamericanmotoring.com/forums/f55-f56-hatch-talk-2014/279326-mini-coding-programming-17.html
  - title: How to connect BMW to E-Sys via ENET cable (F. Club)
    url: https://www.fclubmedia.com/2019/09/how-to-connect-bmw-to-e-sys-via-e-net.html
  - title: packetpilot/bmw-f, BMW F chassis coding notes (GitHub)
    url: https://github.com/packetpilot/bmw-f
  - title: BimmerCode official site
    url: https://bimmercode.app/
---

E-Sys is BMW's development and engineering software for coding and flashing F chassis and newer cars. This page covers setup and the first connection only. It does not document individual coding values.

## Understand what E-Sys is

The obd2tool beginner's guide describes E-Sys as "the BMW development/engineering software for coding and flashing F-Chassis (and up) BMWs". It is a separate thing from ISTA, which the same guide identifies as BMW's dealer service software.

Consumer apps sit at the other end of the spectrum. BimmerCode, for example, markets itself as "coding made simple": a phone or desktop app that talks to the car through a supported OBD (on-board diagnostics) adapter and presents curated options.

E-Sys presents no curated options. It exposes the modules and their raw coding data and assumes you know what you are changing.

The Auto Service beginner's guide states that BMW created E-Sys for internal engineering use, not as a consumer product. This guide does not link to software downloads.

:::caution
The packetpilot F chassis coding notes on GitHub warn bluntly: "srsly though don't brick your car". The same notes flag the "Code Default Values" button and any attempt to code the DME module as ways to do exactly that.
:::

## Gather what you need

The Auto Service and OHP Tools guides list the same core kit:

- A Windows laptop. Both guides describe a machine with "at least Windows 7" and a minimum of 16 GB of free disk space.
- An ENET (Ethernet to OBD) cable. It has an RJ45 network plug for the laptop on one end and a 16 pin OBD connector for the car on the other.
- The E-Sys software itself, plus a token and PIN or a launcher that provides them. See the launcher section below.
- PSdZData, the data package E-Sys reads the car's coding definitions from.

PSdZ stands for "Programmiersystem der Zukunft", programming system of the future, according to the obd2tool beginner's guide. E-Sys cannot work with a car without this data.

PSdZData comes in Lite and Full variants. The Auto Service guides say the Lite version suffices for coding-only work; the Full version is far larger.

:::note
OHP Tools suggests a dedicated laptop for coding. Buy the ENET cable with a shielded connector from a reliable seller; the Auto Service guide warns that cheap unshielded cables invite interference during coding.
:::

## Install E-Sys and PSdZData

Extract the E-Sys archive and run the installer. The Auto Service and obd2tool setup guides both accept the default install path of `C:\EC-Apps\ESG\E-Sys` and set the data path to `C:\Data`.

Extract PSdZData next. Copy the `psdzdata` folder into `C:\Data`, overwriting the empty placeholder folder already there.

Point E-Sys at the data. The Auto Service PSdZData guide says to select the data directory in the E-Sys settings, then restart the program.

Confirm the link worked. After a restart, the same guide says the available vehicle series appear in the E-Sys interface.

:::caution
The install and data paths in this section come from a single vendor's guide family. Your E-Sys version may propose different defaults; the point that matters is that E-Sys must point at the folder holding `psdzdata`.
:::

## Know what a launcher is

Editing individual parameters inside a module is called FDL (function data list) coding. Stock E-Sys expects a token and PIN before it codes: the Auto Service guides list "E-sys software with EST token and pin" among the requirements.

The community works around that with launchers. TokenMaster, author of E-Sys Launcher, writes that the launcher creates a soft token that "will only be usable on your own machine", and describes it as working with an existing E-Sys install "without adding, modifying, or editing anything".

:::caution
BMW does not license E-Sys to the public, and the tokens it expects are not sold to
individuals. This site describes what these tools are, because you will meet them in
every coding thread. It does not tell you where to get them, and it takes no position
on whether using them is lawful where you live.
:::

## Match PSdZData to the car's I-level

The I-level, also called I-Step, is the car's integration level. The OBD2All guide defines it as "a package of firmwares for all your modules" and notes it corresponds to the ISTA/P version last used to program the vehicle.

PSdZData that is older than the car's I-level cannot describe the car's current coding data. Keep your PSdZData at least as new as the car's I-level.

Two communities report the same failure mode from stale data. A coder in the North American Motoring MINI thread reports that on newer I-steps "all the parameters you would normally change to 'code', would appear blank", and the F. Club connection guide says a "Not Found [C012]" error while reading coding data means "update your PSdZData".

E-Sys and PSdZData versions move together. A BimmerScene thread on version matching states: "Newer PSdZData versions require newer E-Sys versions. Do NOT use older version of E-Sys".

:::caution
To check the car's I-level, the OBD2All guide gives this path in E-Sys: open the VCM module, select the VCM Master tab, and click Read under I-Steps. This procedure comes from a single source; confirm it against your E-Sys version before relying on it.
:::

## Connect to the car

Plug the RJ45 end of the ENET cable into the laptop's Ethernet port. Plug the OBD end into the car's OBD port.

Turn on the ignition but do not start the engine. The Auto Service setup guide then has you wait about 60 seconds for the laptop to recognize the connection before launching E-Sys.

In E-Sys, click Connect. Pick the target for your chassis in the TargetSelector list; the F. Club guide says to avoid the entries ending in the word "Direct".

Choose "Connection via VIN", the car's vehicle identification number, and click Connect. Wait for the success message before doing anything else.

Watch both batteries. The Auto Service guide says to start with a fully charged laptop and to keep a battery charger available for the car during extended sessions.

:::caution
The Auto Service guide recommends leaving the laptop's LAN adapter on DHCP rather than a static IP, and disabling Bluetooth and other wireless connections. This comes from a single vendor guide. No source consulted for this page gives a specific static IP configuration, so none is listed here.

The same guide also tells you to switch off your firewall and antivirus for the session. That weakens the machine you are about to connect to your car, so decide for yourself. Turn them back on afterwards.
:::

## Read and back up before you code

Enter Expert Mode and open the Coding screen. The F. Club guide starts every session here.

Read the FA first. The FA ("Fahrzeugauftrag", the vehicle order, per the obd2tool beginner's guide) is the car's option list; click Read in the Vehicle Order box, then save the result to disk.

Read the SVT next. Click Read SVT in the SVT Actual box and save that too; the list it returns shows the car's modules.

Read the coding data for any module you plan to touch. In the F. Club procedure you right click the module and choose Read Coding Data, which loads its CAFD file, the module's CAF (coding application file) data.

Back up everything before changing anything. The Auto Service guide is explicit: create backup files of the car's original settings before you attempt any modification, and keep the saved FA, SVT, and CAFD files somewhere safe.

## Sources

- [What is BMW Esys, a beginner's guide to BMW E-sys coding, obd2tool](https://www.obd2tool.com/blog/what-is-bmw-esys-a-beginners-guide-to-bmw-e-sys-coding/)
- [What is BMW Esys, a beginner's guide to BMW E-sys coding, Auto Service knowledge base](https://help.autosvs.com/kb/what-is-bmw-esys-a-beginners-guide-to-bmw-e-sys-coding/)
- [How to set up the ENET cable and E-sys for BMW coding, Auto Service knowledge base](https://help.autosvs.com/kb/how-to-set-up-the-enet-cable-and-e-sys-for-bmw-coding/)
- [How to set up the ENET cable and E-sys for BMW coding, obd2tool](https://www.obd2tool.com/blog/how-to-set-up-the-enet-cable-and-e-sys-for-bmw-coding/)
- [How to set up BMW coding with ENET and E-sys Launcher, Auto Service knowledge base](https://help.autosvs.com/kb/how-to-set-up-bmw-coding-with-enet-and-e-sys-launcher/)
- [E-sys, how to set up PSdZData, Auto Service knowledge base](https://help.autosvs.com/kb/e-sys-how-to-setup-psdzdata/)
- [A beginner's guide to BMW E-sys coding, OHP Tools](https://ohptools.com/blogs/news/a-beginners-guide-to-bmw-e-sys-coding)
- [E-Sys Launcher PRO announcement, TokenMaster's blog](http://tokenmaster.blogspot.com/2014/12/e-sys-launcher-pro.html)
- [Read I-Step current from VCM in E-Sys, OBD2All](https://obd2all.blogspot.com/2016/09/bmw-e-sys-software-read-i-step-current.html)
- [E-sys and PSdZData matching thread, BimmerScene](https://www.bimmerscene.com/showthread.php?tid=5456)
- [F55/F56 MINI coding and programming thread, North American Motoring](https://www.northamericanmotoring.com/forums/f55-f56-hatch-talk-2014/279326-mini-coding-programming-17.html)
- [How to connect BMW to E-Sys via ENET cable, F. Club](https://www.fclubmedia.com/2019/09/how-to-connect-bmw-to-e-sys-via-e-net.html)
- [BMW F chassis coding notes, packetpilot on GitHub](https://github.com/packetpilot/bmw-f)
- [BimmerCode official site](https://bimmercode.app/)
