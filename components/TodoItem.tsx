type TodoItemProps = {
    id: String,
    title: String,
    complete: Boolean
}
export default function TodoItem({id, title, complete}: TodoItemProps) {


    return (
        <li className="flex gap-1 items-center">
            <input id={"checkbox-"+id} type="checkbox" className="cursor-pointer peer"/>
            <label htmlFor={"checkbox-"+id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{title}</label>
        </li>
    )
}