import { TransactionType, TransactionStatus } from "schema/generated/client";
import { prisma } from "schema";

const transactionService = {
  sendTransaction,
  withdrawTransaction,
};

interface TransactionPayload {
  amount: number;
  accountId: string;
  toAddress?: string;
}

async function sendTransaction(userId: string, payload: TransactionPayload) {
  return processTransaction(userId, payload, TransactionType.SEND);
}

async function withdrawTransaction(
  userId: string,
  payload: TransactionPayload
) {
  return processTransaction(userId, payload, TransactionType.WITHDRAW);
}

async function processTransaction(
  userId: string,
  payload: TransactionPayload,
  type: TransactionType
) {
  return await prisma.$transaction(async (prisma) => {
    const account = await prisma.account.findUnique({
      where: {
        id: payload.accountId,
      },
    });
    if (!account) {
      throw new Error("Account not found");
    }

    if (type === TransactionType.WITHDRAW && account.balance < payload.amount) {
      throw new Error("Insufficient balance");
    }

    const newBalance = account.balance - payload.amount;

    const updatedAccount = await prisma.account.update({
      where: { id: account.id },
      data: { balance: newBalance },
    });

    const transaction = await prisma.transaction.create({
      data: {
        userId: userId,
        accountId: account.id,
        amount: payload.amount,
        timestamp: new Date(),
        toAddress: payload.toAddress || "",
        status: TransactionStatus.COMPLETED,
        transactionType: type,
      },
    });

    return { account: updatedAccount, transaction };
  });
}

export default transactionService;
