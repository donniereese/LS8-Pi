/** CLASS BUS
 *  @argument busWidth = {default 8}
 *  *
 *  A communcation bus to pass data on. Resets every clock cycle.
 *
 */
 
 class BUS {
   construction(clock, busWidth = 8) {
     this.clock = clock;
     this.width = busWidth;
     this.data  = null;
   }
   
   read() {
     return this.data;
   }
   
   set(word) {
     if (this.data === null)
       return false;
     
     this.data = word;
     
     return true;
   }
 }
 
 module.exports = BUS;