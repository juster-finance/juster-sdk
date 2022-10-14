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
  return fetch(`${tzktApiBaseUrl}v1/contracts/${referenceAddress}/same`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      return response.json().then(jsonResponse => {
        return jsonResponse.map(
          (contract: any) => deserializeTzKTSameContract(contract)
        );
      });
    })
}

