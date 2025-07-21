'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Loader2, LogOut, User } from 'lucide-react'

export default function AuthButton() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <Button disabled variant="outline">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </Button>
    )
  }

  if (session) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {session.user?.email}
          </span>
        </div>
        <Button 
          onClick={() => signOut()} 
          variant="destructive" 
          size="sm"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign out
        </Button>
      </div>
    )
  }

  return (
    <Button 
      onClick={() => signIn()} 
      variant="default"
      size="sm"
    >
      Sign in
    </Button>
  )
}