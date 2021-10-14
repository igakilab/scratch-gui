import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';
import {connect} from 'react-redux';

import ControlsComponent from '../components/controls/controls.jsx';
import { $CombinedState } from 'redux';

class Controls extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleGreenFlagClick',
            'handleStopAllClick'
        ]);
    }
    handleGreenFlagClick (e) {
        e.preventDefault();
        if (e.shiftKey) {
            this.props.vm.setTurboMode(!this.props.turbo);
        } else {
            if (!this.props.isStarted) {
                var db = OpenMyDatabase();
                InsertRecord(db);

                function OpenMyDatabase() {
                    var dbsize = 1000;
                var dbname = "scratch3.0 db";
                var dbversion = "1.0";
                var dbdescription = "scratch3.0のDatabase"
                var db = window.openDatabase(dbname, dbversion, dbdescription, dbsize, compFunc);
                if (db == null) {
                    console.log("データベースが開けませんでした");
                }

                function compFunc() {
                    console.log("データベースを作成しました");
                }

                // テーブル作成
                db.transaction(function(tx){
                    tx.executeSql(`
                    create table if not exists fire (
                        id integer primary key autoincrement,
                        fire varchar
                        )
                        `)
                        console.log("デーブルを作成しました");
                    })
                    return db;
                }

                console.log('緑の旗を押したよ');
                this.props.vm.start();
            }
            this.props.vm.greenFlag();
        }
    }
    handleStopAllClick (e) {
        e.preventDefault();
        console.log('停止ボタンを押したよ');
        this.props.vm.stopAll();
    }
    render () {
        const {
            vm, // eslint-disable-line no-unused-vars
            isStarted, // eslint-disable-line no-unused-vars
            projectRunning,
            turbo,
            ...props
        } = this.props;
        return (
            <ControlsComponent
                {...props}
                active={projectRunning}
                turbo={turbo}
                onGreenFlagClick={this.handleGreenFlagClick}
                onStopAllClick={this.handleStopAllClick}
            />
        );
    }
}

Controls.propTypes = {
    isStarted: PropTypes.bool.isRequired,
    projectRunning: PropTypes.bool.isRequired,
    turbo: PropTypes.bool.isRequired,
    vm: PropTypes.instanceOf(VM)
};

const mapStateToProps = state => ({
    isStarted: state.scratchGui.vmStatus.running,
    projectRunning: state.scratchGui.vmStatus.running,
    turbo: state.scratchGui.vmStatus.turbo
});
// no-op function to prevent dispatch prop being passed to component
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
