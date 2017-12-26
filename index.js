// Project Requirements
const fs = require('fs');
// Basic Components
const CPU = require('./cpu');
const MEM = require('./memory');
const ROM = require('./memory');
// Component connections
const BUS = require('./bus');
const CONTROLLER = require('./controller');


//This is, essentially, the motherboard.

// The bus connects the different things so, create the bus.
// The bus is just a set of lines to either be written to or read from
// Every other compontent connected to it just needs to know the bus is there.
const main_bus = new BUS();

// The bios contains the basic input/output system that determins what to do and how to do it.
// It sits inbetween most system and processes except those which are privilaged.
const bios = new MEM();