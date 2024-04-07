import { Line } from '@/components/line'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export const LoginSocialMedias = () => {
  return (
    <main>
      <div className="flex my-5 flex-row items-center gap-2">
        <Line />
        <span className="text-sm font-firasans text-white-700 dark:text-white-400">
          OU
        </span>
        <Line />
      </div>
      <nav className="flex flex-row gap-4 justify-between">
        <Button
          className="w-full flex-1 flex justify-center items-center"
          variant="ouline"
        >
          <Image
            src="/google-logo.svg"
            width={80}
            height={80}
            alt="Login google"
          />
        </Button>
        <Button
          className="w-full flex-1 flex justify-center items-center"
          variant="ouline"
        >
          <Image
            src="/apple-logo.svg"
            width={60}
            height={60}
            alt="Login google"
          />
        </Button>
      </nav>
    </main>
  )
}
