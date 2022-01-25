import { ChainId } from 'crabswap'
import MULTICALL_ABI from './abi.json'
import { multicall as crabMulticall } from '../../crab_address.json'
import { multicall as pangolinMulticall } from '../../pangolin_address.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.PANGOLIN]: pangolinMulticall,
  [ChainId.CRAB]: crabMulticall,
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
