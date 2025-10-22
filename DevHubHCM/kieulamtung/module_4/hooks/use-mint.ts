"use client";

import { useSignAndExecuteTransaction } from "@mysten/dapp-kit";
import { Transaction } from "@mysten/sui/transactions";

const TOKEN_A_TYPE = process.env.NEXT_PUBLIC_TOKEN_A_TYPE!;
const TOKEN_B_TYPE = process.env.NEXT_PUBLIC_TOKEN_B_TYPE!;
const TREASURY_CAP_A = process.env.NEXT_PUBLIC_TREASURY_CAP_A!;
const TREASURY_CAP_B = process.env.NEXT_PUBLIC_TREASURY_CAP_B!;
const PKG = process.env.NEXT_PUBLIC_PACKAGE_ID!;

// Đổi module & tên hàm theo BOY/GIRL
const BOY_MODULE = "Boy_coin";
const GIRL_MODULE = "Girl_coin";
const FN_MINT_BOY = "mint_token";
const FN_MINT_GIRL = "mint_token";

export function useMint() {
  const { mutateAsync: signAndExecuteTransaction } = useSignAndExecuteTransaction();

  // Mint BOY
  const mintBoyToken = async () => {
    if (!TOKEN_A_TYPE || !TREASURY_CAP_A || !PKG) {
      throw new Error("Missing environment variables");
    }

    const tx = new Transaction();
    tx.setGasBudget(30_000_000);
    tx.moveCall({
      target: `${PKG}::${BOY_MODULE}::${FN_MINT_BOY}`,
      arguments: [tx.object(TREASURY_CAP_A)],
    });

    return signAndExecuteTransaction({ transaction: tx });
  };

  // Mint GIRL
  const mintGirlToken = async () => {
    if (!TOKEN_B_TYPE || !TREASURY_CAP_B || !PKG) {
      throw new Error("Missing environment variables");
    }

    const tx = new Transaction();
    tx.setGasBudget(30_000_000);
    tx.moveCall({
      target: `${PKG}::${GIRL_MODULE}::${FN_MINT_GIRL}`,
      arguments: [tx.object(TREASURY_CAP_B)],
    });

    return signAndExecuteTransaction({ transaction: tx });
  };

  return { mintBoyToken, mintGirlToken };
}
