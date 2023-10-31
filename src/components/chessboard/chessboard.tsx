
import "./chessboard.css";
import Tile from "../tiles/Tile";

const horizontalaxis = [ "a", "b","c","d","e","f","g","h" ];
const verticalaxis = [ "1","2","3","4","5","6","7","8"];

interface Piece{
    image : string;
    x:number;
    y:number;
}

const pieces: Piece[] = [];

for(let i=0;i<8;i++)
pieces.push({image:"asset/images/pawn_b.png",x:i,y:6}); 

for(let i=0;i<8;i++)
pieces.push({image:"asset/images/pawn_w.png",x:i,y:1}); 


pieces.push({image:"asset/images/rook_b.png",x:0,y:7}); 
pieces.push({image:"asset/images/rook_b.png",x:7,y:7}); 
pieces.push({image:"asset/images/bishop_b.png",x:2,y:7}); 
pieces.push({image:"asset/images/bishop_b.png",x:5,y:7}); 
pieces.push({image:"asset/images/knight_b.png",x:1,y:7}); 
pieces.push({image:"asset/images/knight_b.png",x:6,y:7}); 
pieces.push({image:"asset/images/queen_b.png",x:3,y:7}); 
pieces.push({image:"asset/images/king_b.png",x:4,y:7}); 

pieces.push({image:"asset/images/rook_w.png",x:0,y:0}); 
pieces.push({image:"asset/images/rook_w.png",x:7,y:0}); 
pieces.push({image:"asset/images/bishop_w.png",x:2,y:0}); 
pieces.push({image:"asset/images/bishop_w.png",x:5,y:0}); 
pieces.push({image:"asset/images/knight_w.png",x:1,y:0}); 
pieces.push({image:"asset/images/knight_w.png",x:6,y:0}); 
pieces.push({image:"asset/images/queen_w.png",x:3,y:0}); 
pieces.push({image:"asset/images/king_w.png",x:4,y:0}); 
export default function Chessboard(){
    let board = [];
    for(let j=verticalaxis.length-1;j>=0;j--)
    {
        for(let i=0;i<horizontalaxis.length;i++)
        {
            const number = j + i ;

            let image = undefined;

            pieces.forEach(p => {
                if(p.x === i && p.y === j)
                {
                    image = p.image;
                }
            });

            board.push(<Tile key={'${j},${i}'} image={image} number={number} />);
           
        }
    }
    
    return <div id="chessboard">
            {board}
    </div>
}