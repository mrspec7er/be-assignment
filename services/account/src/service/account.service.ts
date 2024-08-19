import { prisma } from "schema";
import { AccountType } from "schema/generated/client";

const accountService = {
  createAccount,
  getAccountsByUserId,
};

async function createAccount(
  userId: string,
  type: AccountType,
  balance: number
) {
  return prisma.account.create({
    data: {
      type,
      userId,
      balance,
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
