import './Tile.css';


interface Props{
    image? : string;
    number : number;
}

export default function Tile({image,number}: Props)
{
    if(number % 2 === 0)
    {
        return (<div className='tile black-tile' >
            <div style={{backgroundImage: 'url($(image))'}}></div>
            <img src={image}></img>
            </div>
        );
    }
    else
    {
        return (<div className='tile white-tile'>
            <img src = {image}></img>
             </div>
        );
    }
}