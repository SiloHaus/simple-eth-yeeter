import { LOCAL_ABI } from '@daohaus/abis';
import OnboarderABI from '../abis/Onboarder.json';
import { createContract } from '@daohaus/tx-builder';
import { ValidNetwork, Keychain } from '@daohaus/keychain-utils';
import { useQuery } from 'react-query';
import { fromWei } from '@daohaus/utils';

type FetchShape = {
  baal?: boolean;
  expiry?: boolean;
  token?: boolean;
  minTribute?: boolean;
  multiply?: boolean;
  received?: boolean;
};

type Member = {
  address: string;
  yeet: string;
};

const fetchOnboarder = async ({
  shamanAddress,
  chainId,
  rpcs,
  fetchShape = {
    baal: true,
    expiry: true,
    token: true,
    minTribute: true,
  },
}: {
  shamanAddress: string;
  chainId: ValidNetwork;
  rpcs?: Keychain;
  fetchShape?: FetchShape;
}) => {
  const shamanContract = createContract({
    address: shamanAddress,
    abi: OnboarderABI,
    chainId,
    rpcs,
  });
  

  try {
    const baal = fetchShape?.baal ? await shamanContract.baal() : null;
    const expiry = fetchShape?.expiry ? await shamanContract.expiry() : null;
    const minTribute = fetchShape?.minTribute ? await shamanContract.minTribute() : null;
    const multiply = fetchShape?.minTribute ? await shamanContract.multiply() : null;

    // ObReceived (index_topic_1 address contributorAddress, uint256 amount, uint256 isShares, address baal, address vault)
    const logs = await shamanContract.queryFilter(
      shamanContract.filters.ObReceived(null, null, null, null, null),
      0
    );
    const received = logs.map((log)=> {
      return {
        address: log.args?.contributorAddress,
        yeet: fromWei(log.args?.amount),
      }
    });
    
    return {
      baal,
      expiry: expiry.toString() as string,
      minTribute,
      multiply,
      received: received as Member[],
    };
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.message as string);
  }
};

export const useOnboarder = ({
  shamanAddress,
  chainId,
  rpcs,
  cacheTime = 1000 * 60 * 20,
  staleTime = 1000 * 60 * 20,
  fetchShape = {
    baal: true,
    expiry: true,
    minTribute: true,
    multiply: true,
    received: true,
  },
}: {
  shamanAddress: string;
  chainId: ValidNetwork;
  rpcs?: Keychain;
  cacheTime?: number;
  staleTime?: number;
  fetchShape?: FetchShape;
}) => {
  
  const { data, error, ...rest } = useQuery(
    'OnboarderShaman',
    () => {
      return fetchOnboarder({
        shamanAddress,
        chainId,
        rpcs,
        fetchShape,
      });
    },
    {
      enabled: !!shamanAddress && !!chainId,
      cacheTime,
      staleTime,
    }
  );

  return {
    shamanData: data,
    error: error as Error,
    ...rest,
  };
};
