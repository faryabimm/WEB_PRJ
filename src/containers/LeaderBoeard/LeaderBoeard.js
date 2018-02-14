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
        rows.push(<tr><th>LeaderBoard</th></tr>)
        rows.push(<tr>{[<td></td>,<td>Username</td>,<td>Score</td>]}</tr>);
        for(var i =0;i<LeaderBoardMembers.length;i++){
            let cells=[];
            cells.push(<td><button className='leaderboard-cells'>{i+1}</button></td>);
            cells.push(<td><button className='leaderboard-cells'>{LeaderBoardMembers[i].Username}</button></td>);
            cells.push(<td><button className='leaderboard-cells'>{LeaderBoardMembers[i].Score}</button></td>);
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