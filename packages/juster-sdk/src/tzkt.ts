import BigNumber from "bignumber.js";


export type TzKTSameContract = {
  address: string,
  balance: BigNumber,
  creator: {
    address: string,
  }
};

const deserializeTzKTSameContract = (rawContract: any): TzKTSameContract => {
  return {
    address: rawContract.address,
    balance: new BigNumber(rawContract.balance),
    creator: {
      address: rawContract.creator.address
    }
  }
};

export const requestSimilarPools = async (
  tzktApiBaseUrl: string,
  referenceAddress: string
): Promise<Array<TzKTSameContract>> => {
  const url = `${tzktApiBaseUrl}v1/contracts/${referenceAddress}/same`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText)
  };

  const jsonResponse = await response.json();
  return jsonResponse.map(
    (contract: any) => deserializeTzKTSameContract(contract)
  );
}

