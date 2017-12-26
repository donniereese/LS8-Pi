class MEMORY {
    constructor(width = 8, type = "memory", perm = {r: true, w: true}) {
        this.bank = new Array(255);
        this.bank.fill(0b00000000);
        this.write = 
    }

    read(addr) {
        return this.bank[addr];
    }

    write(addr, data) {
        this.bank[addr] = data;
    }
}

module.exports = MEMORY;
