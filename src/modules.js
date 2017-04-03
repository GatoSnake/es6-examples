{
    console.log(`
      ************** Modules **************

            === Value Export/Import ===
                      `);

    {
        import * as math from "./lib/math";
        console.log("2π = ", math.sum(math.pi, math.pi));
    }
}
