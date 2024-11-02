import type { Dispatch } from "react"


const difficultOptions = [
        {
          id: 'facil',
          value: .00,
          label: 'Fácil +0%'
        },
        {
          id: 'medio',
          value: .05,
          label: 'Medio +5%'
        },
        {
          id: 'complejo',
          value: .10,
          label: 'Complejo +10%'
        },
]


type DifficultFormProps = {
    setDifficult: Dispatch<React.SetStateAction<number>>,
    difficult: number
}



export default function DifficultForm({setDifficult, difficult} : DifficultFormProps) {
  return (
<div>
    <h3 className="font-bold text-lg">Complejidad desarrollo</h3>

    <form action="">
        {difficultOptions.map(difficultOption => (
        <div  key={difficultOption.id} className="flex gap-2">
            <label htmlFor={difficultOption.id}>{difficultOption.label}</label>
            <input
                id={difficultOption.id}
                type="radio"
                name="difficult"
                value={difficultOption.value}
                onChange={e => setDifficult(+e.target.value)}
                checked={difficultOption.value === difficult}
            />
        </div>
        ))}

    </form>
</div>
  )
}
