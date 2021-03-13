import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getOriginalGangsterContract } from '../drugs/utils'
import useDrugs from './useDrugs'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const drugs = useDrugs()
  const originalGangsterContract = getOriginalGangsterContract(drugs)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(originalGangsterContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, originalGangsterContract, drugs])

  useEffect(() => {
    if (account && originalGangsterContract && drugs) {
      fetchBalance()
    }
  }, [account, block, originalGangsterContract, setBalance, drugs])

  return balance
}

export default useEarnings
