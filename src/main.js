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
            th("Rating"),
            th("Likes"),
        tr(),
            td("Hammer"),
            td("$100"),
            td("[picture]"),
            td("4.5 Stars"),
            td("1,331"),
        tr(),
            td("Drill"),
            td("$200"),
            td("[picture]"),
            td("4.9 Stars"),
            td("801"),
        tr(),
            td("Screw Driver"),
            td("$12"),
            td("[picture]"),
            td("4.7 Stars"),
            td("233"),
    )
}

van.add(document.body, Table())
