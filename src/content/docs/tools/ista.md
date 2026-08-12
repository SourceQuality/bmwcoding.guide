---
title: ISTA
description: What BMW's workshop diagnostic software does, how BMW licenses it to independent operators, and what hardware and PC setup it requires.
sidebar:
  order: 4
sources:
  - title: BMW Group Technical Information System (TIS) Website User Guide
    url: https://bmwtechinfo.bmwgroup.com/tisUI/assets/site_information.pdf
  - title: BMW Group Techinfo Websites User Guide
    url: https://bmwtechinfo.bmwgroup.com/tisUI/assets/system_requirements.pdf
  - title: "Price list, Aftersales Online System"
    url: https://aos.bmwgroup.com/price-list
  - title: BMW Online Service System for independent workshops (API)
    url: https://www.dealer-pc.com/independent/oss
  - title: Using the BMW dealer diagnostics system ISTA (Technical Topics)
    url: https://techtopics.co.uk/using-the-bmw-dealer-diagnostics-system-ista-genuine/
  - title: How to install and set up BMW ISTA (AE Tools knowledgebase)
    url: https://knowledgebase.aetools.us/how-to-install-and-set-up-bmw-ista-complete-installation-guide-for-independent-operators
---

The Integrated Service Technical Application (ISTA) is BMW's own workshop software for
vehicle diagnosis and programming. BMW dealers use it, and BMW licenses it to
independent workshops through its aftersales portals.

This page covers what ISTA is and how you obtain it from BMW. Copies that circulate
outside BMW's portals are unlicensed, and this guide does not cover them.

## Understand what ISTA does

BMW's Technical Information System (TIS) user guide lists what ISTA provides: fault
code diagnosis, test plans, repair instructions for the E30 and newer, technical data,
wiring diagrams, and P code lookup. ISTA has integrated programming for F series and
G series cars, and BMW instructs operators to use it to program all F series, G series,
and newer vehicles.

A second application, ISTA/P, reprograms control modules on all BMW E series and
MINI R series vehicles.

ISTA for independent operators starts from BMW's Aftersales Online System (AOS)
portal. You install a client and programming data on your PC, then launch the
application from the portal.

## Compare ISTA with coding apps

Consumer apps such as BimmerCode change individual option settings through the
on-board diagnostics (OBD) port. ISTA is a different kind of tool: BMW documents it
for guided fault finding, test plans, and control module programming in a workshop.

BMW attaches conditions to its use. The ISTA start page states that the workshop
system is for unmodified BMW and MINI cars, that vocational training as a motor
mechanic is necessary, and that the listed special tools are mandatory.

## Get a license from BMW

In the United States and Canada, you subscribe through BMW's TIS website at
[bmwtechinfo.bmwgroup.com](https://bmwtechinfo.bmwgroup.com). MINI and Rolls-Royce
information lives on separate sites, and each site needs its own account and
subscription.

BMW terminates accounts created with falsified location information.

Everywhere else, you register at
[aos.bmwgroup.com](https://aos.bmwgroup.com/), the AOS portal itself.

API International, a BMW workshop tool vendor rather than BMW itself, states that TIS
subscriptions come in 24 hour, 30 day, and 1 year terms. Treat those terms as a vendor's
account, not BMW's own published pricing. BMW's user guide states that subscription
payments go through PayPal.

BMW publishes its rates on the
[AOS price list page](https://aos.bmwgroup.com/price-list), which is part of the
portal application and does not display outside it. None of the public pages verified
for this guide state a figure, so this site does not quote one.

A diagnostic or programming session that is already running does not end when your
subscription time lapses. BMW's guide states the session continues until it completes
or you terminate it.

:::caution
Technical Topics, a UK independent's write-up of genuine ISTA access, reports that an
AOS account is free of charge to register in Europe. No second source confirms this.
:::

## Choose a vehicle interface

BMW's requirements list two vehicle communication interfaces. The first is the
Integrated Communication Optical Module (ICOM), specifically the ICOM Next, which BMW
recommends.

The second is a pass-through tool compatible with SAE J2534, for example from Drew
Technologies or I+ME ACTIA.

The ICOM connects to your computer over a LAN cable. The ICOM A unit plugs into the
OBD connector, and the ICOM B and ICOM C variants attach to it for the MOST port and
the round 20 pin connector on older vehicles.

A J2534 pass-through tool connects over USB. BMW forbids a wireless or Bluetooth link
between the tool and the PC and warns that a momentary interruption can cause
irreparable damage to control units.

The ENET cable, an Ethernet to OBD adapter used with consumer coding tools, does not
appear in BMW's interface requirements. That absence is not a statement that it fails,
and no source checked for this page says either way.

On counterfeit hardware, which is a separate matter from the ENET cable, Technical
Topics advises: "Do not be tempted to buy a non-genuine BMW ISTA interface from an
unauthorised outlet."

:::caution
BMW states that vehicles cannot be programmed without an external power supply
connected, and that a battery charger is not the same as a vehicle power supply.

Programming failures or module damage can occur without stable power. BMW service
bulletin B04 23 10 lists the approved chargers.
:::

## Meet the system requirements

BMW's TIS user guide states the following requirements for the AOS applications,
including ISTA.

Operating system and runtimes:

- Microsoft Windows 10 or Windows 11, Professional or Enterprise, 64 bit
- Java 32 bit with Java Runtime Environment (JRE) 7 or higher
- Microsoft .NET Framework 4.7.2 or higher
- Visual C++ Redistributable (x64)
- The latest version of the Google Chrome browser for the portal

Hardware:

- A processor with 2 cores at 2.1 GHz, 4 cores at 1.8 GHz, or 8 or more cores at
  1.5 GHz
- At least 4 GB of memory
- At least 250 GB of free space on drive C:
- A screen resolution of at least 1280x1024
- At least USB 2.0

Network:

- Internet access with at least 4 Mbps download and 400 Kbps upload bandwidth
- A LAN cable at 100 Mbps to the vehicle interface for diagnosis, and per
  programming session
- A recommended maximum latency of 100 ms to the AOS server in Munich
- An IP address that does not change during the session

## Install and start ISTA

Register and subscribe on the portal for your region. Then open the ISTA page inside
the portal.

Download the ISTA client installation file and the ISTA programming data from that
page. Install the client first, then the programming data, and only then use the Start
link to open ISTA.

Connect the ICOM to the workshop network first, then to the vehicle's OBD connector.
BMW says to switch on the ignition before you connect the ICOM.

:::note
BMW's guide notes that the PC can take up to 15 minutes to detect an ICOM. Connect
the ICOM right after the PC boots, then start AOS.
:::

## Sources

- [BMW Group Technical Information System (TIS) Website User Guide](https://bmwtechinfo.bmwgroup.com/tisUI/assets/site_information.pdf)
- [BMW Group Techinfo Websites User Guide](https://bmwtechinfo.bmwgroup.com/tisUI/assets/system_requirements.pdf)
- [Price list on the Aftersales Online System](https://aos.bmwgroup.com/price-list)
- [BMW Online Service System for independent workshops at API](https://www.dealer-pc.com/independent/oss)
- [Using the BMW dealer diagnostics system ISTA at Technical Topics](https://techtopics.co.uk/using-the-bmw-dealer-diagnostics-system-ista-genuine/)
- [How to install and set up BMW ISTA in the AE Tools knowledgebase](https://knowledgebase.aetools.us/how-to-install-and-set-up-bmw-ista-complete-installation-guide-for-independent-operators)
