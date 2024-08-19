"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("schema/generated/client");
const schema_1 = require("schema");
const transactionService = {
    sendTransaction,
    withdrawTransaction,
};
function sendTransaction(userId, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        return processTransaction(userId, payload, client_1.TransactionType.SEND);
    });
}
function withdrawTransaction(userId, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        return processTransaction(userId, payload, client_1.TransactionType.WITHDRAW);
    });
}
function processTransaction(userId, payload, type) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield schema_1.prisma.$transaction((prisma) => __awaiter(this, void 0, void 0, function* () {
            const account = yield prisma.account.findUnique({
                where: {
                    id: payload.accountId,
                },
            });
            if (!account) {
                throw new Error("Account not found");
            }
            if (type === client_1.TransactionType.WITHDRAW && account.balance < payload.amount) {
                throw new Error("Insufficient balance");
            }
            const newBalance = account.balance - payload.amount;
            const updatedAccount = yield prisma.account.update({
                where: { id: account.id },
                data: { balance: newBalance },
            });
            const transaction = yield prisma.transaction.create({
                data: {
                    userId: userId,
                    accountId: account.id,
                    amount: payload.amount,
                    timestamp: new Date(),
                    toAddress: payload.toAddress || "",
                    status: client_1.TransactionStatus.COMPLETED,
                    transactionType: type,
                },
            });
            return { account: updatedAccount, transaction };
        }));
    });
}
exports.default = transactionService;
