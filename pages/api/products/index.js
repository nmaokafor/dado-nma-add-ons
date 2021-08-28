import { addOnProducts } from "../../../library/addOnProducts";

export default function handler(req, res) {
  res.status(200).json(addOnProducts);
}
