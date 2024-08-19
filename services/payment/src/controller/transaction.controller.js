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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_service_1 = __importDefault(require("../service/transaction.service"));
const response_1 = __importDefault(require("../utility/response"));
const paymentController = {
    sendTransaction,
    withdrawTransaction,
};
function sendTransaction(req, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.user;
        const { accountId, amount, toAddress } = req.body;
        try {
            const transaction = yield transaction_service_1.default.sendTransaction(user.id, {
                accountId,
                amount,
                toAddress,
            });
            return response_1.default.querySuccessResponse(reply, transaction);
        }
        catch (err) {
            return response_1.default.badRequestResponse(reply, err.message);
        }
    });
}
function withdrawTransaction(req, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.user;
        const { accountId, amount } = req.body;
        try {
            const transaction = yield transaction_service_1.default.withdrawTransaction(user.id, {
                accountId,
                amount,
            });
            return response_1.default.querySuccessResponse(reply, transaction);
        }
        catch (err) {
            return response_1.default.badRequestResponse(reply, err.message);
        }
    });
}
exports.default = paymentController;
