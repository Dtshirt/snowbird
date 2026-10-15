import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME || 'snowbird';

if (!MONGODB_URI) {
  // Avoid throwing at import time so pages can render without env vars locally.
  // We'll throw at connection time instead.
  // eslint-disable-next-line no-console
  console.warn('[mongodb] MONGODB_URI is not set. Set it before submitting quotes.');
}

let cached = global.__snowbirdMongoose;

if (!cached) {
  cached = global.__snowbirdMongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not configured');
  }

  if (!cached.promise) {
    const opts = {
      dbName: MONGODB_DB_NAME,
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000,
      maxPoolSize: 10
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((m) => m)
      .catch((err) => {
        cached.promise = null;
        throw err;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
