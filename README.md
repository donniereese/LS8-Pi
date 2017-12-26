# LS8

An 8 bit CPU and system emulator.

## About

The goal of the LS8 is to simulate, with a relative accuracy, the components, operation and
experience of an 8-bit micro-style computer. It started as a basic CPU emulator for a project
at Lambda School. The goal is to slowly expand the emulator to immiate more accurately the
differnet aspects of the CPU, Memory, Storage and I/O devices.

## Goals

The CPU is a complicated thing and has many differnet implementations wit different use cases.
The main goal is to reproduce the workings of a CPU with my current level of knowledge and
slowly itterate the complexity as I learn more, not to completely replicate any specific
architexture or any speific device or experience.

That said, I want to try and implement it without taking too many shortcuts. The emulator needs
to not only replicate the workins of the CPU, but how the CPU interacts with the BUS and other
peripherals. The Memory needs to interact with the BUS instead of speaking directly to the CPU.
The Storage device needs to interact with the BUS and replicate the relative speeds and workings.
A big goal will be some sort of device output designed to work with the system and not just
calling console.log. Keyboard input is partially implemented but also needs to interact with the
BUS.

## Components

### CPU

Registers
