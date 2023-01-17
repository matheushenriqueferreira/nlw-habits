import './styles/global.css'

interface habitProps {
  completed: number
}

export const Habit = (props: habitProps) => {
  return(
    <p className={"habit"}>{props.completed}</p>
  )
}
