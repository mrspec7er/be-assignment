import { prisma } from "schema";
import { AccountType } from "schema/generated/client";

const accountService = {
  createAccount,
  getAccountsByUserId,
};

async function createAccount(type: AccountType, userId: string) {
  return prisma.account.create({
    data: {
      type: type,
      userId: userId,
      balance: 0,
    },
  });
}

async function getAccountsByUserId(userId: string) {
  return prisma.account.findMany({
    where: { userId },
    include: {
      paymentHistories: true,
    },
  });
}

export default accountService;
