import s from './card.module.css'

/*export const Card = (props) => {
    return(
        <>
          <h2>{props.name}</h2>
                <img src={props.image} alt={props.name} />
                  <p>{props.species}</p>
        </>
    )
}*/

export const Card = ({image, name, species}) => {
    return(
        <div className={s.backgroud}> 
        <img className={s.cardImage} src={image} alt={name} />
        <h2 className={s.cardTittle}>{name}</h2>
        <p className={s.cardText}>{species}</p>
        </div>
    )
}