import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import CenteredWrapper from '~/components/centered-wrapper';

class OverviewPage extends Component {
    render() {
        const { tournaments } = this.props;

        return (
            <CenteredWrapper>
                <h1>Registered tournaments</h1>
                {!tournaments.length &&
                    <p>No registered tournaments yet</p>
                }
                {tournaments.length > 0 &&
                    <List>
                        {tournaments.map((tournament, index) =>
                            <ListItem
                                key={index}
                                primaryText={tournament.title}
                                rightIcon={<DeleteIcon />}
                            />,
                        )}
                    </List>
                }
                <RaisedButton label="New tournament" primary />
            </CenteredWrapper>
        );
    }
}

OverviewPage.propTypes = {
    tournaments: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
        }),
    ),
};

const mapStateToProps = state => ({
    tournaments: state.tournaments.tournaments,
});

export default connect(mapStateToProps)(OverviewPage);
