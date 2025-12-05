import s from './infomodal.module.css'

const infomodal = ({data, close}) => {
    return(
        <div className={s.wrapInfo}>
            <button onClick={close}>❌</button>
            <div>
                <img src={data.img} alt={data.name} />
                <h2><strong>name: </strong>{data.name}</h2>
                <p><strong>status: </strong>{data.status}</p>
                <p><strong>origin: </strong>{data.origin.name}</p>
                <p><strong>species: </strong>{data.species}</p>
                <p><strong>gener: </strong>{data.gener}</p>
                <p><strong>location: </strong>{data.location.name}</p>
                <p><strong>created: </strong> {new Date(data.created).toLocaleString("pt-BR",{
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric"}
                )}</p>
            </div>
        </div>
    )
}

export default infomodal    