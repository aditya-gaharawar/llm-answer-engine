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
          <Button
            variant="link"
            className="h-auto p-0 text-base"
            name="WEBSPACEAI Text"
            onClick={() => {}}
          >
            <ArrowRight size={16} className="mr-2 text-muted-foreground" />
            WEBSPACEAI Text
          </Button>
        </div>
      </div>
    </div>
  )
}
