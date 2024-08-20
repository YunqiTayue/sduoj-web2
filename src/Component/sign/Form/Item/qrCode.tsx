import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Button, Modal } from "antd";
import cApi from "../../../../Utils/API/c-api_test";

interface QrCodeWithWebSocketProps extends RouteComponentProps, WithTranslation {
    group_id: number;
    username: bigint;
}

const QrCodeWithWebSocket: React.FC<QrCodeWithWebSocketProps> = ({ group_id, username }) => {
    const [token, setToken] = useState(""); // 初始 token 状态为空
    const [scanned, setScanned] = useState(false);
    const [qrData, setQrData] = useState(""); // 初始 qrData 为空
    const [isModalVisible, setIsModalVisible] = useState(true); // 控制弹窗的可见性

    // 获取 token 并更新 qrData
    const fetchTokenAndUpdateQrData = async () => {
        try {
            const response:any = await cApi.getUserSignInfo({ group_id:group_id, username:username });
            const newToken = response.token;
            setToken(newToken);
            setQrData(JSON.stringify({ token: token, timestamp: Date.now() }));
        } catch (error) {
            console.error("Failed to fetch token:", error);
        }
    };

    useEffect(() => {
        fetchTokenAndUpdateQrData(); // 组件加载时获取 token 并更新 qrData

        let intervalId: NodeJS.Timeout | undefined;

        const pollScanStatus = () => {
            cApi.getUserSignInfo({ group_id, username })
                .then((response: any) => {
                    if (response.sgTime !== null && response.sgTime !== "") {
                        setScanned(true);
                        setToken(response.token); // 更新 token
                        setIsModalVisible(false);  // 用户已扫码，关闭弹窗
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
                <div style={{ textAlign: "center" }}>
                    {!scanned ? (
                        <QRCode value={qrData} />
                    ) : (
                        <p>您已完成扫码签到</p>
                    )}
                </div>
            </Modal>

            <div style={{ textAlign: "center" }}>
                <Button
                    onClick={refreshQrCode}
                    style={{ marginTop: "20px", display: "block", margin: "0 auto" }}
                    disabled={scanned}
                >
                    Refresh QR Code
                </Button>
            </div>
        </>
    );
};

export default withTranslation()(withRouter(QrCodeWithWebSocket));
