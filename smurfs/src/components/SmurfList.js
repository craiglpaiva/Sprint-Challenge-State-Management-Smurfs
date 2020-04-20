import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurfs from './Smurfs';
import { fetchSmurfs } from '../actions';

const SmurfList = (props) => {
    useEffect(() => {
        props.fetchSmurfs()
    }, []);
    if (props.isFetching) {
        return <h2>Loading Smurfs...</h2>
    }
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.Smurfs.map((smurfs) => (
                <Smurfs key={smurfs.id} smurfs={smurfs} />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        Smurfs: state.Smurfs,
        isFetching: state.isFetching,
        error: state.error,
    };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);