import React from 'react';
import './Grid.css'
import Cell from '../Cell/Cell'

class Grid extends React.Component {
    constructor(props){
        super(props);

        this.data_manager = props.data_manager;
        let targets = [
            [-1,-1,77,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,96,25,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,91],
            [82,19,-1,60,-1,-1,52,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,48,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [42,-1,-1,56,-1,-1,-1,-1,51,-1],
            [-1,-1,3,-1,-1,-1,-1,76,-1,-1],
            [38,-1,-1,6,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,14,-1,-1,-1,-1,31,-1],
        ];

        let rows=[];
        for(let i =0 ; i< 10 ; i++){
            let cells=[];
            for(let j = 0 ; j < 10 ; j++ ){
                if(i%2 === 0)
                    cells.push(<td cellPadding={0} cellSpacing={0}><Cell id={10*i+j+1} num={10*i+j+1} tar={targets[9-i][j]}/></td>)
                else
                    cells.push(<td cellPadding={0} cellSpacing={0}><Cell id={(i+1)*10-j} num={(i+1)*10-j} tar={targets[9-i][j]}/></td>)
            }
            rows.push(<tr cellPadding={0} cellSpacing={0}>{cells}</tr>)
        }
        this.state={
            AllRows:rows.reverse(),
        }
    }
    render(){
        return(
            <div className="grid">
                <table cellPadding='0' cellSpacing='0'>
                    {this.state.AllRows}
                </table>
            </div>
        )

    }
}

export default Grid;