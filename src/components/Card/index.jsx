import './styles.css';

export function Card(props) { //As props são as propriedadas chamadas na hora que o component é chamado e é usando em formaot de objeto
    // {name, time} fazendo destructuring não preciso usar o props.name
    return (
        <div className="card">
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}