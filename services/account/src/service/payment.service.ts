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
      paymentHistories: true,
    },
  });
}

async function getUserTransactionByAccountId(accountId: string) {
  return prisma.account.findMany({
    where: {
      id: accountId,
    },
    include: {
      paymentHistories: true,
    },
  });
}

export default paymentService;
