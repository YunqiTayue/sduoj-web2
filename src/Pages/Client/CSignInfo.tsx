import React, { Dispatch, useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Button, Form, message, Input } from "antd";
import cApi from "../../Utils/API/c-api_test";
import { connect } from "react-redux";
import MApi from "../../Utils/API/m-api";
import moment from "moment/moment";

const CSignInfo = (props: any) => {
    const signId = props.match.params.signId;
    const [ip, setIp] = useState('');
    const [username, setUsername] = useState<string>('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true); // 按钮状态

    const currentTime = moment();

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => setIp(String(data.ip)))
            .catch(error => console.error('Error fetching IP:', error));

        MApi.getSignInfo(signId)
            .then((value: any) => {
                setIsButtonDisabled(!isCheckinTime(value.startTime, value.endTime)); // 使用 API 返回的时间更新按钮状态
            })
    }, [signId]);

    const isCheckinTime = (startTime: string, endTime: string) => {
        const StartTime = moment(startTime, 'YYYY-MM-DD HH:mm:ss');
        const EndTime = moment(endTime, 'YYYY-MM-DD HH:mm:ss');
        return currentTime.isBetween(StartTime, EndTime);
    };

    return (
        <>
            <Form>
                <Form.Item
                    label={props.t("username")}
                    name="username"
                    rules={[{ required: true, message: '请输入学号！' }]}
                >
                    <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}  // 实时更新 username 状态
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        disabled={isButtonDisabled} // 按钮状态由 isButtonDisabled 控制
                        onClick={() => {
                            cApi.userCheckin({ username, sgId: signId, seatId: ip })
                                .then(() => message.success('签到成功'))
                                .catch(error => message.error('签到失败: ' + error));
                        }}
                    >
                        {props.t("signIn")}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

const mapStateToProps = () => { }

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({ })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(withRouter(CSignInfo)));
