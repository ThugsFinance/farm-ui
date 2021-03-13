import {useCallback} from 'react'

import useDrugs from './useDrugs'
import {useWallet} from 'use-wallet'

import {enterStaking, getOriginalGangsterContract} from '../drugs/utils'

const useEnter = () => {
  const {account} = useWallet()
  const drugs = useDrugs()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enterStaking(
        getOriginalGangsterContract(drugs),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, drugs],
  )

  return {onEnter: handle}
}

export default useEnter
