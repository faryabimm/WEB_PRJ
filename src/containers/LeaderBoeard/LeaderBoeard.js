import React from 'react';

function fetchLeaderBoard() {

    return null;

}

class LeaderBoeard extends React.Component{
    render(){
        // const LeaderBoardMembers = fetchLeaderBoard();
        const LeaderBoardMembers = [
            {Username:'ali',Score:34},
            {Username:'reza',Score:13},
            {Username:'hossein',Score:45},
            {Username:'mohammad',Score:2}
        ]
        LeaderBoardMembers.sort(function (a,b) {
            return b.Score-a.Score;
        })
        let rows=[];
        rows.push(<tr>{[<td></td>,<td>Username</td>,<td>Score</td>]}</tr>);
        for(var i =0;i<LeaderBoardMembers.length;i++){
            let cells=[];
            cells.push(<td>{i+1}</td>);
            cells.push(<td>{LeaderBoardMembers[i].Username}</td>);
            cells.push(<td>{LeaderBoardMembers[i].Score}</td>);
            rows.push(<tr>{cells}</tr>);
        }

        return(
            <div>
                <table>
                    {rows}
                </table>
            </div>
        );
    }
}

export default LeaderBoeard;