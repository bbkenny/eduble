import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const EdublModule = buildModule("EdublModule", (m) => {
    const eduble = m.contract("Eduble");

    return { eduble };
});

export default EdublModule;
