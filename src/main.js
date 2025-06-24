import van from 'vanjs-core'
import './style.css'

const {table, tr, th, div, td} = van.tags


export const Table = () => { 
    return div(
    table(),
        tr(),
            th("Name"),
            th("Price"),
            th("Image"),
        tr(),
            td("Hammer"),
            td("$100"),
            td("[picture]"),
        tr(),
            td("Drill"),
            td("$200"),
            td("[picture]"),
    )
}

van.add(document.body, Table())
