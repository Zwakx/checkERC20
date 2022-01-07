/**
 * 18160ddd -> totalSupply()
 * 70a08231 -> balanceOf(address)
 * dd62ed3e -> allowance(address,address)
 * a9059cbb -> transfer(address,uint256)
 * 095ea7b3 -> approve(address,uint256)
 * 23b872dd -> transferFrom(address,address,uint256)
 * 313ce567 -> decimals()
 * d505accf -> permit(address,address,uint256,uint256,uint8,bytes32,bytes32)
 */

/**
 * 
 * @param txInput input of the contract
 * @returns boolean if ERC20 or not
 */
export const isERC20 = (txInput: string) => {
    const kezzacERC20 = ["18160ddd", "70a08231", "dd62ed3e", "a9059cbb", "095ea7b3", "23b872dd", "313ce567", "d505accf"]
    return kezzacERC20.every(elt => txInput.includes(elt)); 
}