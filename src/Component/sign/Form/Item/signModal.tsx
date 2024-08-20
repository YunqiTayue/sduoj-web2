import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Button, Modal ,message} from "antd";
import cApi from "../../../../Utils/API/c-api_test";

interface SignModalProps extends RouteComponentProps, WithTranslation {
    group_id: number;
    username: bigint; // 确保 username 类型为 bigint
}

const SignModal=(props:any)=>{
    const [loading,setLoading]=useState(false);
    const [username,setUsername]=useState("");
    const [sg_u_id,setSgUId]=useState();
    const [sg_id,setSgId]=useState();
    const [seat_id,setSeatId]=useState();
    const [visible,setVisible]=useState(false);

    const getSign=async ()=>{
        try {
            setLoading(true);
            await cApi.getUserSignInfo({group_id: props.group_id,username:props.username})
                .then((value:any)=>{
                    setUsername(value.username)
                    setSgId(value.sg_id)
                    setSgUId(value.sg_u_id)
                    setSeatId(value.seat_id)
                    setVisible(true)
                })
        }catch(error){
            console.log("不在签到时间范围内")
        }finally
        {
            setLoading(false);
        }
    }

    useEffect(() => {
        getSign();
    }, []);

    return (
        <Modal
            visible={visible}
            onCancel={() => setVisible(false)}
            footer={[
                <Button key="back" onClick={() => setVisible(false)}>
                    取消
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={() => cApi.userCheckin({sg_id,sg_u_id,seat_id}).then(message.success("签到成功！"))}>
                    确认签到
                </Button>,
            ]}
        >
            <h2>签到信息</h2>
            <p><strong>用户名：</strong>{username}</p>
        </Modal>
    );
}

export default withTranslation()(withRouter(SignModal))