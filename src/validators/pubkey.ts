import { coerce, instance, string } from "superstruct";
import { PublicKey } from "@nexis/web3";

export const PublicKeyFromString = coerce(
  instance(PublicKey),
  string(),
  (value) => new PublicKey(value)
);
