import React, { PropTypes } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';

const ResultsTable = (props) => {
    const {
        loading,
        players,
    } = props;

    return (
        <div>
            {loading &&
                <CircularProgress />
            }
            {!loading &&
                <Table>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            <TableHeaderColumn>Rank</TableHeaderColumn>
                            <TableHeaderColumn>Player</TableHeaderColumn>
                            <TableHeaderColumn>Results</TableHeaderColumn>
                            <TableHeaderColumn>Score</TableHeaderColumn>
                            <TableHeaderColumn>Monrad-2</TableHeaderColumn>
                            <TableHeaderColumn>Monrad-1</TableHeaderColumn>
                            <TableHeaderColumn>Monrad</TableHeaderColumn>
                            <TableHeaderColumn>Berger</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {players.map((player, idx) => (
                            <TableRow>
                                <TableRowColumn>{`${idx + 1}.`}</TableRowColumn>
                                <TableRowColumn>{player.name}</TableRowColumn>
                                <TableRowColumn>{player.roundResults}</TableRowColumn>
                                <TableRowColumn>{player.score}</TableRowColumn>
                                <TableRowColumn>{player.monrad2}</TableRowColumn>
                                <TableRowColumn>{player.monrad1}</TableRowColumn>
                                <TableRowColumn>{player.monrad}</TableRowColumn>
                                <TableRowColumn>{player.berger}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            }
        </div>
    );
};

ResultsTable.propTypes = {
    loading: PropTypes.bool.isRequired,
    players: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            roundResults: PropTypes.string,
            score: PropTypes.number,
            monrad2: PropTypes.number,
            monrad1: PropTypes.number,
            monrad: PropTypes.number,
            berger: PropTypes.number,
        }),
    ).isRequired,
};

export default ResultsTable;
