



/**
 * excluded: Any files/directories to not include in the final module.
 * included: Any files/directories to include in the final module.
 */
module.exports = {
    excluded: ["electron.ts"],
    included: [],
    build: {
        id: "developer.Sample_TS_Module",
        process: "./process/main",
        replace: [
            {
                from: "{EXPORTED_MODULE_ID}",
                to: "%id%", // %arg% will take the arg from the build object
                at: ["./process/main.ts", "./renderer/renderer.ts"]
            },
            {
                from: "{EXPORTED_MODULE_NAME}",
                to: "Sample TS Module",
                at: ["./process/main.ts", "./module-info.json"]
            }
        ]
    }

}