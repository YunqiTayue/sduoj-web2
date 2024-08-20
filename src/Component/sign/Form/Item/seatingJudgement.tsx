import React, {Dispatch, useEffect, useState} from 'react';
import { withRouter} from 'react-router-dom';
import { withTranslation} from 'react-i18next';
import cApi from "../../../../Utils/API/c-api_test";
import {connect} from "react-redux";

const SeatingJudgement=(props:any)=>{

    const [ip,setIp]=useState('');
    const [backendIp, setBackendIp] = useState('');
    const [visible,setVisible]=useState(true);

    const source={
        group_id:props.group_id,
        username:props.username
    }

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response=>response.json())
            .then(data=>setIp(data.ip))
            .catch(error => console.error('Error fetching IP:', error));

        //待添加
        cApi.getUserSeatIP(source)
            .then((data:any)=>setBackendIp(data.ip))
            .catch(error => console.error('Error fetching backendIP:', error));
    }, []);

    useEffect(() => {
        if (ip && backendIp) {
            // 比较IP地址
            setVisible(ip === backendIp); // 设置visible为true或false，取决于IP是否匹配
        }
    }, [ip, backendIp]); // 当ip和backendIp更新时，触发此effect

    return (
        <div>
            {visible && (
                <div>
                    <p>当前IP: {ip}</p>
                    <p>绑定IP: {backendIp}</p>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state: any) => {}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    withTranslation()(
        withRouter(SeatingJudgement)
    ))
