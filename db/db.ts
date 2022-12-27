import mongoose from 'mongoose'

const mongoConnection = {
  isConnected: 0,
}

const connect = async () => {
  try {
    if (mongoConnection.isConnected) {
      return
    }

    if (mongoose.connections.length > 0) {
      mongoConnection.isConnected = mongoose.connections[0].readyState

      if (mongoConnection.isConnected === 1) return
      await mongoose.disconnect()
    }

    await mongoose.connect(process.env.MONGO_URL ?? '')
    mongoConnection.isConnected = 1
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(error)
  }
}

const disconnect = async () => {
  if (mongoConnection.isConnected === 0) return
  await mongoose.disconnect()
  mongoConnection.isConnected = 0
  console.log('Disconnected')
}

export const db = {
  disconnect,
  connect,
}
