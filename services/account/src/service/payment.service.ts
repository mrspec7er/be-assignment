import { prisma } from "schema";
import { AccountType } from "schema/generated/client";

const paymentService = {
  getUserTransaction,
  getUserTransactionByAccountId,
};

async function getUserTransaction(userId: string) {
  return prisma.account.findMany({
    where: {
      userId,
    },
    include: {
      transactions: true,
    },
  });
}

async function getUserTransactionByAccountId(accountId: string) {
  return prisma.account.findMany({
    where: {
      id: accountId,
    },
    include: {
      transactions: true,
    },
  });
}

export default paymentService;
