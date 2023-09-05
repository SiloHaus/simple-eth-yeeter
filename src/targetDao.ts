import { ValidNetwork } from "@daohaus/keychain-utils";
import { EthAddress } from "@daohaus/utils";

export const TARGETS: {
    NAME: string;
    DAO_ADDRESS: EthAddress;
    SAFE_ADDRESS: EthAddress;
    SHARE_ADDRESS: EthAddress;
    SHARE_SYMBOL: string;
    LOOT_ADDRESS: EthAddress;
    LOOT_SYMBOL: string;
    SHAMAN_ADDRESS: EthAddress;
    YEET_BANK: string;
    MAX_YEET: string;
    SOFT_CAP: string;
    CHAIN_ID: ValidNetwork;
    STAKE_TOKEN_NAME: string;
    STAKE_TOKEN_SYMBOL: string;
    STAKE_TOKEN_DECIMALS: number;
    STAKE_PAUSED: boolean;
    STAKE_NEXT_START: number;

} = {
    NAME: "SILO DAO",
    DAO_ADDRESS: "0x7551eeb016d0c1c8315611053d30bd90d1a4b09b",
    SAFE_ADDRESS: "0x6ee647cd1512e50cf2938c273657dee076286ec5",
    CHAIN_ID: "0xa",
    SHARE_ADDRESS: "0x15518a4b2d303aefaa3c6b99617ea3956defd142",
    SHARE_SYMBOL: "vSILO",
    LOOT_ADDRESS: "0x36138bb223ffe0c69d99b5affc07800aa3f9e346",
    LOOT_SYMBOL: "SILO",
    STAKE_TOKEN_NAME: "ETH",
    STAKE_TOKEN_SYMBOL: "ETH",
    STAKE_TOKEN_DECIMALS: 18,
    SHAMAN_ADDRESS: "0x029BB5de3fa8BefC5A2fAF7BdF2af7cB2edF9DFB",
    YEET_BANK: "0x36667cba1bac87c8ea85ffb0fb28be81e80adca0",
    MAX_YEET: "300000000000000000000",
    SOFT_CAP: "30000000000000000000",
    STAKE_PAUSED: false,
    STAKE_NEXT_START: 0,
};

export const ABOUTLINKS = {
  discord: "https://discord.gg/QpaXn6CFAN",
  twitter: "https://twitter.com/Silo_Haus/",
  github: "https://github.com/SiloHaus/",
  githubOnboarder: "https://github.com/SiloHaus/simple-eth-yeeter",
  logo_url: "https://media.discordapp.net/attachments/1126954803847770122/1131050067642564639/Silo_Logo_02_Ring.png",
  hero: "https://cdn.discordapp.com/attachments/1126954803847770122/1131080965763125298/SiloHaus_Banner_3-1.png"  
};
