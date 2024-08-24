import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Button, Modal } from "antd";
import cApi from "../../../../Utils/API/c-api_test";
import {data} from "browserslist";

interface QrCodeWithWebSocketProps extends RouteComponentProps, WithTranslation {
    group_id: number;
    username: string;
    onScanStatusChange: (scanned: boolean) => void;
}

const QrCodeWithWebSocket: React.FC<QrCodeWithWebSocketProps> = ({ group_id, username ,onScanStatusChange}) => {
    const [token, setToken] = useState(""); // 初始 token 状态为空
    const [scanned, setScanned] = useState(false);
    const [qrData, setQrData] = useState(""); // 初始 qrData 为空
    const [isModalVisible, setIsModalVisible] = useState(true); // 控制弹窗的可见性
    const [sgId,setSgId]=useState(1);
    // 获取 token 并更新 qrData
    const fetchTokenAndUpdateQrData = async () => {
        // console.log("Received data:", data)
            // const response:any = await cApi.getToken({ sg_id:sgId, username:username });
            // const newToken = response.token;
            cApi.getToken({sg_id:sgId,username:username})
                .then((data:any)=>{
                    console.log("Received data:", data);
                    const newToken=data.token;
                    setToken(newToken);
                    setQrData(JSON.stringify({ token: token, timestamp: Date.now() }));
                }).catch(error=>{console.log(error)})
    };

    useEffect(() => {
        cApi.getUserSignInfo({ group_id, username })
            .then((data: any) => {
                const sgId = data.sg_id; // 将 sg_id 转换为 bigint
                setSgId(sgId);
            }).catch(error=>{console.log(error)})
        // console.log("Received data:", data);
        fetchTokenAndUpdateQrData().then(()=>{}); // 组件加载时获取 token 并更新 qrData
        let intervalId: NodeJS.Timeout | undefined;

        const pollScanStatus = () => {
            cApi.getUserSignInfo({ group_id, username })
                .then((response: any) => {
                    if (response.sg_time !== null && response.sg_time !== "00-00-00 00:00:00") {
                        setScanned(true);
                        setToken(response.token); // 更新 token
                        setIsModalVisible(false);  // 用户已扫码，关闭弹窗
                        onScanStatusChange(true); // 调用回调函数通知父组件已扫描
                        if (intervalId) {
                            clearInterval(intervalId);  // 停止轮询
                        }
                    }
                });
        };

        if (isModalVisible && !scanned) {
            intervalId = setInterval(pollScanStatus, 3000);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isModalVisible, group_id, username, scanned]);

    const refreshQrCode = () => {
        if (!scanned) {
            fetchTokenAndUpdateQrData(); // 刷新二维码时获取新的 token 并更新 qrData
            setIsModalVisible(true);
        }
    };

    return (
        <>
            <Modal
                title="扫码签到"
                visible={isModalVisible}
                footer={null}
                closable={false}
            >
                <div style={{textAlign: "center"}}>
                    {!scanned ? (
                        <QRCode value={qrData}/>
                    ) : (
                        <p>您已完成扫码签到</p>
                    )}
                </div>
                <div style={{textAlign: "center"}}>
                    <Button
                        onClick={refreshQrCode}
                        style={{marginTop: "20px", display: "block", margin: "0 auto"}}
                        disabled={scanned}
                    >
                        Refresh QR Code
                    </Button>
                </div>
            </Modal>


        </>
    );
};

export default withTranslation()(withRouter(QrCodeWithWebSocket));
