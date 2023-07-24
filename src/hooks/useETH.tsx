import { useQuery } from "react-query";
import { ethers } from "ethers";

import { HAUS_RPC } from "@daohaus/keychain-utils";

import { ValidNetwork, Keychain } from "@daohaus/keychain-utils";

type FetchShape = {
  decimals?: boolean;
  name?: boolean;
  symbol?: boolean;
  balanceOf?: boolean;
};

const fetchBalanceData = async ({
  userAddress,
  chainId,
  rpcs = HAUS_RPC,
  fetchShape,
}: {
  userAddress?: string | null;
  chainId: ValidNetwork;
  provider: any | undefined;
  rpcs?: Keychain;
  fetchShape?: FetchShape;
}) => {

  if (!userAddress) {
    return;
  }

  try {
    const decimals = 18;
    const name = "Ethereum";
    const symbol = "ETH";

    const rpcUrl = rpcs[chainId];

    const ethersProvider = new ethers.providers.JsonRpcProvider(rpcUrl);

    const balance = await ethersProvider?.getBalance(userAddress);   

    const data = {
      decimals,
      name,
      symbol,
      balance: balance ? (balance?.toString() as string) : null,
    };

    return data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.message as string);
  }
};

export const useETH = ({
  userAddress,
  chainId,
  provider,
  rpcs,
  cacheTime = 1000 * 60 * 20,
  staleTime = 1000 * 60 * 20,
  fetchShape = {
    decimals: true,
    name: true,
    symbol: true,
    balanceOf: true,
  },
}: {
  userAddress?: string | null;
  chainId: ValidNetwork;
  provider: any | undefined;
  rpcs?: Keychain;
  cacheTime?: number;
  staleTime?: number;
  fetchShape?: FetchShape;
}) => {
  
  const { data, error, ...rest } = useQuery(
    [`ethBalance`, { userAddress, chainId }],
    () =>
      fetchBalanceData({
        userAddress,
        chainId,
        provider,
        rpcs,
        fetchShape,
      }),
    {
      enabled: !!chainId,
      cacheTime,
      staleTime,
    }
  );
  return { ethData: data, error: error as Error, ...rest };
};
