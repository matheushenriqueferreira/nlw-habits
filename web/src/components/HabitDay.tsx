import * as Popover from '@radix-ui/react-popover';
import { ProgressBar } from './ProgressBar';

/* interface habitDayProps {
  completed: number
} */

export const HabitDay = () => {
  return(
    <Popover.Root>
      <Popover.Trigger className='w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg'>
        <Popover.Portal>
          <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
            <span className='font-semibold text-zinc-400'>segunda-feira</span>
            <span className='mt-1 font-extrabold leading-tight text-3xl'>17-01</span>

            <ProgressBar progress={40} />

            <Popover.Arrow className='fill-zinc-900' width={16} height={8} />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Trigger>
    </Popover.Root>
  )
}
