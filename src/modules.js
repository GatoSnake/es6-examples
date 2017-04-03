import * as math from "./lib/math";
import { sum, pi } from "./lib/math";
{
    console.log(`
      ************** Modules **************

           === Value Export/Import ===
                      `);

    console.log("2π = ", math.sum(math.pi, math.pi));
    console.log("2π = ", sum(pi, pi));

}
