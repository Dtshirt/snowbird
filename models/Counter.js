import mongoose from 'mongoose';

const CounterSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
  },
  { collection: 'counters' }
);

export const Counter =
  mongoose.models.Counter || mongoose.model('Counter', CounterSchema);

export async function nextQuoteSequence(year) {
  const key = `quote:${year}`;
  const result = await Counter.findByIdAndUpdate(
    key,
    { $inc: { seq: 1 } },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  ).lean();
  return result.seq;
}
