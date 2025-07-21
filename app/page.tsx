import { Chat } from '@/components/chat'
import AuthButton from "./components/AuthButton"

export default function Home() {
  return (
    <div className="min-h-screen p-4 py-8">
      <div className="flex justify-end mb-4">
        <AuthButton />
      </div>
      <Chat />
    </div>
  )
}
