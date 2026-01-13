import { ethers } from "hardhat";

async function main() {
    console.log("Deploying Eduble contract...");

    const Eduble = await ethers.getContractFactory("Eduble");
    const eduble = await Eduble.deploy();

    await eduble.waitForDeployment();

    const address = await eduble.getAddress();
    console.log(`Eduble deployed to: ${address}`);

    // Grant teacher role to deployer for testing
    const [deployer] = await ethers.getSigners();
    const TEACHER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("TEACHER_ROLE"));
    await eduble.grantRole(TEACHER_ROLE, deployer.address);
    console.log(`Granted TEACHER_ROLE to deployer: ${deployer.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
