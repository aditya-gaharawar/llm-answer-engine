import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {/* Example messages removed */}
        </div>
      </div>
    </div>
  )
}
