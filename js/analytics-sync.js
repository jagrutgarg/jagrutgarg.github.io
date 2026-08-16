/* Deliberate speed-test fixture: a synchronous, non-deferred script
   loaded in <head> on a few pages to simulate a common real-world
   render-blocking third-party snippet. Do not add async/defer here. */
console.log("sync analytics loaded (test fixture — intentionally render-blocking)");
